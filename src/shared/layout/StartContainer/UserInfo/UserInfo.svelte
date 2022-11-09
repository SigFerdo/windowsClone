<script>
	import OnButton from './UserInfo/OnButton.svelte';
	import UserProfile from './UserInfo/UserProfile.svelte';
</script>

<div class="UserInfo">
	<UserProfile />
	<OnButton />
</div>

<style>
	.UserInfo {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
