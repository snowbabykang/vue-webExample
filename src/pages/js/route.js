/*
 * @author: kangxue
 * @Date: 2021-07-09 16:29:44
 * @LastEditors: kangxue
 * @LastEditTime: 2022-02-21 10:20:40
 * @description: file content
 */

const Main = () => import('@/components/main');
const faceTrack = () => import('@/pages/js/faceTrack/index');
const observer = () => import('@/pages/js/observer/index');


export default {
    path: '/js',
    component: Main,
    meta: {title: 'js功能测试', icon: 'el-icon-lock' },  
    name: 'js' ,
    menu: true,
    leaf : true,
    children: [
        {
            path: '/faceTrack',
            name: 'faceTrack',
            meta: {title: '识别图片人脸', content: '识别图片人脸' },
            component: faceTrack
        },
        {
            path: '/observer',
            name: 'observer',
            meta: {title: '浏览器的5种Observer' },
            component: observer
        },
    ]
}
