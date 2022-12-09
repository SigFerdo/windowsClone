<script>
	import { infoApps } from 'src/utils/stores/start';
</script>

<div class="IconsInfo">
	{#each $infoApps as infoApp}
		<svelte:component this={infoApp.component} />
	{/each}
</div>

<style>
	.IconsInfo {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 5px;
	}

	.icon :global(svg *) {
		fill: white;
	}
</style>
