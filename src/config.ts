import type { CacpConfig } from "@cacp/ui";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
// 本地开发后台接口地址配置，线上忽略此配置，线上部署配置参考public/config.js文件

const devConfig: CacpConfig = {
  SERVICE_ID: "DSSN", // 应用服务Id，同CACPAppCode
  SERVICE_NAME: "dssn-portal-web", // 应用服务名
  // SERVICE_API: API_BASE_URL, // 应用服务后端API地址,根据实际开发修改地址
  SERVICE_API: "http://10.200.72.114:19001", // 应用服务后端API地址,根据实际开发修改地址
  SERVICE_PAGESIZE: 10, // 本应用表格分页缺省大小
  SERVICE_TIMEOUT: 10000, // 后端API超时请求超时时间
  FRAME_API: "http://app-api.dev-nb.com/cacp-demo-service", // 开发环境搭建一个统一入口后端，此处填统一入口后端api地址；
  NEED_USER_AUTHORITY: true, // 前端路由和控件是否需要鉴权
};

const $config = (window as any).$config as CacpConfig;
const { DEV } = import.meta.env;
export default DEV ? devConfig : $config;
