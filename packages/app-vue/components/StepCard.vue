<template>
  <div class="wrapper">
    <div class="step-number">{{ stepNumber }}</div>
    <div class="step-card-text">{{ stepCardText }}</div>
  </div>
</template>

<script lang="ts">
import { Keyword, Step } from "@iaf/api"

export default {
  props: {
    stepNumber: {
      type: Number,
      required: true,
    },
    step: {
      type: Object,
      required: true,
    },
  },
  computed: {
    stepCardText() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const step = (this as any).step as Step
      switch (step.keyword) {
        case Keyword.Visit:
          return `Visit "${step.value}"`
        case Keyword.InputText:
          return `Input "${step.value}"`
        default:
          return "Unknown error"
      }
    },
  },
}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 11.25rem;
  height: 7rem;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0.125rem 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8125rem;
  word-break: break-all;
  padding: 0.75rem;
  text-align: center;
}
.step-number {
  padding: 0.125rem 0.25rem;
  min-width: 1.25rem;
  border-radius: 0.25rem;
  background-color: #333;
  line-height: 1rem;
  font-size: 0.875rem;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
}
.step-card-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
