webpackJsonp([7],{"8Bis":function(e,t){},"c/0A":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("/Pa7"),n=a("zL8q"),i={name:"index",data:function(){return{tableData:[],pages:1,rows:1,query:{pageNo:1,pageSize:10,name:""},dialogFormVisible:!1,form:{name:"",id:"",education:"",address1:"",mobile_phone:"",position:"",income:""},formLabelWidth:"100px",centerDialogVisible:!1,deletedata:""}},methods:{getList:function(){var e=this;Object(o.o)(this.query).then(function(t){console.log(t.data.data),e.tableData=t.data.data.data,e.pages=t.data.data.pages,e.rows=t.data.data.rows}).catch(function(e){console.log("申请管理数据获取失败")})},edit:function(e){console.log(e),this.dialogFormVisible=!0,this.form=e},update:function(){var e=this;Object(o.q)(this.form).then(function(t){console.log(t.data),e.dialogFormVisible=!1,e.getList(),Object(n.Message)({message:"编辑-更新成功"})}).catch(function(e){console.log("申请管理-编辑失败")})},delete_id:function(e){this.centerDialogVisible=!0,console.log(e),this.deletedata=e},reDelete:function(){var e=this;console.log(this.deletedata.id),Object(o.f)(this.deletedata.id).then(function(t){console.log(t.data),e.centerDialogVisible=!1,e.getList(),Object(n.Message)({message:"删除-更新成功"})}).catch(function(e){console.log("删除-更新失败")})},handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.query.pageSize=e||this.query.pageSize,this.getList()},handleCurrentChange:function(e){console.log("当前页: "+e),this.query.pageNo=e||this.query.pageNo,this.getList()},submitApprove:function(e){var t=this;Object(o.p)({id:e.id}).then(function(e){console.log(e.data),t.getList(),Object(n.Message)({message:"正在提交审核"})}).catch(function(e){console.log("提交审核失败")})}},filters:{getEducation:function(e){switch(e){case"college":return"大学";default:return"未知"}},statusChange:function(e){switch(e){case 0:return"进件";case 1:return"提交初审";case 2:return"初审通过";case 3:return"初审拒绝";case 4:return"提交终审";case 5:return"终审通过";case 6:return"终审拒绝";case 7:return"生成合同";default:return"not"}},statusTypeChange:function(e){switch(e){case 0:case 1:return"warning";case 2:return"success";case 3:return"info";case 4:return"warning";case 5:return"success";case 6:return"info";case 7:return"danger";default:return"not"}}},mounted:function(){this.getList(),this.handleCurrentChange()}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{float:"left"},attrs:{id:"search"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.query.name,expression:"query.name"}],staticStyle:{height:"40px","border-radius":"3px",color:"cadetblue"},attrs:{type:"search",placeholder:"请输入名字"},domProps:{value:e.query.name},on:{input:function(t){t.target.composing||e.$set(e.query,"name",t.target.value)}}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.getList}},[e._v("提交")])],1),e._v(" "),a("div",{staticStyle:{margin:"10px 0"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"250"}},[a("el-table-column",{attrs:{fixed:"",prop:"name",label:"姓名",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"education",label:"教育",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("getEducation")(t.row.education)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"address1",label:"居住地",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile_phone",label:"手机号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"position",label:"职位",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"income",label:"收入",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"申请状态",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("statusTypeChange")(t.row.status)}},[e._v(e._s(e._f("statusChange")(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary",disabled:0!=t.row.status&&3!=t.row.status&&6!=t.row.status},on:{click:function(a){return e.edit(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"success",disabled:0!=t.row.status&&3!=t.row.status&&6!=t.row.status},on:{click:function(a){return e.delete_id(t.row)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){return e.submitApprove(t.row)}}},[e._v("提交审核")])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"申请管理-编辑",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"姓名",width:"150px","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"教育","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.education,callback:function(t){e.$set(e.form,"education",t)},expression:"form.education"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"居住地","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.address1,callback:function(t){e.$set(e.form,"address1",t)},expression:"form.address1"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.mobile_phone,callback:function(t){e.$set(e.form,"mobile_phone",t)},expression:"form.mobile_phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"职位","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.position,callback:function(t){e.$set(e.form,"position",t)},expression:"form.position"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收入","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.income,callback:function(t){e.$set(e.form,"income",t)},expression:"form.income"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.update()}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"dialog-footer"},[a("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.reDelete(t.row)}}},[e._v("确 定")])],1)]}}])}),e._v(" "),a("el-pagination",{attrs:{"current-page":e.query.pageNo,"page-sizes":[10,20,30,40],"page-size":e.query.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.rows},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var s=a("VU/8")(i,l,!1,function(e){a("8Bis")},"data-v-54f774f0",null);t.default=s.exports}});
//# sourceMappingURL=7.03bcf19849d1dcef5ccc.js.map