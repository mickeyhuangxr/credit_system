<template>
<div>
  <div style="margin:10px 0">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="600">
      <el-table-column
        prop="account"
        label="用户名"
        width="200"> </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="200">
      </el-table-column>
      <el-table-column
        prop="reg_time"
        label="创建时间"
        width="280">
      </el-table-column>
      <el-table-column
        prop="creator"
        label="创建者"
        width="150">
      </el-table-column>
      <el-table-column
        prop="role_name"
        label="权限分配"
        width="200">
      </el-table-column>

    </el-table>
  </div>
</div>
</template>

<script>
  import {showManager} from '../../api/artical'
    export default {
        name: "showManager",
      data(){
          return{
            tableData:[],

          }
      },
      methods:{
       showData(){
         showManager().then(res=>{
           console.log(res.data)
           this.tableData=res.data

         }).catch(err=>{
           console.log('管理人员获取失败')
         })
       }
      },
    mounted() {
          this.showData()
    }
    }
</script>

<style scoped>

</style>
