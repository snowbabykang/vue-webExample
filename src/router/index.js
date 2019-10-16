import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import validateIDCard from '@/pages/validateIDCard'
import toFixed from '@/pages/toFixed'
import decimalError from '@/pages/decimalError'


import grid from '@/pages/grid'
import flex from '@/pages/flex'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			meta: {title: '首页' },
			component: index
		},
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
		},
		{
			path: '/grid',
			name: 'grid',
			meta: {title: 'CSS布局系列：grid布局' },
			component: grid
		},
		{
			path: '/flex',
			name: 'flex',
			meta: {title: 'CSS布局系列：flex布局' },
			component: flex
		},
	]
}) 
