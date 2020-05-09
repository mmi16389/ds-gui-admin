import Vue from 'vue';

import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import i18n, { loadLanguageAsync } from '@/i18n';
import store from '@/store';
import costumerView from '@/views/CostumersView.vue';
// Directly import Home view for faster rendering of first page

Vue.use(VueRouter);
Vue.use(VueMeta, {
	refreshOnceOnNavigation: true
});

// Env var
declare const MAINTENANCE: string;

/** See https://router.vuejs.org/fr/essentials/navigation.html for help */
const routes = [
	{
		path: '/',
		redirect: '/costumer'
	},
	{
		path: '/costumer',
		component: costumerView,
		children: [
			{
				name: 'home',
				path: '',
				component: () => import(
					/* webpackChunkName: "list-costumers" */
					'./components/workflow-admin/Costumers.vue'
				)
			},
			{
				path: 'add-new-costumers',
				name: 'add-new-costumers',
				component: () => import(
					/* webpackChunkName: "add-costumers" */
					'./components/workflow-admin/CostumersNew.vue'
				)
			}
		]
	},
	{
		path: '/a-propos',
		name: 'about',
		// Route level code-splitting
		// This generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited
		component: () => import(
			/* webpackChunkName: "about" */
			'./views/About.vue'
		)
	},
	{
		path: '/maintenance',
		name: 'maintenance',
		component: () => import(
			/* webpackChunkName: "maintenance" */
			'./views/Maintenance.vue'
		)
	},
	{
		path: '*', // Everything that doesn't match a route
		name: 'notFound',
		component: () => import(
			/* webpackChunkName: "not-found" */
			'./views/NotFound.vue'
		)
	}
];

const router = new VueRouter({
	mode: 'history', // Use the History API, and remove the hash from the URL
	routes,
	// Native-like scroll behavior
	scrollBehavior(to, from, savedPosition) {
		// If there is an hash, this is an anchor, so scroll to it
		if (to.hash) {
			return {
				selector: to.hash
			};
		} else {
			// Else simulate browser behavior by returning to the previous position, or fallback to top
			if (savedPosition) {
				return savedPosition;
			} else {
				return { x: 0, y: 0 };
			}
		}
	}
});

router.beforeEach((to, from, next) => {
	// Remove notification
	store.dispatch('notification/rmNotif');

	const lang = i18n.locale;

	// Resolve translations before each navigation
	loadLanguageAsync(lang).then(() => {
		if (MAINTENANCE === 'true') {
			// Avoid infinite loop
			if ('maintenance' !== to.name) {
				// Redirect to maintenance page
				next({ name: 'maintenance' });
			} else {
				// Else, resolve route
				next();
			}
		} else if ('maintenance' === to.name) {
			// Else, if we're trying to access the maintenance page
			// when not in maintenance mode, redirect to home
			next({ name: 'home' });
		} else {
			next();
		}
	});
});
/*router.afterEach( (to, from) => {
	if ('home' === to.name) {
		allCostumers();
	}
});*/
export default router;
