<template>
	<!-- VApp is an element which is required to use Vuetify. See https://vuetifyjs.com/en/ for help -->
	<VApp
		v-cloak
		class="main-ctn"
	>
		<AppHeader />

		<AppToolbar />

		<NotificationBar />

		<VContent role="main">
			<!-- Transition between routes -->
			<transition
				name="fade"
				mode="out-in"
			>
				<!-- Load the component defined in the router for the current route -->
				<RouterView />
			</transition>
		</VContent>

		<AppFooter />
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta } from '@/decorators';

	// Static import for faster rendering
	import { AppHeader, AppToolbar, AppFooter } from '@/components/layout';

	/** App is the main component */
	@Component({
		components: {
			AppHeader,
			AppToolbar,
			AppFooter
		}
	})
	export default class App extends Vue {
		/** The meta informations of the route */
		/* istanbul ignore next */
		@Meta
		metaInfo() {
			return {
				// If no sub-components specify a metaInfo.title, this title will be used
				title: this.$t('common.meta.title'),
				// All titles will be injected into this template
				titleTemplate: this.$t('common.meta.titleTemplate'),
				meta: [
					{
						name: 'description',
						content: this.$t('common.meta.description')
					}
				]
			};
		}
	}
</script>
