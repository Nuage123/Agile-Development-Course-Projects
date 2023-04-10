<template>
    <div class="time" id="showTime">

    </div>
</template>

<script>
export default{
    data() {
      return {
      
      }
    },
   
    mounted() {
        var t = null
    t = setTimeout(time, 1000)//開始运行
    function time() {
        clearTimeout(t);//清除定时器
        var dt = new Date()
       
        var y = dt.getFullYear()
        // alert("1")
        var mt = dt.getMonth() + 1
        // alert("2")
        var day = dt.getDate()
        // alert("3")
        var h = dt.getHours()//获取时
        // alert("4")
        var m = dt.getMinutes()//获取分
        var s = dt.getSeconds()//获取秒
        // alert("5")
        document.getElementById("showTime").innerHTML = y + "/" + mt + "/" + day + " " + h + ":" + m + ":" + s + ""
     
        t = setTimeout(time, 1000)//设定定时器，循环运行
   
    }
    }
}

</script>

<style>
.time {
      position: absolute;
      right: 20px;
      line-height: 90px;
      bottom: 0;
  }

</style>