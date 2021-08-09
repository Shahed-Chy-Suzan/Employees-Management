require("./bootstrap");                   //default

window.Vue = require("vue").default;       //default

import Vue from "vue";                    //for vue-router -1
import VueRouter from "vue-router";       //for vue-router -1
import { routes } from "./routes";        //for routes.js -2

Vue.use(VueRouter);                       //for vue-router -1

Vue.component("employees-index", require("./components/employees/Index.vue").default);

const router = new VueRouter({            //-3
    mode: "history",
    routes: routes
});

const app = new Vue({                     //-4
    el: "#app",
    router: router
});
