<!--
 * @Author: your name
 * @Date: 2021-05-06 20:53:04
 * @LastEditTime: 2021-05-07 10:34:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\common\swiper\SwiperItem.vue
-->
<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide",
};
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>
