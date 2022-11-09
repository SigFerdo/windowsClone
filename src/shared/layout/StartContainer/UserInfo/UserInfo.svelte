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
		background-color: rgba(var(--black), 0.5);
		border-top: 1px solid gray;
		border-radius: 5px;
	}
</style>
