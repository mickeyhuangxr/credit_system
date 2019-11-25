<template>
<div>
  <el-container>
    <!--侧边栏-->
    <el-aside width="200px">
        <slide-bar style="position: fixed"></slide-bar>
    </el-aside>
    <el-container >
      <!--面包屑-->
      <el-header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: item.path }" v-for="(item,index) in items" :key="index">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!--下拉框，退出-->
        <el-dropdown style="float: right">
            <span class="el-dropdown-link">
              退出<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item >
               <span style="display: block" @click="loyout">退出</span>  //此处有个坑
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
  import slideBar from './slideBar'
    export default {
      name: "index",
      data(){
        return{
          items:[]
        }
      },
      methods:{
        getRoute(){
          console.log(this.$route.matched)
          this.items=this.$route.matched //包含当前匹配的路由中所以对应的配置参数对象
        },
        loyout(){
          this.$router.push('/login')
        }

      },
      created(){
     this.getRoute()
      },
      watch:{
      $route(to,from){ //监听路由变化
        this.getRoute()
      }
      },
      components:{
        slideBar
      }
    }
</script>

<style scoped>

</style>
