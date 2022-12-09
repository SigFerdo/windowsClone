<script>
	import { addApp } from 'src/utils/stores/start';
	export let app;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="SingleApp" on:click={() => addApp(app)}>
	<svelte:component this={app.icon} />
</div>

<style>
	.SingleApp {
		width: 40px;
		height: 40px;
	}

	.SingleApp :global(svg) {
		width: 100%;
		height: 100%;
	}
</style>
