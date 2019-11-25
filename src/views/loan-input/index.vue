<template>
    <div>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>个人基本信息</span>
        </div>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="出生日期" prop="birthday">
                <el-col :span="22">
                  <el-date-picker type="date" v-model="form.birthday" style="width: 100%;"></el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="性别" prop="sex">
                <el-select v-model="form.region" placeholder="please select">
                  <el-option label="男" value="man"></el-option>
                  <el-option label="女" value="woman"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="身份证" prop="identity_card">
                <el-input v-model="form.identity_card"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="婚姻状态" prop="marriage">
                <el-select v-model="form.marriage" placeholder="please select">
                  <el-option label="已婚" value="已婚"></el-option>
                  <el-option label="未婚" value="未婚"></el-option>
                </el-select>
              </el-form-item>
            </el-col>   <el-col :xs="24" :sm="12" :md="12" :lg="8" >
            <el-form-item label="教育程度" prop="education">
              <el-select v-model="form.education" placeholder="please select">
                <el-option label="小学" value="小学"></el-option>
                <el-option label="中学" value="中学"></el-option>
                <el-option label="大学" value="大学"></el-option>
                <el-option label="研究生" value="研究生"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="居住地址" prop="address1">
                <el-input v-model="form.address1"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="户籍地址" prop="address2">
                <el-input v-model="form.address2"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="居住电话" prop="phone">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="手机号" prop="mobile_phone">
                <el-input v-model="form.mobile_phone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>职业信息</span>
        </div>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="现职公司全称" prop="company">
                <el-input v-model="form.company"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="所属行业" prop="trade">
                <el-select v-model="form.trade" placeholder="please select">
                  <el-option label="创业" value="创业"></el-option>
                  <el-option label="工作" value="工作"></el-option>
                  <el-option label="无业" value="无业"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
            <el-form-item label="职位" prop="position">
              <el-input v-model="form.position"></el-input>
            </el-form-item>
          </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="公司地址" prop="address3">
                <el-input v-model="form.address3"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="公司类型" prop="company_type">
                <el-input v-model="form.company_type"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="公司邮箱" prop="company_email">
                <el-input v-model="form.company_email"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="公司电话" prop="company_phone">
                <el-input v-model="form.company_phone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="收支情况" prop="income">
                <el-input v-model="form.income"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>家人信息</span>
        </div>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="关系1" prop="contact">
                <el-input v-model="form.contact"></el-input>
              </el-form-item>
            </el-col>

            <el-col :xs="24" :sm="12" :md="12" :lg="8" >
              <el-form-item label="姓名" prop="contact_name">
                <el-input v-model="form.contact_name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" >
              <el-form-item label="手机" prop="contact_phone">
                <el-input v-model="form.contact_phone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

        <el-row :gutter="10">
          <el-col :xs="24" :sm="12" :md="12" :lg="8" >
            <el-form-item label="关系2" prop="contact2">
              <el-input v-model="form.contact2"></el-input>
            </el-form-item>
          </el-col>

          <el-col :xs="24" :sm="12" :md="12" :lg="8" >
            <el-form-item label="姓名" prop="contact2_name">
              <el-input v-model="form.contact2_name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" >
            <el-form-item label="手机" prop="contact2_phone">
              <el-input v-model="form.contact2_phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="12" :md="12" :lg="8" >
            <el-form-item label="部门" prop="contact2_dep">
              <el-input v-model="form.contact2_dep"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="8" >
            <el-form-item label="职位" prop="contact2_pos">
              <el-input v-model="form.contact2_pos"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" >
            <el-form-item label="remark" >
              <el-input v-model="form.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

        <el-form-item>
          <el-button type="primary" style="width:200px" @click="submitForm">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import {loanCreate} from '../../api/artical'
    export default {
        name: "index",
      data(){
          return{
            form: {
              name: 'huhu',
              identity_card: '444455667788990033',
              birthday: '2019-11-01',
              sex: 'woman',
              marriage: '22',
              education: '22',
              address1: '222',
              address2: '22',
              phone: '22',
              mobile_phone: '22',
              company: '22',
              trade: '22',
              position: '22',
              address3: '22',
              company_type: '22',
              company_email: '22',
              company_phone: '22',
              income: '22',
              contact: '22',
              contact_name: '22',
              contact_phone: '22',
              contact2: '22',
              contact2_name: '22',
              contact2_phone: '22',
              ontact2_dep: '22',
              contact2_pos: '22',
              remark:''
            },
            rules: {
              name: [
                { required: true, message: '请输入姓名', trigger: 'blur' },
                { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
              ],
              identity_card:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
                { min: 18, max: 18, message: '长度在 18 到 18个字符', trigger: 'blur' }
              ],
              birthday: [
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              sex:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              marriage: [
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              education:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              address1: [
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              address2:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              phone: [
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              mobile_phone: [
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              company: [
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              trade: [
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              position: [
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              address3: [
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              company_type: [
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              company_email:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              company_phone:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              income:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              contact:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              contact_name:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              contact_phone:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              contact2:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              contact2_name:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              contact2_phone:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              contact2_dep:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],
              contact2_pos:[
                { required: true, message: '请输入身份证', trigger: 'blur' },
              ],

            }
          }
      },
      methods: {
        submitForm() {
            // this.$http.post('loan/create',this.form).then(res=>{
            //   console.log(res.data)
            // }).catch(err=>{
            //   console.log('提交数据错误，请再检查')
            // })
          loanCreate(this.form).then(res=>{
              this.$router.push('/input-manage')
              console.log(res.data)
                }).catch(err=>{
               console.log('提交数据错误，请再检查')
             })
        },

      }
    }
</script>

<style scoped>
.box-card{
  margin-bottom: 20px;
}
</style>
