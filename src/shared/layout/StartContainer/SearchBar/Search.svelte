<script>
	import SearchIcon from 'src/Img/SearchIcon.svelte';
</script>

<div class="Search">
	<SearchIcon />
</div>

<style>
	.Search {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Search :global(svg *) {
		fill: white;
	}
</style>
