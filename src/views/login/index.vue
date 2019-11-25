<template>
  <div class="background_pic">
    <div class="login">
      <h1>银行信贷审批系统</h1>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="账号" prop="account" >
          <el-input v-model="form.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">登录</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {setToken,getToken,removeToken} from "../../utils/cookie";
  import {login} from '../../api/artical'
  export default {
        name: "index",
      data(){
          return{
            form: {
              account:'admin',
              password:'admin@123'
            },
            rules: {//校验，账号和密码类型
              account: [
                { required: true, message: '请输入账号', trigger: 'blur' },
                { min:3, max: 13, message: '长度在 3到 13个字符', trigger: 'blur' }
              ],
             password: [
               { required: true, message: '请输入密码', trigger: 'blur' },
               { min: 3, max: 13, message: '长度在 3到 13个字符', trigger: 'blur' }
              ]
            },
          }
      },
      methods: {
        submitForm(formName) {  //获取登录数据，正确的话跳转到/home
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // this.$http.post('user/login',this.form).then(res=>{
              //   console.log(res.data)
              //   if(res.data.code=='20000'){
              //     this.$router.push('/home')
              //     setToken(res.data.data.token)
              //   }
              // }).catch(err=>{
              //     console.log('登录账号或密码错误')
              // })
              login(this.form).then(res=>{
                console.log(res.data)
                // if(res.data.code=='20000'){
                      this.$router.push('/home')
                      setToken(res.data.token)
                console.log(res.data.token)
                    // }
              }).catch(err=>{
                console.log('登录账号或密码错误')
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
.background_pic{
  background-image: url("../../assets/img/start.jpg");
  width:100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
}
  .login{
    width:600px;
    height:300px;
    background-color: aliceblue;
    margin:100px auto;
    padding:50px;
  }
</style>
