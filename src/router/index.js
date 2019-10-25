import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import demo1 from "@/pages/demo1/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/demo1",
      name: "demo1",
      component: demo1
    }
  ]
});
