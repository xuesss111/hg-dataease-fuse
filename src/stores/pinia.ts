import { createPinia } from 'pinia'; // 4.5k (gzipped: 2.1k)
import { createPersistedState } from 'pinia-plugin-persistedstate'; // 2.2k (gzipped: 997)

import config from '@/config';
// import { deserialize, serialize } from '@cacp/ui'; // 478 (gzipped: 307)
// import { default as deserialize, default as serialize } from '@cacp/ui'; // 478 (gzipped: 307)

const pinia = createPinia()
pinia.use(
  createPersistedState({
    auto: true,
    storage: sessionStorage,
    key: (id) => `_${config.SERVICE_ID}_${id}`,
    // serializer: {
    //   deserialize: deserialize,
    //   serialize: serialize
    // }
  })
)

export default pinia