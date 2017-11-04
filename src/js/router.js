// import Vue from "vue";
// import VueRouter from "vue-router";

import vcRouterView from "../vue-components/RouterView.vue";

Vue.use(VueRouter);

// const vcHome = (resolve) => import("../vue-components/Home.vue").then(resolve);
const vcHome = () => import('../vue-components/Home.vue');

const routes = [
  {
    path: "/",
    component: vcHome
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(vcRouterView)
});

export {router};