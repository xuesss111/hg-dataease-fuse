// import { useCoreStore } from "@/stores";
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const { DEV } = import.meta.env;

// 页面组件
const Dataset = () => import('@/views/data/dataset/index.vue')
const Demo = () => import('@/views/data/demo/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dataset',
    name: 'Home',
    component: Dataset,
    meta: {
      title: '数据集'
    }
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
    meta: {
      title: '测试'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫，可以用来设置页面标题等
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

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

export default router
