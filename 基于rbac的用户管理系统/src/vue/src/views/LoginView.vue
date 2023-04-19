
<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-form">
        <h3>用户登录</h3>
        <el-form ref="form" :model="loginForm" :rules="rules" label-position="left" label-width="0">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
     
          <el-form-item style="margin-bottom: 10px;" >
            <el-button  @click="$router.push('/signup')" :loading="loading">注册</el-button>
        

            <el-button type="primary" @click="do_login" :loading="loading">登录</el-button>
           
          </el-form-item>
          <el-button type="text" @click="$router.push('/findPassword')" >忘记密码？</el-button>
          </el-form>
      </div>
    </div>
  </div>
</template>

<script>
//Bilibili
// import router from '@/router'
import {login} from '@/api/login.js'
import {setToken} from '@/utils/auth.js'


export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code:'',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      
      },
      loading: false
    }

  },
  methods: {
    do_login() {
      
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
       
          login(this.loginForm.username,this.loginForm.password).then(res =>{
            // alert(res.data.token) 
            setToken(res.data.accessToken)
            // console.log("token: "+res.data.token)
            this.$router.push({ path: '/' })
            }).catch(() => {
              // 登录失败，显示错误提示
              this.$message.error('用户名或密码错误')
              this.loading = false
            })
          
        }
      })
    }
  }
}
</script>

<style lang="scss">
.login-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  .login-box {
    width: 400px;
    height: 400px;
    margin:100px auto;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;
    background-image: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/22_open.4ea5f239.png),url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/33_open.f7d7f655.png);
    background-position: 0 100%,100% 100%;
    background-repeat: no-repeat,no-repeat;
    background-size:40%;

    }

    .login-form {
      padding: 20px;

      h3 {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
      }
    }
  
}

</style>
  