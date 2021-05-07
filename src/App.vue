<!--
 * @Author: your name
 * @Date: 2021-05-02 21:11:07
 * @LastEditTime: 2021-05-05 15:02:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallf:\前端\protect\supermall\src\App.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-05-02 21:11:07
 * @LastEditTime: 2021-05-02 21:38:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallf:\前端\protect\supermall\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
