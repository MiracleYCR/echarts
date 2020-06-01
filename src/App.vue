<template>
  <div id="app">
    <echart-header></echart-header>
    <echart-content></echart-content>
  </div>
</template>

<script>
  import echartHeader from '../src/components/headers/echart_header.vue';
  import echartContent from '../src/components/content/echart_content.vue';
  export default {
    name: 'App',
    components: {
      echartHeader,
      echartContent
    }
  }
</script>

<style lang="less" scoped>
#app{

}
</style>
