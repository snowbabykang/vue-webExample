const Main = () => import('@/components/main');
const layout = () => import('@/pages/layout/index');
const grid = () => import('@/pages/layout/grid');
const columns = () => import('@/pages/layout/columns');
const flex = () => import('@/pages/layout/flex');

export default {
    path: '/cssDisplay',
    component: Main,
    meta: {title: 'CSS布局系列', icon: 'el-icon-s-operation' },  
    name: 'cssDisplay' ,
    menu: true,
    leaf : true,
    children: [
        {
            path: '/layout',
            name: 'layout',
            meta: {title: 'CSS布局' },
            component: layout
        },
        {
            path: '/flex',
            name: 'flex',
            meta: {title: 'flex布局' },
            component: flex
        },
        {
            path: '/grid',
            name: 'grid',
            meta: {title: 'grid布局' },
            component: grid
        },
        {
            path: '/columns',
            name: 'columns',
            meta: {title: 'columns分栏布局' },
            component: columns
        }
        
    ]
}
