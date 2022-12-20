<script>
	import { pinnedApps } from 'src/utils/stores/start';
	import SingleApp from './SingleApp.svelte';
</script>

<div class="Apps">
	{#each $pinnedApps as app}
		<SingleApp {app} />
	{/each}
</div>

<style>
	.Apps {
		display: flex;
		gap: 5px;
		align-items: center;
	}
</style>
