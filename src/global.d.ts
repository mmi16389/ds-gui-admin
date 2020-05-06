import Vue from 'vue';
import VuexBindings from './store/types';
import httpService from '@/services/api/index';

declare module 'vue/types/vue' {
	// tslint:disable-next-line:no-empty-interface

	import { eventBus } from '@/types';

	interface Vue extends VuexBindings {
	}

	interface Vue {
		$http: ReturnType<typeof httpService>;
		$eventBus: ReturnType<typeof Vue>;
	}
}
