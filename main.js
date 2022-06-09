import App from './App';
import uView from 'uview-ui';
import {request} from '@/util/api.js'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})


app.$mount()
// #endif

// Vue.use(uView);
Vue.prototype.$request = request;


// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif