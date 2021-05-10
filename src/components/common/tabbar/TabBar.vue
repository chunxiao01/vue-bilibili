<template>
  <div id="tab-var">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style scope>
#tab-var {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px rgba(0, 0, 0, 0.1);
}
</style>
