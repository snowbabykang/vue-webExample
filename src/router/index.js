import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('@/pages/index');
const Main = () => import('@/components/main');
const NotFound = () => import('@/components/404');

const validateIDCard = () => import('@/pages/webjs/validateIDCard');
const toFixed = () => import('@/pages/webjs/toFixed');
const decimalError = () => import('@/pages/webjs/decimalError');

const layout = () => import('@/pages/layout');
const grid = () => import('@/pages/grid');
const columns = () => import('@/pages/columns');
const flex = () => import('@/pages/flex');

const objectFit = () => import('@/pages/css3/objectFit');
const background = () => import('@/pages/css3/background');
const border = () => import('@/pages/css3/border');

const starRate = () => import('@/pages/npm/star');


Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: Main,
			name: '' ,
			children: [
				{
					path: '/',
					name: 'index',
					meta: {title: '首页' },
					component: index
				}
			]
		},
		{
			path: '/404',
			component: NotFound,
			name: '',
			hidden: true
		},
		{
			path: '*',
			hidden: true,
			redirect: { path: '/404' }
		},
		{
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
		},
		{
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
		},
		{
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
		},
		{
			path: '/npm',
			component: Main,
			meta: {title: 'NPM私有包', icon: 'el-icon-lock' },  
			name: 'npm' ,
			menu: true,
			leaf : true,
			children: [
				{
					path: '/starRate',
					name: 'starRate',
					meta: {title: '五星评分' },
					component: starRate
				}
			]
		},
	]
}) 
