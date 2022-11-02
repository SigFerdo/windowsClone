<script>
	import ChromeApp from 'src/app/ChromeApp/ChromeApp.svelte';
	import EmailIcon from 'src/Img/EmailIcon.svelte';
	import SettingsIcon from 'src/Img/SettingsIcon.svelte';
</script>

<div class="Apps">
	<ChromeApp />
	<EmailIcon />
	<SettingsIcon />
</div>

<style>
	.Apps {
		display: flex;
		gap: 5px;
	}
</style>
