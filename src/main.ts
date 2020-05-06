import Vue from 'vue';

// Import plugins
import vuetify from './plugins/vuetify';
import './plugins/vue-dot';
import './plugins/webfontloader';

// Import application parts
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

// Register global components
import './components/global';
import httpService from '@/services/api/index';
import instance from '@/plugins/axios';
import '@/components/workflow-admin';
// Remove "tip" from browser console
Vue.config.productionTip = false;
Vue.prototype.$http = httpService(instance);
Vue.prototype.$bus = new Vue();
// Create main Vue instance
new Vue({
	router,
	store,
	i18n,
	vuetify,
	render: (h) => h(App)
}).$mount('#app'); // Mount it on #app (in public/index.html)
