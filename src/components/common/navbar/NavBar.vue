<template>
  <div class="nav-bar">
    <div class="nav-bar-left">
      <slot name="nav-bar-left-slot"></slot>
    </div>
    <div class="nav-bar-center">
      <slot name="nav-bar-center-slot"></slot>
    </div>
    <div class="nav-bar-right">
      <slot name="nav-bar-right-slot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.nav-bar-left,
.nav-bar-right {
  width: 60px;
  flex-shrink: 0;
}
.nav-bar-center {
  flex: 1;
  text-align: center;
}
</style>
