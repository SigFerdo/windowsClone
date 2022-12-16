<script>
	import CloseButton from './CloseButton.svelte';
	import MaximizeButton from './MaximizeButton.svelte';
	import MinimizeButton from './MinimizeButton.svelte';
</script>

<div class="WindowButtons">
	<MinimizeButton />
	<MaximizeButton />
	<CloseButton />
</div>

<style>
	.WindowButtons {
		position: relative;
		display: flex;
		justify-content: right;
		align-items: center;
		align-content: center;
		gap: 20px;
	}
</style>
