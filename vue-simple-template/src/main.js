import Vue from 'vue'
import App from './App'
import router from './router'
import { powerRouter } from './router';
import store from './store';
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    console.log('-------------')
    console.log('to:',to)
    console.log('from:',from)
    console.log('-------------')
    // debugger
    if (store.state.login.role) { //判断role 是否存在   // store.getters.role
        console.log(store.state.login)
        console.log('store.state.login.role',store.state.login.role)
        console.log('长度:',store.state.login.newrouter.length)
        if (store.state.login.newrouter.length !== 0) {   // store.getters.newrouter.length
            console.log(2)
            console.log(store.state.login.newrouter)
            console.log(router)
            next();
        } else {
            let newrouter
            // 权限为A 可以查看所有的页面
            if (store.state.login.role == 'A') {  //判断权限    // store.getters.role
                newrouter = powerRouter
            } else {
                let newchildren = powerRouter[0].children.filter(route => {
                    if (route.meta) {
                        if (route.meta.role == store.state.login.role) {   // store.getters.role
                            return true
                        }
                        return false
                    } else {
                        return true
                    }
                });
                newrouter = powerRouter
                newrouter[0].children = newchildren
            }
            console.log('我来这个地方了没')
            router.addRoutes(newrouter) //添加动态路由
            store.dispatch('Roles', newrouter).then(res => {
                next({ ...to })
            }).catch(() => {

            })
        }
    } else {
        if (['/login'].indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
