<script>
	import StartContainer from 'src/shared/layout/StartContainer/StartContainer.svelte';
	import Taskbar from 'src/shared/layout/Taskbar/Taskbar.svelte';
</script>

<div class="layout">
	<Taskbar />
	<StartContainer />
	<main>
		<slot />
	</main>
</div>

<style>
</style>
