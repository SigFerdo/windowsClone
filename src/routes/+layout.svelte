<script>
	import Desktop from 'src/Desktop/Desktop.svelte';
	import AppContainer from 'src/shared/layout/AppContainer/AppContainer.svelte';
	import StartContainer from 'src/shared/layout/StartContainer/StartContainer.svelte';
	import Taskbar from 'src/shared/layout/Taskbar/Taskbar.svelte';
	import '../global.css';
</script>

<div class="layout">
	<Desktop />
	<Taskbar />
	<StartContainer />
	<AppContainer />
	<main>
		<slot />
	</main>
</div>

<style>
</style>
