<script>
	import { fly } from 'svelte/transition';
	import Topbar from './Topbar/Topbar.svelte';
	export let app;

	let xPos = 50;
	let yPos = 50;

	const handleClick = (event) => {
		if (event.clientX === 0 && event.clientY === 0) {
			return;
		}
		xPos = event.clientX;
		yPos = event.clientY;
		console.log(event);
	};
</script>

<div
	class="Window"
	on:drag={handleClick}
	style="left:{xPos}px;
	top:{yPos}px"
	class:WindowMaximized={app.isMaximized}
	class:WindowMinimized={app.isMinimized}
	class:currentMinimized={!app.isMinimized}
	transition:fly={{ y: 30 }}
>
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
	}

	.WindowMaximized {
		width: 100%;
		height: 100%;
	}

	.WindowMinimized {
		display: none;
	}

	.currentMinimized {
		display: inline;
		background-color: crimson;
	}
</style>
