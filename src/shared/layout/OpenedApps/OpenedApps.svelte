<script>
	import { openedApps } from 'src/utils/stores/openedApps';
</script>

<div class="OpenedApps">
	{#each $openedApps as app}
		<div class="OpenedApp">
			<svelte:component this={app.component} />
		</div>
	{/each}
</div>

<style>
	.OpenedApp {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: red;
	}

	.OpenedApps {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 8;
	}
</style>
