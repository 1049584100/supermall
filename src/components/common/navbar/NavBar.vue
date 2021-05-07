<!--
 * @Author: your name
 * @Date: 2021-05-05 19:59:14
 * @LastEditTime: 2021-05-05 20:15:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallf:\前端\protect\supermall\src\components\common\navbar\NavBar.vue
-->
<template>
  <!-- 因为别的地方用了id，这个地方最好用class -->
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}

.left,
.right {
  width: 60px;
}

.center {
  /* 只剩下中间的设置1可以全部占据 */
  flex: 1;
}
</style>
