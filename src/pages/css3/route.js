const Main = () => import('@/components/main');
const objectFit = () => import('@/pages/css3/objectFit');
const background = () => import('@/pages/css3/background');
const border = () => import('@/pages/css3/border');

export default {
    path: '/css3',
    component: Main,
    meta: {title: 'CSS3新属性', icon: 'el-icon-sugar' },  
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
        }
    ]
}
