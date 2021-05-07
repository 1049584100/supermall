/*
 * @Author: your name
 * @Date: 2021-05-02 20:50:55
 * @LastEditTime: 2021-05-05 15:01:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermallf:\前端\protect\supermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
