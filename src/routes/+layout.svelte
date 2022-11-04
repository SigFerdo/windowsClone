<script>
	import AppContainer from 'src/shared/layout/AppContainer/AppContainer.svelte';
	import StartContainer from 'src/shared/layout/StartContainer/StartContainer.svelte';
	import Taskbar from 'src/shared/layout/Taskbar/Taskbar.svelte';
</script>

<div class="layout">
	<Taskbar />
	<StartContainer />
	<AppContainer />
	<main>
		<slot />
	</main>
</div>

<style>
</style>
