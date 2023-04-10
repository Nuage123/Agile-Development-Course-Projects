<template>
    <div class="chart" id="chart2">  
         <div class="tit"> {{ msg }} </div>
        <div class="boxnav" id="mychart">
        
        </div>
 </div>
       

       



</template>

<script>
    import * as echarts from 'echarts';
export default { 
   props:["msg"],

  components: {

  },

  data(){
    return {
    option: {

}
}


  },
  mounted(){
    setTimeout(()=>{
	echarts.init
},200)
    var chartDom = document.getElementById('mychart');
var myChart = echarts.init(chartDom);

this.option && myChart.setOption(this.option);
    
  }
}

</script>

<style>

</style>