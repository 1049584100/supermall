<!--
 * @Author: your name
 * @Date: 2021-05-04 19:21:36
 * @LastEditTime: 2021-05-04 21:46:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallf:\前端\protect\tabbar\src\components\tabbar\TabBarItem.vue
-->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 这里的插头，是用在App.vue中tab-bar-item的 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>

    <!-- 用div包插头，这样子只会替换插头部分，样式在div -->
    <!-- v-bind动态绑定activeStyle计算属性 -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  //   因为不能写死，当你用item的时候就告诉它用的路径叫什么
  props: {
    //希望它是一个字符串类型
    path: String,
    activeColor: {
      type: String,
      //default默认为红色
      default: "red",
    },
  },
  data() {
    return {
      //默认is是true
      //   isActive: true,
    };
  },
  computed: {
    isActive() {
      //   哪一个处于活跃，就拿到哪个path，在判断this.$route里面有没有这个path
      /*
            /home -> item1(/home) = true
            /home -> item1(/cart) = false
            /home -> item1(/profile) = false
            /home -> item1(/category) = false
        */
      //    indexof如果等于-1就等于没有从this.$route找到this.path，如果找到了就不等于-1
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      //如果等于isActive的传入颜色，就显示这个颜色，否则显示默认的颜色
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      // replace是添加
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  color: black;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /* 去掉图片默认有的下面三个像素 */
  vertical-align: middle;
}
</style>
