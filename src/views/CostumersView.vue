<template>
	<v-app id="inspire-costumer">
		<RouterView />
		<RouterView name="dialog" />
	</v-app>
</template>
<script lang='ts'>
	import Component from 'vue-class-component';
	import { Costumers } from '@/components/workflow-admin';
	import Vue from 'vue';
	import { AxiosResponse } from 'axios';

@Component({
  components: {
    Costumers
  }
})
	export default class CostumersView extends Vue {}
</script>
<style lang="scss">
#inspire-costumer {
  padding: 20px;
}
</style>
