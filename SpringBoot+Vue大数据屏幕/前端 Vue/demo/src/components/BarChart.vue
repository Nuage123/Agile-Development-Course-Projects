<template>
    <div class="chart" id="chart2">  
         <div class="tit"> {{ msg }} </div>
        <div class="boxnav" id="mychart3">
        
        </div>
 </div>
       

       



</template>

<script>
    import * as echarts from 'echarts';
    import axios from 'axios';
export default { 
   props:["msg"],

  components: {

  },

  data(){
    return {

}


  },
  mounted(){
    var chartDom = document.getElementById('mychart3');
var myChart = echarts.init(chartDom);
axios.get('http://localhost:8080/products')
    .then(response => {
      console.log(response.data)
    //  this.s_data=response.data
   var option= {
  dataset: {
    source:response.data
    //  [{"calories":63.792631951434856,"price":23,"product":"ullamco ea do cillum in"},
    // {"calories":30.158093609380355,"price":20,"product":"incididunt fugiat"}]
  },
  grid: { containLabel: true },
  xAxis: { name: '价格（元/个）' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 0,
    max: 1000,
    text: ['热量炸弹', '低卡无负担'],
    // Map the score column to color
    dimension: 1,
    inRange: {
      color: ['#65B581', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'price',
        // Map the "product" column to Y axis
        y: 'product'
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