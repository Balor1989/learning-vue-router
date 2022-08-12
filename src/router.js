import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./views/LoginPage";
const MailPage = () => import("./views/MailPage");
const NotFound = () => import("./views/NotFound");
const ForgetPage = () => import("./views/ForgetPage");
const DashboardPage = () => import("./views/DashboardPage");
const AppEmailBody = () => import("./components/AppEmailBody");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: LoginPage, alias: "/" },
    { path: "/dashboard", component: DashboardPage, meta: { cantEnter: true } },
    {
      path: "/mail",
      component: MailPage,
      meta: { cantEnter: true },
      children: [{ path: ":mailId?", component: AppEmailBody, props: true }],
    },
    { path: "/forget", component: ForgetPage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.cantEnter) {
//     next(false);
//     return;
//   }
//   next();
// });
// router.afterEach((to, from, next) => {});

export default router;
