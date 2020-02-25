// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import ref from 'vue-ref'
Vue.use(ref)

Vue.config.productionTip = false

// router.afterEach((to, from) => {
//     console.group('afterEach');
//     console.log(to);
//     console.log(from);
//     console.groupEnd();
// })
// router.beforeEach((to, from, next) => {
//     console.group('beforeEach');
//     console.log(to);
//     console.log(from);
//     console.log(next);
//     console.groupEnd();
//     next();
// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
