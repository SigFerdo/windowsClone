<script>
	import Apps from './Apps/Apps.svelte';
	import Start from './Start.svelte';
</script>

<div class="PinnedApps">
	<Start />
	<Apps />
</div>

<style>
	.PinnedApps {
		display: flex;
		align-items: center;
		gap: 5px;
	}
</style>
