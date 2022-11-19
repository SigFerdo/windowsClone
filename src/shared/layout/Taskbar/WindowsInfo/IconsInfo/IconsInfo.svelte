<script>
	import { infoApps } from 'src/utils/stores/start';
</script>

<div class="IconsInfo">
	{#each $infoApps as infoApp}
		<svelte:component this={infoApp.icon} />
	{/each}
</div>

<style>
	.IconsInfo {
		display: flex;
		width: 100px;
		height: 50px;
	}

	.icon :global(svg *) {
		fill: white;
	}
</style>
