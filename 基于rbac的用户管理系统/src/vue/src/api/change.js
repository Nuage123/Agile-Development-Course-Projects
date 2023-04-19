// import request from '@/utils/request'
// // import {getAccessToken} from '@/utils/auth'

// // 用户注册
// export function register(name, password,idCard,phone,email) {
  
//   const data = {
//     name,
//     password,
//     idCard,
//     phone,
//     email
//   }
//   return request({
//     url: '/auth/change',
//     method: 'post',
//     data: data
//   })
// }
import request from '@/utils/request'
// import {getAccessToken} from '@/utils/auth'

// 用户注册
export function changeInfo(username,name, password,idCard,phone,email) {
  
  const data = {
    username,
    name,
    password,
    idCard,
    phone,
    email
  }
  return request({
    url: '/user/profile/changeInfo',
    method: 'post',
    data: data
  })
}
