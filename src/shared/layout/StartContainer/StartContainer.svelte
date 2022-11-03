<script>
	import { isStartOpen } from 'src/utils/stores/start';
	import { fly } from 'svelte/transition';
	import FeaturedApps from './FeaturedApps/FeaturedApps.svelte';
	import SearchBar from './SearchBar/SearchBar.svelte';
	import UserInfo from './UserInfo/UserInfo.svelte';
</script>

{#if $isStartOpen}
	<div class="StartContainer" transition:fly={{ y: 30 }}>
		<SearchBar />
		<FeaturedApps />
		<UserInfo />
	</div>
{/if}

<style>
	.StartContainer {
		width: 300px;
		height: 500px;
		border: 1px solid red;
		background: black;
		position: fixed;
		bottom: 0;
		left: 0;
		margin-bottom: 70px;
		margin-left: 10px;
	}
</style>
