<script>
	import { openedApps } from 'src/utils/stores/openedApps';
</script>

{#each $openedApps as app}
	<svelte:component this={app.component} />
{/each}

<style>
	.AppContainer {
	}
</style>
