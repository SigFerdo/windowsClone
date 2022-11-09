<script>
	import ProfilePic from './UserProfile/ProfilePic.svelte';
	import UserName from './UserProfile/UserName.svelte';
</script>

<div class="UserProfile">
	<ProfilePic />
	<UserName />
</div>

<style>
	.UserProfile {
		display: flex;
		align-items: center;
		margin: 15px;
		margin-left: 40px;
		gap: 10px;
	}
</style>
