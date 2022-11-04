<script>
	import { pinnedApps } from 'src/utils/stores/start';
	import { openedApps } from 'src/utils/stores/openedApps';
	const addApp = (app) => {
		const appObject = {
			id: app.id,
			component: app.component,
			isMaximized: false,
			isMinimized: false
		};
		if ($openedApps.some((_appObject) => _appObject.id === app.id)) {
			return;
		}
		$openedApps = [...$openedApps, appObject];
	};
</script>

<div class="Apps">
	{#each $pinnedApps as app}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => addApp(app)}><svelte:component this={app.icon} /></div>
	{/each}
</div>

<style>
	.Apps {
		display: flex;
		gap: 5px;
	}
</style>
