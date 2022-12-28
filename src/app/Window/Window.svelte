<script>
	import Topbar from './Topbar/Topbar.svelte';
	export let app;

	let xPos = 50;
	let yPos = 50;
	let isDrag = false;
</script>

<div
	class="Window"
	style="left:{xPos}px;
	top:{yPos}px"
	class:WindowMaximized={app.isMaximized}
	class:WindowMinimized={app.isMinimized}
	class:currentMinimized={!app.isMinimized}
>
	<Topbar {app} bind:xPos bind:yPos bind:isDrag />
	<slot />
</div>

<style>
	.Window {
		position: absolute;
		background-color: purple;
		width: 50%;
		height: 50%;
		border-radius: 12px;
		transition: none;
	}

	.WindowMaximized {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.WindowMinimized {
		display: none;
	}

	.currentMinimized {
		display: inline;
		background-color: crimson;
	}
</style>
