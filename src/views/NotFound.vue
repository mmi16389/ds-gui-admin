<template>
	<ErrorPage
		:code="$t('views.notFound.code')"
		:title="$t('views.notFound.error')"
		:message="$t('views.notFound.message')"
		:cta="$t('views.notFound.cta')"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta } from '@/decorators';

	/** 404 page */
	@Component
	export default class NotFound extends Vue {
		/* istanbul ignore next */
		@Meta
		metaInfo() {
			return {
				title: this.$t('views.notFound.meta.title'),
				meta: [
					{
						name: 'description',
						content: this.$t('views.notFound.meta.description')
					}
				]
			};
		}
	}
</script>
