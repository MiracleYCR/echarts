<template>
  <div class="bar-container">
    <h2>条形图</h2>
    <div class="chart">图表</div>
  </div>
</template>

<script>
export default {
  name: "line"
}
</script>

<style lang="less" scoped>
  .bar-container{
    h2{
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      color: #fff;
      font-size: 20px;
      font-weight: 400;
    }
    .chart {
      height: 3rem;
      background-color: pink;
    }
  }
</style>