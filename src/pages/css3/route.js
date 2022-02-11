const Main = () => import('@/components/main');
const objectFit = () => import('@/pages/css3/objectFit');
const background = () => import('@/pages/css3/background');
const border = () => import('@/pages/css3/border');
const textAlignJustify = () => import('@/pages/css3/textAlignJustify');
const eclipOpt = () => import('@/pages/css3/eclipOpt');
const waterBall = () => import('@/pages/css3/waterBall');
const shape = () => import('@/pages/css3/shape');
const gradient = () => import('@/pages/css3/gradient/index');
const form = () => import('@/pages/css3/form/index');

export default {
    path: '/css3',
    component: Main,
    meta: {title: 'CSS样式', icon: 'el-icon-sugar' },  
    name: 'css3' ,
    menu: true,
    leaf : true,
    children: [
        {
            path: '/waterBall',
            name: 'waterBall',
            meta: {title: '水球效果' },
            component: waterBall
        },
        {
            path: '/objectFit',
            name: 'objectFit',
            meta: {title: 'object-fit object-position' },
            component: objectFit
        },
        {
            path: '/background',
            name: 'background',
            meta: {title: 'background新增属性' },
            component: background
        },
        {
            path: '/border',
            name: 'border',
            meta: {title: 'border新增属性' },
            component: border
        },
        {
            path: '/textAlignJustify',
            name: 'textAlignJustify',
            meta: {title: '文字左右对齐' },
            component: textAlignJustify
        },
        {
            path: '/eclipOpt',
            name: 'eclipOpt',
            meta: {title: '文字右侧展开全文',content:'文本内容超出规定行数后展开收起的处理' },
            component: eclipOpt
        },
        {
            path: '/shape',
            name: 'shape',
            meta: {title: '文字包围图片'},
            component: shape
        },
        {
            path: '/gradient',
            name: 'gradient',
            meta: {title: '渐变色'},
            component: gradient
        },
        {
            path: '/form',
            name: 'form',
            meta: {title: '表单样式'},
            component: form
        }
    ]
}
