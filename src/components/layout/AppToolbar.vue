<template>
	<VToolbar
		dense
		tag="section"
		class="secondary no-flex"
	>
		<VTabs
			v-if="!maintenance"
			dark
			background-color="transparent"
		>
			<VTab
				v-for="link in links"
				:key="link.label"
				:to="link.to"
				v-bind="link.options"
			>
				{{ link.label }}
			</VTab>
		</VTabs>
	</VToolbar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	interface ToolbarLink {
		label: string;
		to?: {
			name: string;
		};
		options?: object;
	}

	declare const MAINTENANCE: string;

	@Component
	export default class Toolbar extends Vue {
		get links() {
			return this.$t('components.layout.appToolbar.links') as unknown as ToolbarLink[];
		}

		get maintenance() {
			return MAINTENANCE === 'true';
		}
	}
</script>

<style lang="scss" scoped>
	.v-tabs-bar {
		.v-tab:not(.v-tab--active):not(.v-tab--disabled) {
			color: #fff;
			opacity: .8;
		}
	}
</style>
