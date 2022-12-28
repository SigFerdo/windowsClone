<script>
	import WindowButtons from './WindowButtons/WindowButtons.svelte';

	export let app;
	let xPos = 50;
	let yPos = 50;
</script>

<div class="Topbar">
	<WindowButtons {app} />
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
