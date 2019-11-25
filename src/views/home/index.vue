<template>
<div>
  <!--展示框-->
  <div>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="12" :md="12" :lg="6" v-for="(list,index) in lists" :key="index">
      <div class="grid-content bg-purple"  :style="{background:list.color }">
      <h2>{{list.title}}</h2>
      <h3 style="color: white"><countTo :startVal='0' :endVal='list.num' :duration=list.duration></countTo></h3>
    </div></el-col>
  </el-row>
  </div>
  <!--图表-->
  <div id="chart" style="width: 600px;height:400px;"></div>

</div>
</template>

<script>
  import countTo from 'vue-count-to'
  import echarts from 'echarts'
    export default {
        name: "index",
data(){
          return{
            lists:[
              {title:'最高可借金额',color:'#f60',num:13600,duration:2300},
              {title:'回报率',color:'green',num:9833,duration:3300},
              {title:'业绩领跑',color:'pink',num:8888,duration:2800},
              {title:'最高回报',color:'#409eff',num:12000,duration:2200},
            ],
            chart:''
          }
},
      methods:{
initChart(){
  // 基于准备好的dom，初始化echarts实例
  this.chart=  echarts.init(document.getElementById('chart'));
  // 指定图表的配置项和数据
  var option = {
    tooltip: {},
    legend: {
      data:['额度']
    },
    xAxis: {
      data: ["最高可借金额","回报率","业绩领跑","最高回报"]
    },
    yAxis: {},
    series: [{
      name: '额度',
      type: 'bar',
      data: [13600, 9833, 8888, 12000]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  this.chart.setOption(option);
}
      },
      mounted(){
         this.initChart()
        window.onresize=()=>{  //根据窗口大小自适应
           this.chart.resize()
        }
      },
      components:{
          countTo
      }
    }
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius:8px;
    min-height: 36px;
    padding:10px 5px;
    margin-bottom: 20px;
  }
</style>
