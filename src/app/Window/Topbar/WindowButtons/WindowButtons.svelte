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
		flex-direction: row;
		gap: 10px;
		margin: 5px;
	}
</style>
