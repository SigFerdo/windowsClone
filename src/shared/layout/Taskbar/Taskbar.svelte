<script>
	import PinnedApps from './PinnedApps/PinnedApps.svelte';
	import StartContainer from '../StartContainer/StartContainer.svelte';
	import WindowsInfo from './WindowsInfo/WindowsInfo.svelte';
</script>

<div class="Taskbar">
	<PinnedApps />
	<WindowsInfo />
</div>

<style>
	.Taskbar {
		position: fixed;
		bottom: 0;
		left: 0;
		border: 1px solid red;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
