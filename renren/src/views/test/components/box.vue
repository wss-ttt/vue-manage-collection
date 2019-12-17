<template>
  <div class="box"></div>
</template>

<script>
export default {
  components: {},
  props: {
    pageName: {
      type: String
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {
    /* if (this.pageName === 'aa') {
      this.$emit('aa', {
        msg: '乔峰',
        pageName: this.pageName
      })
    }
    if (this.pageName === 'bb') {
      this.$emit('bb', {
        msg: '杨过',
        pageName: this.pageName
      })
    }
    if (this.pageName === 'cc') {
      this.$emit('cc', {
        msg: '小龙女',
        pageName: this.pageName
      })
    } */
    /* this.$emit(this.pageName,{
      msg:'乔峰',
      pageName:this.pageName
    })
    this.$emit(this.pageName,{
      msg:'杨过',
      pageName:this.pageName
    })
    this.$emit(this.pageName,{
      msg:'小龙女',
      pageName:this.pageName
    }) */
    this.$emit('a-b','好好学习')
  },
  activated() {},
  updated() {},
  destroyed() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
}
</style>