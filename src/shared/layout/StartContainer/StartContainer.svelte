<script>
	import { isStartOpen } from 'src/utils/stores/start';
	import { fly } from 'svelte/transition';
	import AllAppsContainer from './AllAppsContainer/AllAppsContainer.svelte';
	import FeaturedApps from './FeaturedApps/FeaturedApps.svelte';
	import SearchBar from './SearchBar/SearchBar.svelte';
	import UserInfo from './UserInfo/UserInfo.svelte';
</script>

{#if $isStartOpen}
	<div class="StartContainer" transition:fly={{ y: 30 }}>
		<SearchBar />
		<AllAppsContainer />
		<FeaturedApps />
		<UserInfo />
	</div>
{/if}

<style>
	.StartContainer {
		width: 500px;
		height: 500px;
		border-radius: 5px;
		background-color: rgba(var(--black), 0.7);
		backdrop-filter: blur(3px);
		position: fixed;
		bottom: 0;
		left: 0;
		margin-bottom: 70px;
		margin-left: 10px;
		display: flex;
		flex-direction: column;
		border: 1px solid gray;
	}
</style>
