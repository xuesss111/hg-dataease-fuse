// import { useCoreStore } from "@/stores";
import { createRouter, createWebHashHistory, RouterView } from "vue-router"; // 32k (gzipped: 12.1k)

const { DEV } = import.meta.env;

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: RouterView,
      children: [
        // { path: "/", redirect: "/home" },
        {
          path: "/",
          name: "Home",
          component: () => import("@/views/data/dataset/index.vue"),
          meta: { title: "首页", keepAlive: true },
        },
        // // 应用中其他路由
        // ...appRouter,
        // {
        //   path: "error",
        //   name: "error",
        //   component: () => import("@/views/ErrorView.vue"),
        //   meta: {
        //     title: "错误页面",
        //     keepAlive: true,
        //   },
        // },
        // {
        //   path: ":pathMatch(.*)*",
        //   name: "NotFound",
        //   component: () => import("@/views/ErrorView.vue"),
        //   meta: {
        //     title: "404 Not Found",
        //     keepAlive: true,
        //   },
        // },
      ],
    },
  ],
});

// 全局路由守卫（登录拦截）
// router.beforeEach(async (to, from, next) => {
//   // 当to.path为/error的时候，不去校验是否有用户信息
//   if (to.path === "/error") {
//     next();
//     return;
//   }
//   // const coreStore = useCoreStore();
//   // await coreStore.init();
//   // const user = coreStore.currentUser;
// //   if (!user) {
// //     next({
// //       path: "/error",
// //       query: { redirect: to.fullPath },
// //     });
// //     return;
// //   }
// //   if (DEV || !to.meta?.permissions) {
// //     next();
// //     return;
// //   }
// //   const permissions = (to.meta.permissions as string).split(",");
// //   const authorities = coreStore.userAuthority?.permissions ?? [];
// //   if (authorities.some((a) => permissions.includes(a.code))) {
// //     next();
// //   } else {
// //     next({ path: "/error" });
// //   }
// });

export default router;
