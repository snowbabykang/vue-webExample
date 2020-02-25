const Main = () => import('@/components/main');
const validateIDCard = () => import('@/pages/webjs/validateIDCard');
const toFixed = () => import('@/pages/webjs/toFixed');
const decimalError = () => import('@/pages/webjs/decimalError');

export default {
    path: '/JS',
    component: Main,
    meta: {title: '暂时名字叫js', icon: 'el-icon-edit'},  
    name: 'webJS' ,
    menu: true,
    leaf : true,
    children: [
        {
            path: '/validateIDCard',
            name: 'validateIDCard',
            meta: {title: '校验身份证号码' },
            component: validateIDCard
        },
        {
            path: '/toFixed',
            name: 'toFixed',
            meta: {title: 'toFixed误差' },
            component: toFixed
        },
        {
            path: '/decimalError',
            name: 'decimalError',
            meta: {title: 'JS小数计算误差' },
            component: decimalError
        }
    ]
}
