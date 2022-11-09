<script>
	import InputText from './InputText.svelte';
	import Search from './Search.svelte';
</script>

<div class="SearchBar">
	<Search />
	<InputText />
</div>

<style>
	.SearchBar {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		margin: 20px;
		position: relative;
	}
</style>
