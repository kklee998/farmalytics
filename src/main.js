import Vue from 'vue';
import ElementUI from 'element-ui';
import VueApexCharts from 'vue-apexcharts';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
