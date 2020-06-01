import Vue from 'vue';
import App from './App.vue';
import './static/css/common.less';
import './static/js/flexible';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');
