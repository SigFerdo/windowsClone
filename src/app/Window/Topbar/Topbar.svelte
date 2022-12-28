<script>
	import { maximizeApp } from 'src/utils/stores/openedApps';
	import WindowButtons from './WindowButtons/WindowButtons.svelte';

	export let app;
	export let xPos;
	export let yPos;
	export let isDrag;

	const startDrag = () => {
		isDrag = true;
	};

	const stopDrag = () => {
		isDrag = false;
	};
	const handleClick = (event) => {
		if (!isDrag) return;

		if (app.isMaximized) {
			maximizeApp(app);
		}

		xPos += event.movementX;
		yPos += event.movementY;
		console.log(event);
	};
</script>

<svelte:window on:mouseup={stopDrag} on:mousemove={handleClick} />
<div class="Topbar" on:mousedown={startDrag} on:mousemove={handleClick} on:mouseup={stopDrag}>
	<WindowButtons {app} bind:xPos bind:yPos />
</div>

<style>
	.Topbar {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background-color: rgb(var(--window));
		display: flex;
		justify-content: right;
	}
</style>
