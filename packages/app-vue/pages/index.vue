<template>
  <main class="main">
    <h1>{{ name }}</h1>
    <p>Total steps: {{ steps.length }}</p>
    <div class="cards-wrapper">
      <template v-for="(step, idx) in steps">
        <div
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
        <!-- Enter a new line every 4 inputs -->
        <hr v-if="(idx + 1) % 4 === 0" :key="`line-break-${step.id}`" class="line-break"></hr>

        <!-- Every 4 inputs, we put a step editor at the end, this editor will be shared among the 4 inputs -->
        <StepEditor
          v-show="currentStepNumber > 0 && (Math.ceil((currentStepNumber)/4)*4 === Number(step.id) ||  Math.ceil((currentStepNumber)/4)*4 === Math.ceil((step.id)/4)*4 )"
          v-if="((idx + 1) % 4 === 0) || idx + 1 === steps.length"
          :key="`step-editor-${step.id}`"
          :value="currentStep && currentStep.value"
          class="step-editor"
          @update:input="handleInputChange($event, currentStepNumber)"
          @update:inputType="handleInputTypeChange($event, currentStepNumber)"
        />
      </template>
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
import Vue from "vue"

type Email = {
  id: string;
  address: string;
}

export default Vue.extend({
  async asyncData() {
    const res = await fetch(`http://localhost:8080/scenario`)
    const { name, steps } = (await res.json()) as Scenario
    return { name, steps }
  },

  data() {
    return {
      currentStepNumber: null,
      currentStep: null
    }
  },

  methods: {
    handleStepCardClick(step: Step) {
      this.currentStepNumber = Number(step.id)
      this.currentStep = step
    },
    handleInputChange (value, stepId) {

      const stepIndex = this.steps.findIndex(step => String(step.id) === String(stepId))

      if (stepIndex === -1) return
      const step = this.steps[stepIndex]
      step.value = value

      this.$set(this.steps, stepIndex, step)
    },
    async handleInputTypeChange (type, stepId) {
      if (type === "email") {
        const res = await fetch(`http://localhost:8080/email`)
        const { address } = (await res.json()) as Email

        this.handleInputChange(address, stepId)
      }

    }
  },
})
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

.line-break {
  width: 100%;
  border: none;
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

.step-editor {
  width: 100%;
  margin-top: 10px;
}
</style>
