<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive" class="item-icon">
      <slot name="tab-bar-item-icon"></slot>
    </div>
    <div v-show="isActive" class="item-icon">
      <slot name="tab-bar-item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive, 'item-text': 'item-text' }">
      <slot name="tab-bar-item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    link: String
  },
  //   data() {
  //     return {
  //       isActive: false
  //     };
  //   },
  computed: {
    isActive() {
      return this.$route.path == this.link;
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link).catch(err => err);
    }
  }
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
.tab-bar-item div.item-text {
  font-size: 15px;
}
.tab-bar-item .active {
  color: #ff509b;
}
</style>
