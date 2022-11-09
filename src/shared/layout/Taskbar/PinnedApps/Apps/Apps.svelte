<script>
	import { addApp, pinnedApps } from 'src/utils/stores/start';
</script>

<div class="Apps">
	{#each $pinnedApps as app}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => addApp(app)}>
			<svelte:component this={app.icon} />
		</div>
	{/each}
</div>

<style>
	.Apps {
		display: flex;
		gap: 5px;
	}
</style>
