// 通常情况下，我们会在main.js中引入一些全局的配置，例如路由、状态管理器、第三方库等等，然后在Vue实例中注入它们。而在组件中，我们通常只引入和使用组件相关的依赖。

// 但是，在实际开发中，并没有什么固定的规则。有时候，我们可能需要在组件中引入一些全局的依赖，例如Element UI、Axios等等。在这种情况下，我们需要在组件中单独引入它们。

// 总的来说，如果一个依赖是在整个应用中都要使用的，就应该在main.js中引入；如果一个依赖只在某个组件中使用，就应该在组件中引入。

// 在这个文件中，需要引入以下值：

// App.vue：这是应用程序的根组件，包含应用程序的主要布局和逻辑。
// router：这是 Vue Router 的实例，包含应用程序的所有路由信息和导航守卫。
// store：这是 Vuex 的实例，包含应用程序的状态管理逻辑。
// ElementUI：这是 UI 框架 ElementUI 的实例，用于渲染应用程序的 UI 组件和样式。
// 除此之外，如果你的应用程序需要其他的库或模块，也可以在这里引入它们。
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './permission.js' 
// import "./utils/auth.js"
// import './permission' 

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
