<template>
  <div class="input-wrapper">
    <label class="input-label">Input text</label>
    <div class="input-group">
      <client-only>
        <v-popover
          trigger="click"
          :auto-hide="false"
          :open.sync="showInputTypeDropdown"
        >
          <div class="tooltip-target input-header">
            {{ isInputTypeFreeText ? "Given value" : "Random email address" }}
          </div>

          <template slot="popover">
            <div class="dropdown">
              <div
                class="dropdown-item"
                :class="{ selected: isInputTypeFreeText }"
                @click="handleGivenValueMenuClick"
              >
                Given value
              </div>
              <div
                class="dropdown-item"
                :class="{ selected: !isInputTypeFreeText }"
                @click="handleRandomEmailMenuClick"
              >
                Random email address
              </div>
            </div>
          </template>
        </v-popover>
      </client-only>

      <input class="input-element" type="text" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      isInputTypeFreeText: true,
      showInputTypeDropdown: false,
    }
  },

  methods: {
    handleGivenValueMenuClick() {
      this.isInputTypeFreeText = true
      this.showInputTypeDropdown = false
    },
    handleRandomEmailMenuClick() {
      this.isInputTypeFreeText = false
      this.showInputTypeDropdown = false
    },
  },
})
</script>
<style scoped>
.input-wrapper {
  background: #fff;
  padding: 2rem 1.5rem;
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

.dropdown {
  font-size: 14px;
  color: #555;
  letter-spacing: 0.7px;
}

.dropdown-item {
  background: #fff;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.selected {
  background: #eee;
}
</style>
