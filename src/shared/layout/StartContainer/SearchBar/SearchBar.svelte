<script>
	import SearchIcon from 'src/Img/SearchIcon.svelte';
	import InputText from './InputText.svelte';
</script>

<div class="SearchBar">
	<SearchIcon />
	<InputText />
</div>

<style>
	.SearchBar {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
	}
</style>
