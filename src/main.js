import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./http/http";
import VueCookies from "vue-cookies";
import Vant from "vant";
import "vant/lib/index.css";
import "./libs/rem";

Vue.use(Vant);
Vue.use(VueCookies);
Vue.config.productionTip = false;
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
