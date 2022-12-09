<script>
	import Clock from './Clock.svelte';
	import Data from './Data.svelte';
</script>

<div class="Calendary">
	<Clock />
	<Data />
</div>

<style>
	.Calendary {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
</style>
