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

    <div class="input-wrapper">
      <label class="input-label">Input text</label>
      <div class="input-group">
        <div class="input-header">Given value</div>
        <input class="input-element" type="text" />
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

.input-wrapper {
  background: #fff;
  padding: 2rem 1.5rem;
  margin: 2rem -5rem 0 -5rem;
}

.input-label {
  display: block;
  font-size: 1rem;
  color: #333;
  font-weight: 600;
  letter-spacing: 0.8px;
  margin-bottom: 0.625rem;
}

.input-group {
  display: flex;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.input-header {
  padding: 0.7rem 1rem;
  background: #545b62;
  font-size: 14px;
  color: #fff;
  letter-spacing: 0.7px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  flex: 0 0 auto;
  width: auto;
}

.input-element {
  width: 100%;
  min-width: 0;
  border: none;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
}
</style>
