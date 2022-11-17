import Vue from "vue";
import store from "@/store";
import VueRouter from "vue-router";

import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import JogadoresView from "../views/JogadoresView.vue";
import JogadorDetailView from "../views/JogadorDetailView.vue";
import PerfilView from "../views/PerfilView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "",
        name: "HomeView",
        component: HomeView,
      },
      {
        path: "/jogadores",
        name: "JogadoresView",
        component: JogadoresView,
      },
      {
        path: "/jogadores/:id",
        name: "JogadorDetailView",
        component: JogadorDetailView,
      },
      {
        path: "/perfil",
        name: "PerfilView",
        component: PerfilView,
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/Blank.vue"),
    meta: {
      auth: false,
    },
    children: [
      {
        path: "/login",
        name: "LoginView",
        component: LoginView,
      },
      {
        path: "/cadastro",
        name: "CadastroView",
        component: () => import("@/views/CadastroView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (!store.state.auth.loggedIn) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
