<template>
	<PageCard
		min-height
		card-class="py-4 px-5 layout column align-start"
	>
		<h2 class="title font-weight-bold primary--text mb-4">
			{{ $t('views.home.title') }}
		</h2>

		<p>{{ $t('views.home.description.block1') }}</p>

		<p>{{ $t('views.home.description.block2') }}</p>

		<RouterLink :to="$t('views.home.about.to')">
			{{ $t('views.home.about.label') }}
		</RouterLink>

		<VSpacer />

		<VBtn
			color="accent"
			outlined
			@click="sendNotification"
		>
			{{ $t('views.home.notify') }}
		</VBtn>
	</PageCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Meta } from '@/decorators';

	import { mapActions } from 'vuex';

	import { NotificationObj } from '@cnamts/vue-dot/src/modules/notification';

	import { mdiCheck } from '@mdi/js';
	import { AxiosResponse } from 'axios';

/** Home page */
@Component({
  // Vuex bindings
  methods: mapActions('notification', ['notify'])
})
	export default class Home extends Vue {
		/* istanbul ignore next */
		sendNotification() {
			this.notify({
				type: 'success',
				message: 'Exemple de notification',
				icon: mdiCheck
			});
		}

  /* istanbul ignore next */
  @Meta
  metaInfo() {
    return {
      title: this.$t('views.home.meta.title'),
      meta: [
        {
          name: 'description',
          content: this.$t('views.home.meta.description')
        }
      ]
    };
  }
	}
</script>
