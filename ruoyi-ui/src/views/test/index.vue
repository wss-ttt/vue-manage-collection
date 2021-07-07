<template>
  <div class="app-container">
    <count-to
      :start-val="startVal"
      :end-val="endVal"
      :duration="2600"
      :autoplay="true"
      class="card-panel-num"
      ref="countTo"
    />
    <hr />
    <button type="button" @click="change">改变数据</button>
    <button type="button" @click="start">开始</button>
    <hr />
    <div class="tree-select">
      <treeselect
        v-model="t1"
        :options="deptOptions1"
        :normalizer="normalizer"
        placeholder="选择上级部门"
      />
      选中的值: {{ t1 }}
    </div>
    <div class="tree-select">
      <treeselect
        v-model="t2"
        :options="deptOptions2"
        :normalizer="normalizer"
        :multiple="true"
        placeholder="选择上级部门"
      />
      选中的值: {{ t2 }}
    </div>
    <div class="tree-select">
      <treeselect
        v-model="t3"
        :options="deptOptions3"
        :load-options="loadOptions"
        placeholder="延加载"
      ></treeselect>
    </div>
    <hr />
    <div class="search-box" :class="{ show: show }">
      <svg-icon
        class-name="search-icon"
        icon-class="search"
        @click.stop="click"
      />
      <el-select
        v-model="value"
        placeholder="请选择"
        class="header-search-select"
        :remote-method="querySearch"
        remote
        filterable
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import d1 from './d1.json'
import d2 from './d2.json'
export default {
  components: {
    CountTo,
    Treeselect,
  },
  props: {},
  data() {
    return {
      startVal: 0,
      endVal: 100,
      list: [],
      show: false,
      value: '',
      options: [
        /* {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        }, */
      ],
      deptOptions1: [],
      deptOptions2: [],
      deptOptions3: [
        {
          id: 'success',
          label: 'With children',
          // Declare an unloaded branch node.
          children: null,
        },
        {
          id: 'no-children',
          label: 'With no children',
          children: null,
        },
        {
          id: 'failure',
          label: 'Demonstrates error handling',
          children: null,
        },
      ],
      t1: null,
      t2: null,
    }
  },
  computed: {},
  watch: {
    show(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    },
  },
  created() {
    this.deptOptions1 = d1
    this.deptOptions2 = d2
  },
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    change() {
      this.endVal = 20
    },
    start() {
      this.$refs['countTo'].start()
    },
    normalizer(node) {
      if (node.children && !node.children.length) {
        // delete node.children;
      }
      return {
        id: node.deptId,
        label: node.deptName,
        children: node.children,
      }
    },
    loadOptions({ action, parentNode, callback }) {
      switch (parentNode.id) {
        case 'success': {
          setTimeout(() => {
            parentNode.children = [
              {
                id: 'childe',
                label: 'Child option',
              },
            ]
            callback()
          }, 3000)
          break
        }
        case 'no-children': {
          setTimeout(() => {
            parentNode.children = [
              {
                id: 'childe2',
                label: 'Child option2',
              },
            ]
            callback()
          }, 3000)
          break
        }
      }
    },
    click() {
      this.show = !this.show
    },
    close() {
      this.show = false
    },
    querySearch(val) {
      setTimeout(() => {
        this.options = [
          {
            value: '选项1',
            label: '黄金糕',
          },
          /* {
            value: '选项2',
            label: '双皮奶',
          },
          {
            value: '选项3',
            label: '蚵仔煎',
          },
          {
            value: '选项4',
            label: '龙须面',
          },
          {
            value: '选项5',
            label: '北京烤鸭',
          }, */
        ]
      }, 2000)
    },
  },
  filters: {},
}
</script>
<style scoped lang="scss">
.tree-select {
  width: 200px;
}
.search-box {
  &.show {
    .header-search-select {
      width: 210px;
    }
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden; // 这个代码不能少
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    /deep/ .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
}
</style>
