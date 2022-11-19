<script>
	import Clock from './Clock.svelte';
	import Data from './Data.svelte';
</script>

<div class="Calendary">
	<Clock />
	<Data />
</div>

<style>
	.Data {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
</style>
