<template>
	<PageCard card-class="py-4 px-5">
		<h2 class="title font-weight-bold primary--text">
			{{ $t('views.about.title') }}
		</h2>

		<Links
			v-for="(data, index) in links"
			:key="index"
			:title="data.title"
			:links="data.links"
			class="mt-4"
		/>

		<VBtn
			exact
			color="accent"
			outlined
			:to="$t('views.about.backBtn.to')"
			class="mt-8"
		>
			<VIcon class="mr-2">
				{{ backArrowIcon }}
			</VIcon>

			{{ $t('views.about.backBtn.label') }}
		</VBtn>
	</PageCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta } from '@/decorators';

	import { Link } from '@/types';

	import { mdiArrowLeft } from '@mdi/js';

	interface LinkItem {
		title: string;
		links: Link[];
	}

	/** About page */
	@Component({
		components: {
			Links: () => import(
				/* webpackChunkName: "links" */
				'@/components/Links'
			)
		}
	})
	export default class About extends Vue {
		backArrowIcon = mdiArrowLeft;

		get links() {
			return this.$t('views.about.links') as unknown as LinkItem[];
		}

		/* istanbul ignore next */
		@Meta
		metaInfo() {
			return {
				title: this.$t('views.about.meta.title'),
				meta: [
					{
						name: 'description',
						content: this.$t('views.about.meta.description')
					}
				]
			};
		}
	}
</script>
