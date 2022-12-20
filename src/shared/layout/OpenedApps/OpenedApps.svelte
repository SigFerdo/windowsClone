<script>
	import Window from 'src/app/Window/Window.svelte';
	import { openedApps } from 'src/utils/stores/openedApps';
</script>

<div class="OpenedApps">
	{#each $openedApps as app}
		<Window {app}>
			<svelte:component this={app.component} />
		</Window>
	{/each}
</div>

<style>
	.OpenedApps {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 8;
	}
</style>
