
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex';


import iView from 'iview'; // 导入组件库  
import 'iview/dist/styles/iview.css'; // 导入样式 




Vue.use(iView); 


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
