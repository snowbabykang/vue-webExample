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

import './assets/css/common.css';

Vue.config.productionTip = false


Vue.prototype.resetSetItem = function (key, newVal) {
    // 创建一个StorageEvent事件
    var newStorageEvent = document.createEvent('StorageEvent');
    const storage = {
        setItem: function (k, val) {
            localStorage.setItem(k, val);
            // 初始化创建的事件
            newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);
            // 派发对象
            window.dispatchEvent(newStorageEvent)
        }
    }
    return storage.setItem(key, newVal);
}


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
