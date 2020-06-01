<template>
  <header>
    <h1>Echarts</h1>
    <div class="showtime">{{showTime}}</div>
  </header>
</template>

<script>
  export default {
    name: "echart_header",
    data () {
      return {
        timer: 0,
        showTime: ''
      }
    },
    created () {
      setTimeout(this.getCurrentTime,1000)
    },
    methods: {
      getCurrentTime () {
        clearTimeout(this.timer);
        const dt = new Date();
        const year = dt.getFullYear();
        const month = dt.getMonth() + 1;
        const day = dt.getDate();
        let hour = dt.getHours();
        let minute = dt.getMinutes();
        let second = dt.getSeconds();
        hour = String(hour).length < 2 ? ('0' + hour) : hour;
        minute = String(minute).length < 2 ? ('0' + minute) : minute;
        second = String(second).length < 2 ? ('0' + second) : second;
        this.showTime = `当前时间: ${year} 年 ${month} 月 ${day} - ${hour} 时 ${minute} 分 ${second} 秒`
        this.timer = setTimeout(this.getCurrentTime,1000)
      }
    }
  }
</script>

<style lang="less" scoped>
  header{
    height: 1.25rem;
    background: url(../../static/image/head_bg.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
    h1{
      color: #fff;
      font-size: 0.475rem;
      line-height: 1rem;
      text-align: center;
    }
    .showtime{
      position: absolute;
      right: 0.375rem;
      top: 0rem;
      line-height: 0.9375rem;
      color: rgba(225, 225, 255, 0.7);
      font-size: 0.25rem;
    }
  }
</style>