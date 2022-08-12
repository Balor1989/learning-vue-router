import { createRouter, createWebHistory } from "vue-router";
import AppEmailBody from "./components/AppEmailBody";
import DashboardPage from "./views/DashboardPage";
import ForgetPage from "./views/ForgetPage";
import LoginPage from "./views/LoginPage";
import MailPage from "./views/MailPage";
import NotFound from "./views/NotFound";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: LoginPage, alias: "/" },
    { path: "/dashboard", component: DashboardPage },
    {
      path: "/mail",
      component: MailPage,
      children: [{ path: ":mailId?", component: AppEmailBody, props: true }],
    },
    { path: "/forget", component: ForgetPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
