<script>
	import CloseWindowIcon from 'src/Img/CloseWindowIcon.svelte';
	import { closeApp } from 'src/utils/stores/openedApps';
	export let app;
</script>

<button class="CloseButton" on:click={() => closeApp(app)}>
	<CloseWindowIcon />
</button>

<style>
	.CloseButton :global(svg *) {
		fill: rgb(227, 228, 228);
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
</style>
