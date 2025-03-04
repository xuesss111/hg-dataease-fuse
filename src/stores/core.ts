// // 获取用户信息与权限
// import { getUserAuthority } from '@/apis/authority'
// import { getFrameUser } from '@/apis/frame'
// import config from '@/config'
// import type { FrameUserInfo, Result, SuccessResultCode, UserAuthorityInfo, setTheme } from '@cacp/ui'
// import { defineStore } from 'pinia'

// interface CoreState {
//   isInitiated: boolean;
//   isAuthInitiated: boolean;
//   currentUser: FrameUserInfo | undefined;
//   userAuthority: UserAuthorityInfo | undefined;
// }

// export const useCoreStore = defineStore('core', {
//   state: (): CoreState => ({
//     isInitiated: false,
//     isAuthInitiated: false,
//     currentUser: undefined,
//     userAuthority: undefined
//   }),
//   actions: {
//     async init() {
//       if (config.NEED_USER_AUTHORITY || !this.isAuthInitiated) {
//         const res: Result<UserAuthorityInfo> = await getUserAuthority()
//         if (res.code === SuccessResultCode) {
//           this.$patch({
//             isAuthInitiated: true,
//             userAuthority: res.data
//           })
//         }
//       }
//       if (!this.isInitiated) {
//         const res: Result<FrameUserInfo> = await getFrameUser()
//         console.log('res', res)
//         if (res.code === SuccessResultCode) {
//           this.$patch({
//             isInitiated: true,
//             currentUser: res.data
//           })
//           setTheme(res.data.theme)
//         }
//       }
//     },
//     clear() {
//       this.$patch({
//         isInitiated: false,
//         isAuthInitiated: false,
//         currentUser: undefined,
//         userAuthority: undefined
//       })
//     }
//   }
// })