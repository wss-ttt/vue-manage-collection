<template>
  <div class="app-wrapper">
    <div class="ant-layout ant-layout-has-sider">
      <div
        class="sider___g53Yu ant-layout-sider ant-layout-sider-dark"
        :style="isCollapse ? 'max-width: 64px; min-width: 64px; width: 64px;': 'max-width: 256px; min-width: 256px; width: 256px;'"
      >
        <div class="logo___2J9hf">
          <a href="#/">
            <img src="../../assets/avator.jpg"
            />
            <h1 v-if="!isCollapse" style="color:#fff">后台管理系统</h1>
          </a>
        </div>
        <el-scrollbar
          tag="ul"
          style="width: 256px;position: fixed;top: 0; bottom: 0; margin-top: 64px;transition: padding-top .3s;"
          wrap-class="el-select-dropdown__wraps"
          view-class="el-select-dropdown__list"
        >
          <el-menu
            :collapse-transition="false"
            mode="vertical"
            router
            :default-active="$route.path"
            :collapse="isCollapse"
          >
            <node-content
              :node="item"
              v-for="(item,index) in routerz"
              :key="index"
              v-if="item.hidden ? false : true "
            ></node-content>
          </el-menu>
        </el-scrollbar>
      </div>
      <div class="ant-layout">
        <div class="ant-layout-header" style="padding: 0px;">
          <el-row type="flex" class="row-bg" justify="space-between" style="height: 64px;">
            <el-col :span="2">
              <div style="padding-left: 10px; margin-top: 10px; display: inline-block;">
                <span @click="collapse" style="    display: inline-block;height: 32px;">
                  <!-- <svg
                    :class="isCollapse ? 'hamburger' : 'active'"
                    t="1492500959545"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1691"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="32"
                    height="32"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M950.857143 768l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286zm0-292.571429l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286zm0-292.571429l0 73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-804.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286l0-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143l804.571429 0q14.857143 0 25.714286 10.857143t10.857143 25.714286z"
                      p-id="1442"
                      fill="#657180"
                    />
                  </svg> -->
                  <!-- 使用element-ui中的icon -->
                  <i class="el-icon-s-unfold" style="font-size:40px;" :class="isCollapse ? 'hamburger' : 'active'"></i>
                </span>
              </div>
            </el-col>
            <el-col :span="22">
              <div class="right header clearfix">
                <div class="header___1L3tU">
                  <el-dropdown placement="bottom">
                    <span class="el-dropdown-link">
                      {{user}}
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>
                        <div style="margin:0 10px;">
                          <i class="el-icon-edit"></i>
                          <span style="margin-left:10px;">个人中心</span>
                        </div>
                      </el-dropdown-item>
                      <el-dropdown-item divided>
                        <div style="margin:0 10px;">
                          <i class="el-icon-back"></i>
                          <span style="margin-left:10px;">退出登录</span>
                        </div>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </div>
              <div class="right clearfix">
                <el-badge :value="12">
                  <div style="font-size: 16px;height:24px;line-height:24px;">
                    <i class="el-icon-message"></i>
                  </div>
                </el-badge>
              </div>
              <div class="right clearfix">
                <div class="el-navtop-search">
                  <i @click="iconchange" class="el-icon-search"></i>
                  <div :style=" iconflag ? 'width:210px;' : 'width:0px;'" class="el-search-input">
                    <el-input
                      @blur="blurfocus"
                      ref="search-input"
                      v-model="search"
                      autofocus
                      placeholder="请输入内容"
                    ></el-input>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <Tags-view :pageTagsList="pageTagsList" :routers="routers"></Tags-view>
        <section class="ant-layout-content">
          <transition name="fade" mode="out-in">
            <div style=" margin: 10px;">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </div>
          </transition>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import TagsView from './TagsView'
import { getusername } from '@/utils/auth'
export default {
  name: 'layout',
  data() {
    return {
      search: '',
      falg: false,
      iconflag: false,
      isCollapse: false,
      routerz: [],
      routers: {}
    }
  },

  components: {
    TagsView,
    NodeContent: {
      props: {
        node: null
      },

      render(h) {
        const datas = this.node
        const loop = data =>
          data.map((item, index) => {
            if (item.children && item.children.length) {
              return (
                <el-submenu index={item.path}>
                  <template slot="title">
                    <i class={item.meta.icon}></i>
                    <span>{item.meta.title}</span>
                  </template>
                  {loop(item.children)}
                </el-submenu>
              )
            } else {
              return (
                <el-menu-item index={item.path}>
                  <i class={item.meta.icon}></i>
                  <span slot="title">{item.meta.title}</span>
                </el-menu-item>
              )
            }
          })
        return datas.name !== 'home' ? (
          <el-submenu index={datas.path}>
            <template slot="title">
              <i class={datas.meta.icon}></i>
              <span>{datas.meta.title}</span>
            </template>
            {datas.children ? loop(datas.children) : ''}
          </el-submenu>
        ) : (
          <el-menu-item index={datas.children[0].path}>
            <i class={datas.children[0].meta.icon}></i>
            <span slot="title">{datas.children[0].meta.title}</span>
          </el-menu-item>
        )
      }
    }
  },
  created() {
    this.$store.commit('setOpenedList')
    this.routerz = this.$router.options.routes
    this.routers = this.$route
    let openedPageLen = this.pageTagsList.length
    let i = 0
    let tagHasOpened = false
    while (i < openedPageLen) {
      if (this.routers.name === this.pageTagsList[i].name) {
        // 页面已经打开
        tagHasOpened = true
        break
      }
      i++
    }
    if (!tagHasOpened) {
      let tag = {
        meta: this.routers.meta,
        path: this.routers.path,
        name: this.routers.name
      }
      this.$store.commit('increateTag', tag)
    }
  },
  mounted() {},
  methods: {
    iconchange() {
      this.iconflag = !this.iconflag
      if (this.iconflag) {
        console.log(this.$refs['search-input'].focus())
      }
    },
    blurfocus() {
      this.iconflag = false
    },
    collapse() {
      this.isCollapse = !this.isCollapse
    }
  },
  computed: {
    pageTagsList() {
      return this.$store.state.app.pageOpenedList // 打开的页面的页面对象
    },
    // 获取用户名(其实也可以把用户名放在cookie中或者storeage中都是可以的)
    user() {
      return getusername()
    }
  },
  watch: {
    $route(to) {
      this.routers = to
      let openedPageLen = this.pageTagsList.length
      let i = 0
      let tagHasOpened = false
      while (i < openedPageLen) {
        if (to.name === this.pageTagsList[i].name) {
          // 页面已经打开
          tagHasOpened = true
          break
        }
        i++
      }
      if (!tagHasOpened) {
        let tag = {
          meta: to.meta,
          path: to.path,
          name: to.name
        }
        this.$store.commit('increateTag', tag)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import 'src/styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.ant-layout {
  min-height: 100vh;
  overflow-x: hidden;
}
.ant-layout,
.ant-layout * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.ant-layout {
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
}
.ant-layout.ant-layout-has-sider {
  -ms-flex-direction: row;
  flex-direction: row;
}
.ant-layout {
  height: 100%;
}
*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.sider___g53Yu {
  min-height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  position: relative;
  z-index: 10;
}
.ant-layout-sider {
  position: relative;
  min-width: 0;
}
.ant-layout-content {
  flex: auto;
  overflow: auto;
  background-color: #f0f0f0;
}
.logo___2J9hf {
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 16px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  background: #002140;
  overflow: hidden;
}
.logo___2J9hf h1,
.logo___2J9hf img {
  display: inline-block;
  vertical-align: middle;
}
.logo___2J9hf img {
  height: 32px;
}
.hamburger {
  cursor: pointer;
  transform: rotate(90deg);
  transition: 0.38s;
  transform-origin: 50% 50%;
}
.active {
  cursor: pointer;
  transform: rotate(0deg);
  transition: 0.38s;
  transform-origin: 50% 50%;
}
.ant-layout-header {
  flex: 0 0 auto;
  background: #fff;
  padding: 0 50px;
  height: 64px;
  line-height: 64px;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  z-index: 6;
  .header {
    padding: 0 20px;
  }
}
.el-navtop-search {
  float: right;
  cursor: pointer;
  padding: 0 12px;
  display: inline-block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  height: 100%;
}
.el-navtop-search > i {
  font-size: 16px;
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.65);
}
.el-search-input {
  transition: width 0.3s, margin-left 0.3s;
  width: 0;
  background: transparent;
  border-radius: 0;
  display: inline-block;
}
</style>
<style>
.app-wrapper .el-select-dropdown__wraps {
  padding-bottom: 17px;
}
.app-wrapper .el-select-dropdown__list {
  padding: 0 !important;
}

.app-wrapper .el-navtop-search .el-input__inner {
  border-radius: 0;
  padding: 0;
  height: 30px;
  border: none;
  border-bottom: 1px solid #f0f0f0;
}
</style>
