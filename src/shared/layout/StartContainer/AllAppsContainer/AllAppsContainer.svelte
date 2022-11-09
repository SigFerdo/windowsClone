<script>
	import AllApps from './AllApps.svelte';
	import Pinned from './Pinned.svelte';
</script>

<div class="AllAppsContainer">
	<Pinned />
	<AllApps />
</div>

<style>
	.AllAppsContainer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
