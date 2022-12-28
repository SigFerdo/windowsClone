<script>
	import MaximizeWindowIcon from 'src/Img/MaximizeWindowIcon.svelte';
	import { maximizeApp } from 'src/utils/stores/openedApps';

	export let app;
	export let xPos;
	export let yPos;

	const handleClick = () => {
		maximizeApp(app);
		xPos = 0;
		yPos = 0;
	};
</script>

<button class="MaximizeButton" on:click={handleClick}>
	<MaximizeWindowIcon />
</button>

<style>
	.MaximizeButton :global(svg *) {
		fill: rgb(227, 228, 228);
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
</style>
