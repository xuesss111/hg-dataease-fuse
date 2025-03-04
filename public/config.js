//项目部署上线后使用此配置
window.$config = {
    SERVICE_ID: 'CACP-NDSS-WEB', //应用服务Id，同CACPAppCode
    SERVICE_NAME: 'cacp-ndss-web', //应用服务名
    SERVICE_PAGESIZE: 20,
    SERVICE_API: '/api/service-api-name',//当前应用api地址，上线需要修改
    SERVICE_TIMEOUT: 10000, //请求超时时间
    NEED_USER_AUTHORITY: true,//是否需要权限控制
    FRAME_API: '/api/frame-api-service',//统一入口接口地址
  }