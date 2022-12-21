<script>
	import { fly } from 'svelte/transition';
	import Topbar from './Topbar/Topbar.svelte';

	export let app;
</script>

<div class="Window" class:WindowMaximized={app.isMaximized} transition:fly={{ y: 30 }}>
	<Topbar {app} />
	<slot />
</div>

<style>
	.Window {
		position: absolute;
		background-color: purple;
		width: 50%;
		height: 50%;
		border-radius: 12px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.WindowMaximized {
		width: 100%;
		height: 100%;
	}
</style>
