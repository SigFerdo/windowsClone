<script>
	import MaximizeWindowIcon from 'src/Img/MaximizeWindowIcon.svelte';
	import { maximizeApp } from 'src/utils/stores/openedApps';

	export let app;
</script>

<button class="MaximizeButton" on:click={() => maximizeApp(app)}>
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
