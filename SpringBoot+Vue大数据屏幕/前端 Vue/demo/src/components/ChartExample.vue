<template>
            <div class="box">
                <div class="tit">{{ msg }}{{ idData }}</div>
                <div class="boxnav" id=boxID>
                </div>
                <!-- <div>{{ String(option) }}</div> -->
            </div>

        
</template>

<script>
    // import { createDecipheriv } from 'crypto';
import * as echarts from 'echarts';
export default{
    props: {
    msg: String,
    idData:String,
    titID:String,
    optionData:{}

  },
  data(){
    return {
        // option:{}
        boxID:this.idData
    }
  },
 
  mounted(){
    var option=this.optionData
var chartDom = document.getElementById(this.id)
var myChart = echarts.init(chartDom)
option && myChart.setOption(option)
// console.log(this.option)
// option && myChart.setOption(option);
// alert("1")
  }

    }


</script>

<style>

  .nav1 {
      margin-left: -6px;
      margin-right: -6px;
  }

  .nav1>li {
      padding: 0 6px;
      float: left;
  }
.box {
      border: 1px solid rgba(7, 118, 181, .5);
      box-shadow: inset 0 0 10px rgba(7, 118, 181, .4);
      margin-bottom: 12px;
      position: relative;
  }

  .tit{
      padding: 10px 10px 10px 25px;
      border-bottom:1px solid rgba(7,118,181,.7);
      font-size: 16px;
      font-weight: 500;
      position: relative;
  }
  .tit:before{
      position: absolute;
      content: "";
      width: 6px;
      height: 6px;
      background: rgba(22,214,255,.9);
      box-shadow: 0 0 5px rgba(22,214,255,.9);
      border-radius: 10px;
      left: 10px;
      top: 18px;
  }

  .tit:after,
  .box:before{
      width: 100%;
      height: 1px;
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      background:linear-gradient(to right,#076ead,#4ba6e0,#076ead);
      box-shadow: 0 0 5px rgba(131,189,227,1);
      opacity: .6
  }
  .box:before{
      top: 0px;
  }

  .boxnav{
      padding: 10px;
      height: 390px;
  }
  #two{
    background-color: red;
  }
</style>