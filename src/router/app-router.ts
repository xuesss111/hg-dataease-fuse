import type { RouteRecordRaw } from "vue-router";

const routers: Array<RouteRecordRaw> = [
  {
    path: "/card-pass-list",
    name: "ListView",
    component: () => import("@/views/cardPass/ListView.vue"),
    meta: {
      title: "过卡清单",
      anonymous: true,
      keepAlive: true,
    },
  },
];

export default routers;
