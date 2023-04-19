<template>
    <div>
        <div  class="top-header"><div class="top-img"></div></div>
       <div class="body">
        <div class="side-bar">
            <el-menu class="el-menu-vertical-demo" background-color="#e1e4ea" text-color="#717171" active-text-color="#000">
                <el-menu-item index="/" @click="$router.push('/')">
                    <i class="el-icon-house"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/rbac/user/list" @click="$router.push('/rbac/user/list')" >
                    <i class="el-icon-menu"></i>
                    <span slot="title">用户列表</span>
                </el-menu-item>
                <el-menu-item index="/rbac/user/add" @click="$router.push('/rbac/user/add')">
                    <i class="el-icon-setting"></i>
                    <span slot="title">添加用户</span>
                </el-menu-item>
                <el-menu-item index="/rbac/user/profile" @click="$router.push('/rbac/user/profile')">
                    <i class="el-icon-setting"></i>
                    <span slot="title">我的资料</span>
                </el-menu-item>
                <el-menu-item index="/logout" @click="logout">
                    <i class="el-icon-setting"></i>
                    <span slot="title">退出</span>
                </el-menu-item>
            </el-menu>
  
            <div class="main-content">
                <router-view/>
            </div>
        </div>
        </div>
        <div class="footer">
           <div class="copyright"> copyright@nuage</div>
        </div>
    </div>
  </template>

<script>
import {removeToken} from '@/utils/auth'
export default {
  name: "MyComponent",
  methods: {
    logout() {
      this.$confirm('确定注销并退出系统吗？', '提示').then(() => {
        removeToken()
        this.$router.push({ path: '/login' })
        // alert(1)
      }).catch(() => {});
    },
  },
};
</script>
  
  <style lang="scss" scoped>
  .top-header{
    background-color: #00a1d7;
    // margin-bottom: 20px;
    height: 86px;
    margin: 0 20px;
  }
 .top-img {
    width: 980px;
    height: 106px;
    margin: 0 auto;
    padding: 200px;
    background: url(//s1.hdslb.com/bfs/static/jinkela/account/assets/rl_top.png) no-repeat;
 }
 .body{
    margin: 20px;
 }
  .side-bar {
  display: flex;
  height: 100vh;
  
 
  }

  .el-menu-vertical-demo{
    width: 150px;

  }
  .el-menu-item.is-active { background-color:#00a1d7!important;  }
//   <el-menu-item index="/" @click="$router.push('/')">


  .main-content {
  flex: 1;
  padding: 20px;
//   margin:20px;
  }
  .footer{
    margin: 0;
    padding-bottom: 20px;
    background-color: #f6f9fa;
    height: 50px;
  }  
  .copyright{
   position: relative;
   top: 30px;
   left:40px ;
  }
 
  
  
  </style>