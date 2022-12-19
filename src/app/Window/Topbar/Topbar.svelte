<script>
	import WindowButtons from './WindowButtons/WindowButtons.svelte';
</script>

<div class="Topbar">
	<WindowButtons />
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
