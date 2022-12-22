<script>
	import MinusWindowIcon from 'src/Img/MinusWindowIcon.svelte';
	import { minimizeApp } from 'src/utils/stores/openedApps';

	export let app;
</script>

<button class="MinimizeButton" on:click={() => minimizeApp(app)}>
	<MinusWindowIcon />
</button>

<style>
	.MinimizeButton :global(svg *) {
		fill: rgb(227, 228, 228);
	}
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
</style>
