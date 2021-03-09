import 'feather-icons'
import Vue from 'vue'
import VueFeatherIcon from 'vue-feather-icon'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { store } from './store/store'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';

Vue.use(Donut);
Vue.use(Vuesax, {
  // options here
});
Vue.use(VueFeatherIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  components: { App },
  render: (h) => h(App),
}).$mount('#app');
