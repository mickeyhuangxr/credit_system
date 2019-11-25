<template>
    <div>
      <div id="search" style="float: left">
        <input type="search" placeholder="请输入名字" v-model="query.name" style="height:40px;border-radius: 3px;color: cadetblue"></input>
        <el-button type="primary" icon="el-icon-edit" @click="getList">提交</el-button>
      </div>
      <div style="margin:10px 0">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="250">
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          width="150"> </el-table-column>
        <el-table-column
          prop="education"
          label="教育"
          width="120">
          <template slot-scope="scope">                <!--使用过滤器的方法使用过滤器的方法-->
            <span>{{scope.row.education | getEducation}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="address1"
          label="居住地"
          width="120">
        </el-table-column>
        <el-table-column
          prop="mobile_phone"
          label="手机号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="position"
          label="职位"
          width="120">
        </el-table-column>
        <el-table-column
          prop="income"
          label="收入"
          width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          label="申请状态"
          width="160">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | statusTypeChange">{{scope.row.status | statusChange}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作"  width="400">
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="edit(scope.row)" :disabled="scope.row.status!=0&&scope.row.status!=3&&scope.row.status!=6">编辑</el-button>
            <el-button size="small" type="success"  @click="delete_id(scope.row)" :disabled="scope.row.status!=0&&scope.row.status!=3&&scope.row.status!=6">删除</el-button>
            <el-button size="small" type="info" @click="submitApprove(scope.row)" >提交审核</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  <!--点击编辑的弹层-->
  <el-dialog title="申请管理-编辑" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="姓名" width="150px" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="教育" :label-width="formLabelWidth">
        <el-input v-model="form.education" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="居住地" :label-width="formLabelWidth">
        <el-input v-model="form.address1" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" :label-width="formLabelWidth">
        <el-input v-model="form.mobile_phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="职位" :label-width="formLabelWidth">
        <el-input v-model="form.position" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="收入" :label-width="formLabelWidth">
        <el-input v-model="form.income" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="update()">确 定</el-button>
    </div>
  </el-dialog>
      <!--点击删除数据的弹层对话框-->
      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <!--slot="footer"-->
        <template slot-scope="scope">
          <span> 确定删除？</span>
        </template>
        <template slot-scope="scope">
      <span     class="dialog-footer">
      <el-button @click="centerDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="reDelete(scope.row)">确 定</el-button>
      </span>
        </template>

      </el-dialog>
      <!--分页-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="query.pageNo"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="query.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="rows">
      </el-pagination>
</div>
</template>

<script>
  import {loanList,loanUpdate,loanDelete,loanToApprove} from '../../api/artical'
  import { Message } from 'element-ui'
    export default {
        name: "index",
      data(){
          return{
            tableData:[],  //列表数据
            pages:1, //总页数
            rows:1,  //总条数
            query:{
              pageNo:1,  //页数
              pageSize:10,  //条数
              name:''   //搜索查询的名字
            },
            dialogFormVisible: false,  //点击编辑是否弹层
            form: {           //点击编辑的展示的对话框数据
              name: '',
              id:'',
              education: '',
              address1: '',
              mobile_phone: '',
              position: '',
              income: '',
            },
            formLabelWidth: '100px',
            centerDialogVisible: false,//点击删除是否弹层
            deletedata:'',  //点击删除传递的数据
          }
      },
      methods:{
        getList(){    //获取数据--挂载使用
            loanList(this.query).then(res=> {
              console.log(res.data.data)
              this.tableData=res.data.data.data
              this.pages=res.data.data.pages
              this.rows=res.data.data.rows
            }).catch(err=>{
              console.log('申请管理数据获取失败')
            })
          },
        //编辑按钮编辑
        edit(row){
          console.log(row)
          this.dialogFormVisible=true
          this.form=row
        },
        //编辑的确认按钮更新数据
         update(){
           loanUpdate(this.form).then(res=>{
             console.log(res.data)
             // if(res.data.code=='20000'){
               this.dialogFormVisible=false
               this.getList()          //更新数据后，要重加加载数据从
               Message({
                 message: '编辑-更新成功',
               })
             //}
           }).catch(err=>{
                 console.log('申请管理-编辑失败')
           })
         },
        delete_id(row){ //删除按钮-弹层
          this.centerDialogVisible=true
          console.log(row)
          this.deletedata=row
        },
        reDelete(){  //删除确认
          console.log(this.deletedata.id)
          loanDelete(this.deletedata.id).then(res=>{
            console.log(res.data)
            // if(res.data.code=='20000'){
            this.centerDialogVisible=false
            this.getList()          //更新数据后，要重加加载数据从
            Message({
              message: '删除-更新成功',
            })
            //}
          }).catch(err=>{
            console.log('删除-更新失败')
          })
        },
        //分页
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.query.pageSize=val || this.query.pageSize
          this.getList()
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.query.pageNo=val || this.query.pageNo
          this.getList()
        },
        submitApprove(row){
          loanToApprove({id:row.id}).then(res=>{
            console.log(res.data)
            // if(res.data.code=='20000'){
            this.getList()          //更新数据后，要重加加载数据从
            Message({
              message: '正在提交审核',
            })
            //}
          }).catch(err=>{
            console.log('提交审核失败')
          })
        },
      },
      filters: {
        getEducation(type) {
          switch (type) {
            case 'college':
              return '大学';
            default:
              return '未知'
          }
        },
        statusChange(num) {  //状态
          /*- 0-默认值进件状态
          - 1-提交初审状态   - 2-初审通过状态
          - 3-初审拒绝状态   - 4-提交终审状态
          - 5-终审通过状态  - 6-终审拒绝状态
          - 7-生成合同状态 */
          switch (num) {
            case 0:
              return '进件'
            case 1:
              return '提交初审'
            case 2:
              return '初审通过'
            case 3:
              return '初审拒绝';
            case 4:
              return '提交终审';
            case 5:
              return '终审通过';
            case 6:
              return '终审拒绝';
            case 7:
              return '生成合同';
            default:
              return 'not'
          }
        },
        statusTypeChange(col){
          switch (col) {
            case 0:
              return  'warning'
            case 1:
              return 'warning'
            case 2:
              return 'success'
            case 3:
              return 'info';
            case 4:
              return 'warning';
            case 5:
              return 'success';
            case 6:
              return 'info';
            case 7:
              return 'danger';
            default:
              return 'not'
          }
        }
      },
      mounted() {
      this.getList()
        this.handleCurrentChange()
      }
    }
</script>

<style scoped>

</style>
