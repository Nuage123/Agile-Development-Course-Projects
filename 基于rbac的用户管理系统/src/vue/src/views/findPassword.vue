
<template>
    <div class="signup-container">
      <div class="signup-box">
        <h3 style="margin-bottom: 0px;">找回密码</h3>
        <div class="signup-form">
        
          <el-form label-width="100px" ref="form" :model="loginForm" :rules="rules" label-position="left" style="width:75%">
<!--             
            <el-form-item label="姓名" prop="username" >
    
              <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item> -->
            
            <el-form-item  label="邮箱" prop="email" >
          
          <el-input  v-model="loginForm.email" placeholder="请输入绑定邮箱" ></el-input>
          
        </el-form-item>
            <el-form-item label="新密码" prop="password" >
    
    <el-input v-model="loginForm.passoword" type="password" placeholder="请输入新密码"></el-input>
  </el-form-item>


     


        

        


          

            <el-form-item label="邮箱验证码" prop="validation">
            <!-- <el-label>邮箱验证码</el-label> -->
              <el-input v-model="loginForm.validation" placeholder="请输入验证码"></el-input>
            </el-form-item>


            
            <el-form-item class="signup-btn">
              <el-button type="primary">提交</el-button>
            
            </el-form-item>
            <el-button :loading="loading" class="valid-btn" type="text">验证邮箱</el-button>
            </el-form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 
  
  
  export default {
    data() {
      return {
        loginForm: {
          username:'',
          password: '',
          gender:'',
          id:'',
          email:"",
          validation:''
        },
        rules: {
          username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' }
        ],
          gender:[{required:true,message:"请选择性别",trigger:'change'}],
          id:[{required:true,message:"请输入身份证号码",trigger:'blur'}],
          email:[{required:true,message:"请输入邮箱",trigger:'blur'}],
          validation:[{required:true,message:"请输入邮箱验证码",trigger:'blur'}],
        },
        loading: false
      }
  
    },
    methods: {
 
    }
  }
  </script>
  
  <style scoped lang="scss">
  .signup-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
  
    .signup-box {
      width: 400px;
      height: 400px;
      margin:100px auto;
      border-radius: 5px;
      box-shadow: 0px 0px 10px #ccc;
      background-image: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/22_open.4ea5f239.png),url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/33_open.f7d7f655.png);
      background-position: 0 100%,100% 100%;
      background-repeat: no-repeat,no-repeat;
      background-size:30%;
  
      }
  
//       .login-form {
//         padding: 20px;
  
//         h3 {
//           font-size: 24px;
//           margin-bottom: 20px;
//           text-align: center;
//         }
//       }
    
//   }

.signup-form{
    position: relative;
    left:30px;
    top:60px
}
.signup-btn{
    position: relative;
    right: 30px;
}
.valid-btn{
  position: absolute;
  top: 5px;
  left: 310px;
}
.valid-btn::after{
  margin-top: 0;
}


  </style>
     