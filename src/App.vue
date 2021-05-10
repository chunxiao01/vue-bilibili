<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img
          slot="tab-bar-item-icon"
          src="./assets/img/tabbar/3_1.svg"
          alt="首页"
        />
        <div slot="tab-bar-item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img
          slot="tab-bar-item-icon"
          src="./assets/img/tabbar/2_1.svg"
          alt="分类"
        />
        <div slot="tab-bar-item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img
          slot="tab-bar-item-icon"
          src="./assets/img/tabbar/1_1.svg"
          alt="我的"
        />
        <div slot="tab-bar-item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/common/tabbar/TabBar";
import TabBarItem from "./components/common/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
@import url("assets/css/base.css");
</style>
