<template>
  <div class="bar-container">
    <h2>柱形图</h2>
    <div class="chart-bar" ref="chartBar">图表</div>
  </div>
</template>

<script>
import echarts from 'echarts';
require('echarts/lib/chart/bar');
export default {
  name: "bar",
  props: ['chart'],
  mounted () {
    const mychart = echarts.init(this.$refs.chartBar);
    const option1 = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: 'axis',
        axisPointer: {    // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'  // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          },
          axisLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '50%',
          itemStyle: {
            barBorderRadius: 5
          },
          data: [200, 300, 300, 900, 1500, 1200, 600]
        }
      ]
    };

    const option2 = {
        grid: {
          top: "10%",
          left: "22%",
          bottom: "10%"
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#fff"
          },
        },
        series: [
          {
              name: 'wrap',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230],
              barCategoryGap: 50,
              barWidth: 10,
              itemStyle: {
                normal: {
                  barBorderRadius: 20,       
                }
              },
              label: {
                normal: {
                  show: true,
                  position: "inside",
                  formatter: "{c}%"
                }
              },
          },
          {
              name: '2012年',
              type: 'bar',
              data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
    };

    if (this.chart === 'bar1') {
      mychart.setOption(option1)
    } else {
      mychart.setOption(option2)
    }

    window.addEventListener("resize", function() {
      mychart.resize();
    });
  }
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
    .chart-bar {
      height: 3rem;
    }
  }
</style>