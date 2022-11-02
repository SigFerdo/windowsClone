<script>
	import Taskbar from 'src/shared/layout/Taskbar/Taskbar.svelte';
</script>

<div class="layout">
	<Taskbar />

	<main>
		<slot />
	</main>
</div>

<style>
</style>
