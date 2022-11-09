<script>
	import { addApp } from 'src/utils/stores/start';
	import Icon from './Icon.svelte';
	import Name from './Name.svelte';

	export let app;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="PinnedApp" on:click={() => addApp(app)}>
	<Icon {app} />
	<Name {app} />
</div>

<style>
	.PinnedApp {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
