<!--
 * @Author: your name
 * @Date: 2021-05-07 13:52:27
 * @LastEditTime: 2021-05-07 14:17:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editt
 * @FilePath: \supermall\src\views\home\childComps\RecommendView.vue
-->
<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      //默认值
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
