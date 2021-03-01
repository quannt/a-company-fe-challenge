<template>
  <main class="main">
    <h1>{{ name }}</h1>
    <p>Total steps: {{ steps.length }}</p>
    <div class="cards-wrapper">
      <div
        v-for="(step, idx) in steps"
        :key="step.id"
        class="step-card-wrapper"
      >
        <StepCard
          :step="step"
          :step-number="idx + 1"
          @click.native="handleStepCardClick(step)"
        />
        <div class="arrow-wrapper">
          <Arrow />
        </div>
      </div>
      <div class="step-card-wrapper finish-card-wrapper">
        <div class="finish-card">
          <font-awesome-icon icon="flag-checkered" />
          Finish
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Scenario, Step } from "@iaf/api"

export default {
  async asyncData() {
    const res = await fetch(`http://localhost:8080/scenario`)
    const { name, steps } = (await res.json()) as Scenario
    return { name, steps }
  },
  methods: {
    handleStepCardClick(step: Step) {
      console.log("clicked", step)
    },
  },
}
</script>

<style scoped>
.main {
  padding: 2.5rem 5rem;
}
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.step-card-wrapper {
  position: relative;
  margin: 1.25rem calc(3.25rem - 0.75rem) 0 0;
  display: flex;
}
.arrow-wrapper {
  position: absolute;
  right: 0;
  transform: translate(100%, -50%);
  top: 50%;
  width: 3.25rem;
}
.finish-card-wrapper {
  display: flex;
  align-items: center;
}
.finish-card {
  background: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
}
svg {
  margin-right: 0.25rem;
}
</style>
