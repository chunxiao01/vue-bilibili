<template>
  <div class="tab-bar-item">
    <slot name="tab-bar-item-icon"></slot>
    <slot name="tab-bar-item-text"></slot>
  </div>
</template>
<script>
export default {
  name: "TabBarItem"
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  height: 55px;
  text-align: center;
}
.tab-bar-item img {
  width: 26px;
  height: 26px;
  margin-top: 3px;
  vertical-align: middle;
}
.tab-bar-item div {
  font-size: 15px;
}
</style>
