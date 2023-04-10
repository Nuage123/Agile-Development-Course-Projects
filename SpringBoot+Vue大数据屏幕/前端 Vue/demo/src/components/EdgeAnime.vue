<template>
    <div id="anime" style="width: 600px; height: 400px"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts'
  export default {
    props:['textDatas','colorDatas'],
    data() {
      return {
        text:'',
        color:''
      }
    },
    created(){
      this.text=this.textDatas,
      this.color=this.colorDatas
      // this.background-this.color
    },
    mounted() {
      this.chart = echarts.init(document.getElementById('anime'))
      let chartData= {
        graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: this.text,
          fontSize: 80,
          fontWeight: 'bold',
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: '#000',
          lineWidth: 1
        },
        keyframeAnimation: {
          duration: 3000,
          loop: true,
          keyframes: [
            {
              percent: 0.7,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0]
              }
            },
            {
              // Stop for a while.
              percent: 0.8,
              style: {
                fill: 'transparent'
              }
            },
            {
              percent: 1,
              style: {
              
                fill: this.color,
              }
            }
          ]
        }
      }
    ]
  }
        }
  
      this.chart.setOption(chartData)
    },
  }
  </script>