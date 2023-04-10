<template>
  <div id="app">
 
    <!-- <img alt="Mcdonald logo" class='logo' src="./assets/m-logo.gif"> -->
<div class="header">

  <!-- <div id="bg"></div> -->
  <!-- <img src="	https://mcdonalds.com.hk/wp-content/uploads/2020/04/logo-1.png" alt=""> -->
  <div id="title">

    <EdgeAnime textDatas="McDonald" colorDatas="black"></EdgeAnime>
 
    <!-- <div class="decoration-box"></div> -->
  </div>
  <TimeCounter></TimeCounter>
</div>

<div class="mainbox">
  <ul>
    <li>
      <LineChart msg="营业额(百亿)"></LineChart>
    </li>
<!-- 营业额 -->

<!--  -->
<li>
   <PieChart msg="市场分布"></PieChart>
</li>
 
</ul>

<ul>
  <li>
    <BarChart msg="明星产品"></BarChart>

  </li>
    <!-- 同行业对比 -->
   
    <li>
      <ExpansionChart msg="全球门店数量"></ExpansionChart>
    </li>
<!-- 店面增长 -->

</ul>



</div>




<!-- <div>
  数据来源：https://caibaoshuo.com/companies/MCD/financials#guru_pl_sheet_tab
</div> -->




     <div class="footer">
      <img id=footer-pic src="	https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/photo_db/2020/06/05/202006051812272833/202006051812272833_1120_341.jpg?&rand=0827
" alt="">
<p>copyright@Nuage</p>
<p>数据来自网络</p>
     </div>
  
    </div>
    <!-- <MyChart content="McDonald"></MyChart> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import EdgeAnime from './components/EdgeAnime.vue'
import TimeCounter from './components/TimeCounter.vue'
// import ChartExample from './components/ChartExample.vue'
import LineChart from './components/LineChart.vue'
import PieChart from './components/PieChart.vue'
import BarChart from './components/BarChart.vue'
import ExpansionChart from './components/ExpansionChart.vue'

// import ChartTwo from './components/ChartTwo.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // MyChart
    EdgeAnime,
    TimeCounter,
    LineChart,

    PieChart,
    BarChart,
    ExpansionChart
    // ChartOne,
    // ChartTwo
    // ChartExample
    // MyChart
  }
}
</script>

<style>
#app {
  /* margin: 0px 0px; */
  text-align: center;
  /* margin: auto; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: yell; */
  margin-top: 60px;
  /* background-color: red; */
}
#anime{
  position: relative;
  bottom: 150px;
}
/* hedaer */
.header img{
  position: absolute;
  left: 300px;
  top:20px;
  padding: 20px;
  /* background-color:red; */
}
.header {
  position: relative;
bottom:60px;
margin: 0px;
/* margin-top: 0px; */
padding:20px;
background-color: #FFCD00;
}
#title{
position: relative;
top:10px
}

li{
  display: inline-block;
  /* margin-left:20px; */
  width: 50%;
}
#title{
  position: relative;
  left:450px;
  bottom: 200px;
/* background-color: red; */
}
.header{
  height: 100px;
  margin-top: 0px;
  /* background-color: yellow; */
}

/* mainbox */
.chart{
  /* width: 50%; */
  margin:0px 20px;
  /* border-bottom: none; */
  /* background-color: red; */
}
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
      /* margin-bottom: none; */
      position: relative;
  }

  .tit{
    /* text-align: center; */
    /* background-color: red; */
    
      padding: 10px 10px 10px 25px;
      border-bottom:1px solid;
      background-color:#FFCD00;
      font-size: 16px;
      font-weight: 500;
      position: relative;
  }
  .tit:before{
      position: absolute;
      content: "";
      width: 6px;
      height: 6px;
      background: black;
      box-shadow: 0 0 5px yellow;
      border-radius: yellow;
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
      border:1px solid #FFCD00;
      /* border-top:1px solid rgba(7,118,181,.7);
      border-left:1px solid rgba(7,118,181,.7);
      border-right:1px solid rgba(7,118,181,.7); */
      /* background-color: red; */
  }
  .footer p{
    position: relative;
    bottom: 30px;
    text-align: center;
    margin: 5px;
  }
  #footer-pic{
    /* transform: scale(1); */
    /* position: relative; */
    /* bottom: 100px; */
    transform: scaleX(1.3);
    /* transform: scaleY1.1); */
  }
</style>
