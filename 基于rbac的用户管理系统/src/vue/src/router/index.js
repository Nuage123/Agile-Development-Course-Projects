import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 如果 @/layout 目录下只有一个 index.vue 文件，那么这个 Layout 组件很有可能就是该文件导出的默认 Vue 组件。在这种情况下，import Layout from '@/layout' 就相当于从 @/layout 目录中导入默认的 Vue 组件，并将其赋值给名为 Layout 的变量。在代码中，这个 Layout 组件可以通过变量 Layout 访问和使用。
// 如果 layout 目录下有多个文件，通常情况下会存在一个默认导出的文件，如 index.vue，它通常被用作布局组件的容器。同时也可以定义其他子组件，这些组件可以是单独的 .vue 文件，也可以是 .js 或 .ts 文件，然后再由布局组件去引用它们。最终，这些组件会被组合起来构成一个完整的布局。布局组件的具体结构和设计根据项目需求和开发者的喜好而定。
import Layout from '@/layout/IndexPage.vue'
Vue.use(VueRouter)

// path：路由匹配的路径，可以是字符串、正则表达式或者一个包含路径的数组。

// name：路由的名称，方便在程序中进行路由跳转。

// component：对应的组件，可以是通过 import 引入的组件，也可以是一个懒加载的组件。

// children：子路由，是一个数组，可以嵌套多层。

// redirect：重定向，当用户访问某个路径时，可以自动跳转到另外一个路径。

// meta：元信息，可以在路由配置中添加一些自定义的数据，比如页面标题、页面描述等。

// props：传递给组件的 props 数据，可以是一个对象或者是一个布尔值。
const originalPush=VueRouter.prototype.push
VueRouter.prototype.push=function push(location){
  return originalPush.call(this,location).catch(err=>err)
}

const routes = [
  // 首页
  {
    path: '/',

    component: Layout,
    children:[{
      path:"/",
      name: 'home',
      component:HomeView
    }]
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
 
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupView.vue')
  },

  {
    path: '/findPassword',
    name: 'findPassword',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/findPassword.vue')
  },
  {
    path: '/rbac',
    component:Layout,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children: [{
      path: 'user/list',
      component:() => import( '../views/ListView.vue')
    },
    {
      path: 'user/add',
      component:() => import( '../views/AddView.vue')
    },
    {
      path: 'user/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/MyProfile.vue')
    }
  ]
  }
  ]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
