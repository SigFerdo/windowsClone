<script>
	import WifiIcon from 'src/Img/WifiIcon.svelte';
</script>

<div class="WifiComponent">
	<WifiIcon />
</div>

<style>
	.WifiComponent {
		width: 15px;
		height: 15px;
		margin-bottom: 5px;
		margin-right: 2px;
	}
	.WifiComponent :global(svg) {
		width: 100%;
		height: 100%;
		transform: rotate(-45deg);
	}

	.WifiComponent :global(svg *) {
	}
</style>
