<template>
  <div class="index">
    <div id="main"></div>
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
    console.log('mounted index')
    this.initChart()
  },
  activated() {
    console.log('activated index')
    this.myChart.resize()
  },
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    initChart() {
      let oBox = document.querySelector('#main')
      this.myChart = echarts.init(oBox)
      let option = {
        tooltip: {
          trigger: 'axis',
          formatter:(params)=>{
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
#main {
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
}
</style>