<!--
 * @Author: your name
 * @Date: 2021-05-02 21:55:03
 * @LastEditTime: 2021-05-04 19:19:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallf:\前端\protect\tabbar\src\components\tabbar\TabBar.vue
-->
<template>
  <!-- 这里是页面显示结果 -->
  <div id="tab-bar">
    <!-- 这里的插头是App.vue中的<tab-bar> -->
    <slot></slot>
  </div>
</template>

<script>
</script>

<style scoped>
/* 这里是样式表 */
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.08);
}
</style>
