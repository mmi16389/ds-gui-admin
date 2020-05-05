<template>
	<VAppBar
		align-center
		height="75"
		class="no-flex"
	>
		<RouterLink
			:aria-label="$t('components.layout.appHeader.logoBtn.label')"
			:to="$t('components.layout.appHeader.logoBtn.link')"
			exact
			class="logo-link"
		>
			<img
				:alt="$t('components.layout.appHeader.logoBtn.alt')"
				src="../../assets/logo.svg"
				class="d-block mx-auto logo"
			>
		</RouterLink>

		<VDivider
			vertical
			inset
		/>

		<h1 class="title grey--text text--darken-3 ml-4">
			{{ $t('components.layout.appHeader.title') }}
		</h1>

		<HeaderMenu v-if="!maintenance" />
	</VAppBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import HeaderMenu from './HeaderMenu.vue';

	declare const MAINTENANCE: string;

	/** The Header of the application */
	@Component({
		components: {
			HeaderMenu
		}
	})
	export default class Header extends Vue {
		get maintenance() {
			return MAINTENANCE === 'true';
		}
	}
</script>

<style lang="scss" scoped>
	.logo-link {
		min-width: 155px;

		&:hover {
			background: #eee;
		}
	}

	.logo {
		height: 75px;
		padding: 8px;
	}
</style>
