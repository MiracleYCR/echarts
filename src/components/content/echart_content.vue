<template>
  <div class="content">
    <div class="cotentItem">
      <panel type="bar" chart="bar1"></panel>
      <panel type="line"></panel>
      <panel type="pie"></panel>
    </div>
    <div class="cotentItem">
      <numbers></numbers>
      <map-ball></map-ball>
    </div>
    <div class="cotentItem">
      <panel type="bar" chart="bar2"></panel>
      <panel type="line"></panel>
      <panel type="pie"></panel>
    </div>
  </div>
</template>

<script>
import panel from '../panel/panel.vue';
import numbers from '../number/number.vue';
import mapBall from '../map/map.vue';
export default {
  name: "echart_content",
  components: {
    mapBall,
    panel,
    numbers
  }
}
</script>

<style lang="less" scoped>
  .content{
    min-width: 1024px;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0.125rem 0.125rem 0;
    display: flex;
    .cotentItem{
      flex: 3;
      &:nth-child(2) {
        flex: 5;
        margin: 0.125rem 0.1875rem;
      }
    }
  }
</style>