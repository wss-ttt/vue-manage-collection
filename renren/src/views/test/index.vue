<template>
  <div class="test">
    <div class="box">
      <ul class="clearfix">
        <li>
          <span>站点:</span>
          <el-select v-model="value" placeholder="请选择" class="input">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
        <li>
          <span>基波频率:</span>
          <el-select v-model="value" placeholder="请选择" class="inpuat">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
        <li>
          <span>基波有效值:</span>
          <el-select v-model="value" placeholder="请选择" class="input">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
        <li>
          <span>基波有效值:</span>
          <el-select v-model="value" placeholder="请选择" class="input">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
      </ul>
    </div>
    <div class="box2">
      <el-date-picker
      v-model="time"
      style="width:100%"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
    </div>
    <div class="box3">
      <div class="b1">b1</div>
      <div class="b2">b2</div>
      <div class="b3">b3</div>
    </div>
    <hr />
    <v-box></v-box>
  </div>
</template>

<script>
import VBox from './components/box.vue'
export default {
  components: {
    VBox
  },
  props: {},
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      time:'',
    }
  },
  created() {},
  mounted() {},
  activated() {},
  updated() {},
  destroyed() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>
<style scoped lang="scss">
ul,li{
  list-style-type: none;
}
.box {
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    li {
      display: flex;
      align-items: center;
      border:1px solid red;
      &:nth-child(1){
        width:20%;
      }
      &:nth-child(2){
        width:20%;
      }
      &:nth-child(3){
        width:30%;
      }
      &:nth-child(4){
        width:30%;
      }
      .input{
        flex:1;
      }
    }
  }
}
.box3{
  background-color: #ccc;
  display: flex;
  >div{
    height: 40px;
    border:1px solid red;
    // flex: 1;
    width:20%;
  }
}
</style>