<template>
<div>
  <div style="margin: 20px;"></div>
  <el-form  label-width="80px" :model="ruleForm" :rules="rules">
    <el-form-item label="用户名" prop="account">
      <el-input v-model="ruleForm.account"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input v-model="ruleForm.password2"></el-input>
    </el-form-item>
    <el-form-item label="权限分配" >
      <el-radio-group v-model="ruleForm.role_id">
        <el-radio :label="2">销售人员</el-radio>
        <el-radio :label="1">初审人员</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
  import {createManager} from '../../api/artical'
  import { Message } from 'element-ui'
    export default {
        name: "createManager",
      data(){
          return{
            ruleForm: {
              account: 'yyyyy',
              password: 'yyyyy123',
              password2: 'yyyyy123',
              role_id:2
            },
            rules: {
              name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输入密码',  trigger: 'change' },
                { min: 6, max: 12, message: '长度在 6 到 12个字符', trigger: 'blur' }
              ],
              password2: [
                {  required: true, message: '请再次输入密码',  trigger: 'blur' },
                { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
              ],}
          }
      },
      methods:{
        submitForm(ruleForm){
          if (this.ruleForm.password2  !== this.ruleForm.password) {
            Message({
              message: '两次输入密码不一致!'
            })
          }
           else {
              createManager({account:this.ruleForm.account,password:this.ruleForm.password,role_id:this.ruleForm.role_id}).then(res=>{
                console.log(res.data)
                Message({
                  message: '管理人员创建成功！！',
                })
                this.resetForm()
              }).catch(err=>{
                console.log('管理人员创建失败')
              })

          }
       },
          resetForm(formName) {
            this.ruleForm='';
          }
      },
      components:{

      }
    }
</script>

<style scoped>

</style>
