<template>
	<VLayout
		tag="footer"
		align-center
		justify-center
		class="footer white px-3 py-2"
		role="footer"
	>
		<span class="grey lighten-4 px-3 py-1 secondary--text">
			<span class="font-weight-bold">
				{{ $t('components.layout.appFooter.versionLabel') }} {{ version }}
			</span>

			{{ $t('components.layout.appFooter.date') }}
		</span>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	/** The application footer */
	@Component
	export default class Footer extends Vue {
		version = process.env.VUE_APP_VERSION;
	}
</script>

<style lang="scss" scoped>
	.footer {
		flex: none;
		box-shadow: 0 10px 10px 10px rgba(0, 0, 0, .2);
	}
</style>
