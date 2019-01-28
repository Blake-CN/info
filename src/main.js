import 'amfe-flexible';
import Vue from 'vue';
import App from './App.vue';

import ajax from './components/axios';

// ajax全局配置
Vue.prototype.$ajax = ajax;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
