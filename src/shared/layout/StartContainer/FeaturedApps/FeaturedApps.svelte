<script>
	import { pinnedApps } from 'src/utils/stores/start';
	import PinnedApp from './PinnedApp/PinnedApp.svelte';
</script>

<div class="FeaturedApps">
	{#each $pinnedApps as app}
		<PinnedApp {app} />
	{/each}
</div>

<style>
	.FeaturedApps {
		border: 1px solid green;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 5px;
	}
</style>
