<template>
    <div class="chart" id="chart1">  
         <!-- <ChartExample  msg="模块1" optionData=option></ChartExample> -->
         <div class="tit"> {{ msg }}  </div>
        <div class="boxnav" id="mychart">
        </div>
        
 </div>
       

       



</template>

<script>
    import * as echarts from 'echarts';
    import axios from 'axios'
export default {
//   name: 'App',
  components: {
  //  ChartExample
  },
props:["msg"],
  data(){
    return {
   
    }


  },
  mounted(){

    var chartDom = document.getElementById('mychart');
var myChart = echarts.init(chartDom);
axios.get('http://localhost:8080/revenue/AllRevenue')
    .then(response => {
      // alert(response.data)
      this.s_data = response.data
      var option=   {
  xAxis: {
    type: 'category',
    data: [2019,2020,2021,2022]
   
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: this.s_data,
      type: 'line'
    }
  ],

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