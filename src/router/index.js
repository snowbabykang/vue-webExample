import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('@/pages/index');
const Main = () => import('@/components/main');
const NotFound = () => import('@/components/404');

import webjsRoute from '@/pages/webjs/route';
import layoutRoute from '@/pages/layout/route';
import css3Route from '@/pages/css3/route';
import vueRoute from '@/pages/vue/route';
import jsRoute from '@/pages/js/route';
import otherRoute from '@/pages/other/route';


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
			name: '',
			redirect: { path: '/404' }
		},
		webjsRoute,
		layoutRoute,
		css3Route,
		vueRoute,
		jsRoute,
		otherRoute
	]
}) 
