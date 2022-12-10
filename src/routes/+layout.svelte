<script>
	import Desktop from 'src/Desktop/Desktop.svelte';
	import OpenedApps from 'src/shared/layout/OpenedApps/OpenedApps.svelte';
	import StartContainer from 'src/shared/layout/StartContainer/StartContainer.svelte';
	import Taskbar from 'src/shared/layout/Taskbar/Taskbar.svelte';
	import '../global.css';
</script>

<div class="layout">
	<Desktop />
	<Taskbar />
	<StartContainer />
	<OpenedApps />
</div>

<style>
</style>
