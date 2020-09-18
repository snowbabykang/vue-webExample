const Main = () => import('@/components/main');
const objectFit = () => import('@/pages/css3/objectFit');
const background = () => import('@/pages/css3/background');
const border = () => import('@/pages/css3/border');
const textAlignJustify = () => import('@/pages/css3/textAlignJustify');
const eclipOpt = () => import('@/pages/css3/eclipOpt');

export default {
    path: '/css3',
    component: Main,
    meta: {title: 'CSS样式', icon: 'el-icon-sugar' },  
    name: 'css3' ,
    menu: true,
    leaf : true,
    children: [
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
        }
    ]
}
