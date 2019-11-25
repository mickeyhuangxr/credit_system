<template>
  <div>
    <div id="search" style="float: left">
      <input type="search" placeholder="请输入名字" pattern="/a|b/" v-model="query.name" style="height:40px;border-radius: 3px;color: cadetblue"></input>
      <el-button type="primary" icon="el-icon-edit" @click="getList">提交</el-button>
    </div>
    <div style="margin:10px 0">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="250">
        <el-table-column
          fixed
          prop="loan_name"
          label="姓名"
          width="250"> </el-table-column>
        <el-table-column
          prop="loan_card"
          label="身份证"
          width="300"> </el-table-column>
        <el-table-column
          prop="status"
          label="合同状态"
          width="160">

            <template slot-scope="{row}">
              <el-tag  :type="row.file_path |statusTypeFilter" >
                {{ row.file_path |statusFilter}}
              </el-tag>
            </template>

        </el-table-column>
        <el-table-column label="操作"  width="400">
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="createFile(scope.row)" :disabled="scope.row.file_path">生成合同</el-button>
            <el-button size="small" type="success"  @click="download(scope.row)"  :disabled="!scope.row.file_path">下载合同</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


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
  import {loanEndQuery,loanEndCheck,loanEndPass ,loanEndReject,contractQuery,contractCreateFile,contractDownload} from '../../api/artical'
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
        status:'为生成合同',

        dialogFormVisible: false,  //点击编辑是否弹层
        form:{},    //点击编辑的展示的对话框数据
        formLabelWidth: '100px',
        centerDialogVisible: false,//点击删除是否弹层
        deletedata:'',  //点击删除传递的数据
      }
    },
    methods:{
      getList(){    //获取数据--挂载使用
        contractQuery(this.query).then(res=> {
          console.log(res.data.data)
          this.tableData=res.data.data.data
          this.pages=res.data.data.pages
          this.rows=res.data.data.rows
        }).catch(err=>{
          console.log('终审查询数据获取失败')
        })
      },
      //生成合同按钮
      createFile(row){
        console.log(row)
        contractCreateFile({id:row.id}).then(res=>{
          console.log(res.data)
          this.status='已生成合同'
          // if(res.data.code=='20000'){
          //更新数据后，要重加加载数据从
          Message({
            message: '生成合同！！',
          })
          //}
        }).catch(err=>{
          console.log('生成合同失败')
        })
      },
      download(row){
        console.log(row)
        contractDownload({id:row.id}).then(res=>{
          console.log(res.data)

          console.log('下载地址：'+this.url+res.data.url)
          this.downloadUrlFile(this.url+res.data.url)
          Message({
            message: '下载合同！！',
          })
          //}
        }).catch(err=>{
          console.log('下载合同失败')
        })
      },
      downloadUrlFile(url) {
        const xhr = new XMLHttpRequest();  //调用XHR  通过请求获取数据流
        xhr.open('GET', url, true);
        xhr.withCredentials = true;  //允许携带cookie
        xhr.responseType = 'blob';  //响应类型  blob字节流
        xhr.setRequestHeader('token', getToken());//传入token

        console.log('111')
        xhr.onload = () => {

            // 获取图片blob数据并保存   responseURL

            var filename = xhr.responseURL.substring(xhr.responseURL.lastIndexOf("/")+1);

            this.saveAs(filename, xhr.response);

        };
        xhr.send();  //发送
      },
      saveAs(name, data) {
        var urlObject = window.URL;  //window对象的URL对象是专门用来将blob或者file读取成一个url的。
        var export_blob = new Blob([data]); //代表二进制类型的大对象,就是Blob对象是二进制数据
        var save_link = document.createElement('a');//创建a标签
        save_link.href = urlObject.createObjectURL(export_blob); //通过URL.createObjectURL(blob)可以获取当前文件的一个内存URL
        //download是 HTML5 中<a>标签新增的一个属性，此属性会强制触发下载操作，指示浏览器下载 URL 而不是导航到它，并提示用户将其保存为本地文件
        save_link.download = name;
        save_link.click();//触发a标签单击
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
      statusFilter(type) {  //合同状态
        if(type){
          return "已生成合同"
        }else {
          return "未生成合同"
        }
      },
      statusTypeFilter(type) {  //状态样式
        if(type){
          return "success"
        }else {
          return "primary"
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
