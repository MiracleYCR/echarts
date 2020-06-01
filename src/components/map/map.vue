<template>
  <div class="map-container">
    <div class="map1"></div>
    <div class="map2"></div>
    <div class="map3"></div>
    <div class="chart"></div>
  </div>
</template>

<script>
export default {
  name: "map"
}
</script>

<style lang="less" scoped>
  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes rotate1 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  .map-container{
    position: relative;
    height: 10.125rem;
    .map1{
      width: 6.475rem;
      height: 6.475rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url(../../static/image/map.png) no-repeat;
      background-size: 100% 100%;
      opacity: 0.3;
    }
    .map2{
      width: 8.0375rem;
      height: 8.0375rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url(../../static/image/lbx.png) no-repeat;
      background-size: 100% 100%;
      opacity: 0.6;
      animation: rotate 15s linear infinite;
      z-index: 2;
    }
    .map3{
      width: 7.075rem;
      height: 7.075rem;
      animation: rotate1 10s linear infinite;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url(../../static/image/jt.png) no-repeat;
      background-size: 100% 100%;
      opacity: 0.6;
    }
    .chart {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      height: 10.125rem;
      width: 100%;
    }
  }
  
</style>