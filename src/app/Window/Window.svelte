<script>
	import Topbar from './Topbar/Topbar.svelte';

	export let app;
</script>

<div class="Window">
	<Topbar {app} />
	<slot />
</div>

<style>
	.Window {
		position: relative;
		background-color: purple;
		width: 100%;
		height: 100%;
		border-radius: 12px;
	}
</style>
