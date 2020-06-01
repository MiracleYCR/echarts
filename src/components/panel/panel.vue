<template>
  <div class="panel-container">
    <ebar v-if="type === 'bar'" :chart="chart"></ebar>
    <eline v-if="type === 'line'" :chart="chart"></eline>
    <epie v-if="type === 'pie'" :chart="chart"></epie>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
import ebar from '../charts/bar/bar.vue';
import eline from '../charts/line/line.vue';
import epie from '../charts/pie/pie.vue';
export default {
  name: "panel",
  props: ['type', 'chart'],
  components: {
    ebar,
    eline,
    epie
  },
  data () {
    return {
      componentType: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .commonBorder{
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
  }

  .panel-container{
    position: relative;
    height: 3.875rem;
    border: 1px solid rgba(25, 186, 139, 0.17);
    padding: 0 0.1875rem 0.5rem;
    margin-bottom: 0.1875rem;
    background: url(../../static/image/line\(1\).png);
    &::before{
      .commonBorder();
      top: 0;
      left: 0;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &::after{
      .commonBorder();
      top: 0;
      right: 0;
      border-top: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
    .panel-footer{
      &::before{
      .commonBorder();
      bottom: 0;
      left: 0;
      border-bottom: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
    }
    &::after{
      .commonBorder();
      bottom: 0;
      right: 0;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
    }
    }
  }
</style>