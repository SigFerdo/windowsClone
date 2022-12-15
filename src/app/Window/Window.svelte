<script>
	import Topbar from './Topbar/Topbar.svelte';
</script>

<div class="Window">
	<Topbar />
	<slot />
</div>

<style>
	.Window {
		position: relative;
		background-color: purple;
		width: 100%;
		height: 100%;
	}
</style>
