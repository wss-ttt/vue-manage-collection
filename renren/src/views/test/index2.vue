<template>
  <div class="wrapper">
    <h2>1</h2>
    <!-- <v-box @aa="aa" pageName="aa"></v-box>
    <h2>2</h2>
    <v-box @bb="bb" pageName="bb"></v-box>
    <h2>3</h2>
    <v-box @cc="cc" pageName="cc"></v-box> -->
    <v-box @a-b="aB"></v-box>
  </div>
</template>

<script>
import VBox from './components/box'
export default {
  components: {
    VBox
  },
  props: {},
  data() {
    return {
      aaName:'',
      bbName:'',
      ccName:''
    }
  },
  created() {},
  mounted() {},
  activated() {},
  updated() {},
  destroyed() {},
  methods: {
    aa(data){
      this.aaName = data.msg
      console.log(this.aaName)
    },
    bb(data){
      this.bbName = data.msg
      console.log(this.bbName)
    },
    cc(data){
      this.ccName = data.msg
      console.log(this.ccName)
    },
    aB(data){
      console.log(data)
    }
  },
  computed: {},
  watch: {}
}
</script>
<style scoped>
</style>