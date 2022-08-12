import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "./views/DashboardPage";
import ForgetPage from "./views/ForgetPage";
import LoginPage from "./views/LoginPage";
import MailPage from "./views/MailPage";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: LoginPage, alias: "/" },
    { path: "/dashboard", component: DashboardPage },
    { path: "/mail", component: MailPage },
    { path: "/forget", component: ForgetPage },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
