<template>
  <div class="wrapper">
    <div class="arrow-body" />
    <div class="arrow-head" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  align-items: center;
}
.arrow-body {
  border: 0.0625rem dashed #d8d8dc;
  width: 100%;
}
.arrow-head {
  border-top: calc(0.75rem / 2) solid transparent;
  border-bottom: calc(0.75rem / 2) solid transparent;
  border-left: 0.75rem solid #d8d8dc;
  flex: none;
}
</style>
