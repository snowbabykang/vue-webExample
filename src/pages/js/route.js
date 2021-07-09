/*
 * @author: kangxue
 * @Date: 2021-07-09 16:29:44
 * @LastEditors: kangxue
 * @LastEditTime: 2021-07-09 16:31:06
 * @description: file content
 */

const Main = () => import('@/components/main');
const faceTrack = () => import('@/pages/js/faceTrack/index');


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
        }
    ]
}
