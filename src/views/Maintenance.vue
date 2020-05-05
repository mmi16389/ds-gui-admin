<template>
	<ErrorPage
		:code="pageInfo.code"
		:title="pageInfo.title"
		:message="pageInfo.message"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta } from '@/decorators';

	// Maintenance related env vars
	declare const MAINTENANCE_CODE: string;
	declare const MAINTENANCE_TITLE: string;
	declare const MAINTENANCE_MESSAGE: string;

	@Component
	export default class Maintenance extends Vue {
		get pageInfo() {
			// Use env var and default text
			return {
				code: MAINTENANCE_CODE || this.$t('views.maintenance.code'),
				title: MAINTENANCE_TITLE || this.$t('views.maintenance.title'),
				message: MAINTENANCE_MESSAGE || this.$t('views.maintenance.message')
			};
		}

		/* istanbul ignore next */
		@Meta
		metaInfo() {
			return {
				title: this.pageInfo.title,
				meta: [
					{
						name: 'description',
						content: this.pageInfo.message
					}
				]
			};
		}
	}
</script>
