
<template>
  <div class="signup-container">
    <div class="signup-box">
      <h3 style="margin-bottom: 0px;">我的资料</h3>
      <div class="signup-form">
      
        <el-form label-width="100px" ref="form"   label-position="left" style="width:75%">
          
          <el-form-item label="用户名" prop="username" >
  
            <i >{{ profile.username }}</i>
          </el-form-item>
          <el-form-item  label="姓名" prop="name" >
  
  <el-input v-model="profile.name"  placeholder="请输入姓名"></el-input>
</el-form-item>
          <el-form-item label="密码" prop="password" >
  
  <el-input v-model="profile.password" type="password" placeholder="请输入密码"></el-input>
</el-form-item>

          <el-form-item label="身份证号码" prop="idCard">
        
            <el-input v-model="profile.idCard" placeholder="请输入身份证号码"></el-input>
          </el-form-item>
          <el-form-item  label="手机" prop="phone" >
        
        <el-input  v-model="profile.phone" placeholder="请输入手机号码" ></el-input>
        
      </el-form-item>

          <el-form-item  label="邮箱" prop="email" >
        
            <el-input  v-model="profile.email" placeholder="请输入邮箱" ></el-input>
            
          </el-form-item>

      

      


        

          <!-- <el-form-item label="邮箱验证码" prop="validation">
   
            <el-input v-model="loginForm.validation" placeholder="请输入验证码"></el-input>
          </el-form-item> -->


          
          <el-form-item class="signup-btn">
            <el-button type="primary" @click="changeInfo">保存</el-button>
          
          </el-form-item>
          <!-- <el-button :loading="loading" class="valid-btn" type="text">验证邮箱</el-button> -->
          </el-form>
      </div>
    </div>
  </div>
</template>

<script>


// import {register} from '@/api/register.js'
import {getInfo} from "@/api/login"
import{changeInfo} from "@/api/change"
export default {
  data() {
    return {
     profile:{
      username:'',
        name:'',
        password: ' ',
        // gender:'',
        idCard:'',
        email:"",
        phone:"",
        // validation:''
     }
     
      };
  },
   
    
  mounted() {
    getInfo().then((res) => {
      this.profile.username = res.data.username;
      this.profile.name=res.data.name;
      this.profile.password=res.data.password;
      this.profile.idCard=res.data.idCard;
      this.profile.email=res.data.email;
      this.profile.phone=res.data.phone;

    });
  },
  
  methods: {
   changeInfo(){
    changeInfo(this.profile.username,this.profile.name, this.profile.password,this.profile.idCard,this.profile.phone,this.profile.email).then(res=>
     {
      alert(res.data);
      // alert("修改成功")
    }
      )
    }
   
   }
  }

</script> 
<style>
i{
  color: gray;
}
</style>

