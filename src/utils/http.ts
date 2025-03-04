// 引用axios
import axios from "axios"; // 62.2k (gzipped: 23k)
import { h } from "vue"; // 572.4k (gzipped: 184.2k)
import { ElLink, ElMessage, ElMessageBox } from "element-plus";
// import { SuccessResultCode, SystemFailResultCode, WarningResultCode } from "@cacp/ui";
import SuccessResultCode from "@cacp/ui";
import SystemFailResultCode from "@cacp/ui";
import WarningResultCode from "@cacp/ui";

const Axios = axios.create({
  timeout: 10000,
  withCredentials: false,
  headers: { "Content-Type": "application/json;charset=UTF-8" },
});

// 请求拦截
Axios.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    ElMessage.error({ message: err.message, duration: 0, showClose: true });
    return Promise.reject(err);
  }
);

// 响应拦截
Axios.interceptors.response.use((res) => {
  const contentType = res.headers["content-type"];
  if (typeof contentType === "string" && contentType.startsWith("application/json")) {
    // 只处理后端返回Resut<T>JSON对象时的错误提示，其他格式原样返回（例如：mime是未知文件流下载或已知文件等类型）
    if (res.data && (res.data.code !== SuccessResultCode || res.data.code !== WarningResultCode) && res.data.message) {
      ElMessage.error({
        message: res.data.message,
        duration: 0,
        showClose: true,
      });
    }
  }
  return res;
},
  (err) => {
    if (err.response && err.response.data) {
  const msg = err.response.data.message ?? '网络异常'
  ElMessage.error({
    message: h('div', [
      msg,
      h(
        ElLink,
        {
          type: 'primary',
          style: 'margin-left:12px',
          onClick: () => {
            ElMessageBox({
              title: msg,
              message: () => h('div', { style: 'white-space:normal;word-break:break-word;' }, JSON.stringify(err.response.data)),
              // h(JsonViewer, {
              //   data: JSON.parse(err.response.data)
              // }),
              customStyle: { width: '60%' }
            }).catch(() => {})
          },
          () => '详情'
        }
      )
    ]),
    duration: 0,
    showClose: true
  })
  return {
    data: {
      code: SystemFailResultCode,
      data: err.response.data,
      message: msg
    }
  }
}

ElMessage.error({ message: err.message || '网络异常，请稍后重试！', duration: 0, showClose: true })
return { data: { code: SystemFailResultCode, data: null, message: err.message } }
  }
);

export default Axios;
