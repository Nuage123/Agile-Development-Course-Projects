<template>
    <div class="chart" id="chart2">  
         <!-- <ChartExample  msg="模块1" optionData=option></ChartExample> -->
         <div class="tit"> {{ msg }} </div>
        <div class="boxnav" id="mychart2">
数据来自https://caibaoshuo.com/companies/MCD/financials#guru_pl_sheet_tab
        
        </div>
 </div>
       

       



</template>

<script>
    import * as echarts from 'echarts';
    import axios from 'axios';
export default { 
   props:["msg"],
//   name: 'App',



  mounted(){
    var chartDom = document.getElementById('mychart2');
var myChart = echarts.init(chartDom);
axios.get('http://localhost:8080/market')
    .then(response => {
      // alert(response.data)
    //  this.s_data=response.data
   var option= {
  title: {
    text: '麦当劳市场占比',
    subtext: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '市场占比',
      type: 'pie',
      radius: '50%',
      data: response.data,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
  
option && myChart.setOption(option);

})
.catch(error => {
  console.log(error)
})
}
  }

</script>

<style>

</style>