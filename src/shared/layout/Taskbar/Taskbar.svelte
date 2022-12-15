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
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: rgba(var(--black), 0.7);
		backdrop-filter: blur(10px);
		z-index: 9;
	}
</style>
