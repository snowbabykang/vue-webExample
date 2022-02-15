/*
 * @author: kangxue
 * @Date: 2021-07-09 16:29:44
 * @LastEditors: kangxue
 * @LastEditTime: 2022-02-11 14:42:47
 * @description: file content
 */

const Main = () => import('@/components/main');
const chuanzhu = () => import('@/pages/other/chuanzhu/index');


export default {
    path: '/other',
    component: Main,
    meta: {title: '其他试验', icon: 'el-icon-lock' },  
    name: 'other' ,
    menu: true,
    leaf : true,
    children: [
        {
            path: '/chuanzhu',
            name: 'chuanzhu',
            meta: {title: '串珠'},
            component: chuanzhu
        }
    ]
}
