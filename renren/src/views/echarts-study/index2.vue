<template>
  <div class="index">
    <!-- 注意:id名不要和其他页面重名了,否则只能绘制出一个图表出来 -->
    <div id="main2"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      myChart: null
    }
  },
  created() {},
  mounted() {
    console.log('mounted index2')
    this.initChart()
  },
  activated() {
    console.log('activated index2')
    // 重绘图表
    this.myChart.resize()
  },
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    initChart() {
      let oBox = document.querySelector('#main2')
      this.myChart = echarts.init(oBox)
      let option = {
        tooltip: {
          trigger: 'axis',
          formatter: params => {
            console.log(params)
          }
        },
        xAxis: {
          type: 'category',
          data: ['乔峰', '杨过', '小龙女', '张三']
        },
        yAxis: [
          {
            type: 'value',
            name: '成绩',
            min: 'dataMin',
            max: 'dataMax'
          },
          {
            type: 'value',
            name: '身高',
            min: 'dataMin',
            max: 'dataMax'
          }
        ],
        series: [
          {
            data: [820, 932, 901, 934],
            type: 'line'
          },
          {
            type: 'line',
            data: [165, 180, 175, 188],
            yAxisIndex: 1
          }
        ]
      }
      this.myChart.setOption(option)
      window.addEventListener('resize', () => {
        this.myChart.resize()
      })
    }
  },
  filter() {},
  computed: {
    sidebarFold: {
      get() {
        return this.$store.state.common.sidebarFold
      }
    }
  },
  watch: {
    sidebarFold: {
      handler(newVal, oldVal) {
        // 图表
        console.log('watch')
        this.myChart.resize()
      }
    }
  }
}
</script>
<style scoped>
#main2 {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
}
</style>