const Main = () => import('@/components/main');
const provideInject = () => import('@/pages/vue/provideInject/index');
const getRef = () => import('@/pages/vue/getRef/index');
const testSpeed = () => import('@/pages/vue/testSpeed');
const showPPT = () => import('@/pages/vue/showPPT');
const tagConnection = () => import('@/pages/vue/tagConnection');
const getTagConnection = () => import('@/pages/vue/getTagConnection');
const computedAndMethods = () => import('@/pages/vue/computedAndMethods');
const keepAlive = () => import('@/pages/vue/keepAlive/index');
const attrs = () => import('@/pages/vue/attrs/index');
const jsZip = () => import('@/pages/vue/jsZip');
const localstorage = () => import('@/pages/vue/localstorage');


export default {
    path: '/vue',
    component: Main,
    meta: {title: 'Vue功能测试', icon: 'el-icon-lock' },  
    name: 'vue' ,
    menu: true,
    leaf : true,
    children: [
        {
            path: '/localstorage',
            name: 'localstorage',
            meta: {title: 'Vue监听localstorage' },
            component: localstorage
        },
        {
            path: '/jsZip',
            name: 'jsZip',
            meta: {title: 'jsZip打包下载文件流' },
            component: jsZip
        },
        {
            path: '/provideInject',
            name: 'provideInject',
            meta: {title: 'provide & inject' },
            component: provideInject
        },
        {
            path: '/getRef',
            name: 'getRef',
            meta: {title: '获取跨组件层级实例' },
            component: getRef
        },
        {
            path: '/computedAndMethods',
            name: 'computedAndMethods',
            meta: {title: 'computed与methods区别', content: '1111' },
            component: computedAndMethods
        },
        {
            path: '/keepAlive',
            name: 'keepAlive',
            meta: {title: 'keepAlive is'},
            component: keepAlive
        },
        {
            path: '/attrs',
            name: 'attrs',
            meta: {title: 'attrs'},
            component: attrs
        },
        {
            path: '/testSpeed',
            name: 'testSpeed',
            meta: {title: '测试网速' },
            component: testSpeed
        },
        {
            path: '/showPPT',
            name: 'showPPT',
            meta: {title: 'PPT预览' },
            component: showPPT
        },
        {
            path: '/tagConnection',
            name: 'tagConnection',
            meta: {title: '浏览器标签通讯' },
            component: tagConnection
        },
        {
            path: '/getTagConnection',
            name: 'getTagConnection',
            meta: {title: '接收浏览器标签通讯' },
            component: getTagConnection
        },
        
    ]
}
