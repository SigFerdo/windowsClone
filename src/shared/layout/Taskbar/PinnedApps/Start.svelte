<script>
	import WindowsLogo from 'src/Img/WindowsLogo.svelte';
	import { isStartOpen } from 'src/utils/stores/start';
	const toggleOpen = () => {
		$isStartOpen = !$isStartOpen;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<div class="Start" class:Open={$isStartOpen} on:click={toggleOpen}>
	<WindowsLogo />
</div>

<style>
	.Start {
		width: 50px;
		height: 50px;
		display: flex;
		cursor: pointer;
	}

	.Start :global(svg) {
		width: 100%;
		height: 100%;
	}

	.Open :global(svg *) {
		fill: red;
	}
</style>
