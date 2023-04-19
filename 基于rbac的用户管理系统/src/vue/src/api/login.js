// import request from 'request.js' 这行代码实际上是从一个名为 request.js 的文件中导入默认导出的模块，并将其赋值给 request 变量。

// 具体来说，它会：

// 根据相对路径 'request.js' 找到对应的文件。
// 加载该文件，并执行其中的代码。
// 找到文件中的默认导出，该导出可以是任意类型的值（对象、函数、字符串等），但必须是唯一的。
// 将该导出赋值给 request 变量，以便在当前文件中使用它。
import request from '@/utils/request'
// import {getAccessToken} from '@/utils/auth'

// 用户登录
export function login(username, password) {
  
  const data = {
    username,
    password
  }
  return request({
    url: '/auth/login',
    method: 'post',
    data: data
  })
}


// 获取用户信息
export function getInfo() {
  return request({
    url: 'user/profile/get',
    method: 'get'
  })
}