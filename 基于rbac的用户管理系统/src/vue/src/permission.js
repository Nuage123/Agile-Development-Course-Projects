// import router from './router'

// import { getAccessToken } from '@/utils/auth'

// //这段代码使用了Vue Router的导航守卫功能，在用户访问一个新的路由之前执行一些操作。

// // router.beforeEach()是全局前置守卫函数，会在每个路由切换前执行。该函数接收三个参数：to、from、next，分别表示即将进入的路由对象、当前离开的路由对象和一个回调函数。在该函数中，首先通过getAccessToken()函数获取本地存储中的ACCESS_TOKEN，如果有token，则允许访问路由，否则全部重定向到登录页。

// // router.afterEach()是全局后置钩子函数，会在每个路由切换完成后执行。在这个例子中，该函数没有任何操作，留空即可。

// // 需要注意的是，在使用导航守卫时，需要先导入Vue Router实例和相关的函数或模块。其中，import router from './router'导入Vue Router实例，import { getAccessToken } from '@/utils/auth'导入获取token的函数。 
// router.beforeEach((to, from, next) => {
//     //如果有token
//     // 在 JavaScript 中，一些值会被视为假（false），如 false、0、空字符串、null、undefined 和 NaN，其余的值都被视为真（true）。

// // 在这段代码中，如果 getAccessToken() 返回的是假值（即没有 token），那么条件判断语句的结果为假，进入 else 分支。反之，如果 getAccessToken() 返回的是真值（即存在 token），那么条件判断语句的结果为真，进入 if 分支。因此可以用这种方式来判断一个值是否存在。
//   if (getAccessToken()) {
//     // === 是严格相等的比较运算符，用来比较两个值是否类型和值都相等，返回布尔值 true 或 false。

// // == 是非严格相等的比较运算符，用来比较两个值是否相等，可以自动进行类型转换，比如将字符串转为数字再进行比较。但是它存在类型隐式转换，会引发一些意想不到的结果，所以在开发中建议尽量使用 === 进行比较。
//     if (to.path === '/login') {
//       next({ path: '/' })
//     } 
//     next()
//   } else {
//     // 没有token
//     if (to.path === '/login') {
//       // 直接进入
//       next()
//     } else {
//       next('/login') // 否则全部重定向到登录页
//     }
//   }
// })

// router.afterEach(() => {
  
// })
import router from './router'

import { getAccessToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
 
  if (getAccessToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } 
    next()
  } 
  else {
    console.log(to.path)
    if (to.path === '/signup'||to.path === '/findPassword') {
      // 直接进入
      next()
    } 
    // 没有token
    else if (to.path === '/login') {
      // 直接进入
      next()
    } 
    else{
      console.log("1")
      next('/login') // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {
  
})