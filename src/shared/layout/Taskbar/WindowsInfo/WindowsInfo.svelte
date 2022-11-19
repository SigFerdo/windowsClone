<script>
	import Alert from './Alert.svelte';
	import Calendary from './Data/Calendary.svelte';
	import IconsInfo from './IconsInfo/IconsInfo.svelte';
</script>

<div class="WindowsInfo">
	<IconsInfo />
	<Calendary />
	<Alert />
</div>

<style>
	.WindowsInfo {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-right: 10px;
	}
</style>
