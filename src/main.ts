import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import auth from './components/auth';

Vue.config.productionTip = false;
Vue.http.options.root = '/api';
Vue.http.headers.common['X-Requested-With'] = 'XMLHttpRequest';

auth.checkAuth();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
