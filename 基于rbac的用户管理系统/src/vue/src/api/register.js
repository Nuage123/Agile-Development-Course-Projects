import request from '@/utils/request'
// import {getAccessToken} from '@/utils/auth'

// 用户注册
export function register(name, password,idCard,phone,email) {
  
  const data = {
    name,
    password,
    idCard,
    phone,
    email
  }
  return request({
    url: '/auth/register',
    method: 'post',
    data: data
  })
}


