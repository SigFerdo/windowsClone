<script>
	import OnButtonIcon from 'src/Img/OnButtonIcon.svelte';
</script>

<div class="OnButton">
	<OnButtonIcon />
</div>

<style>
	.OnButton {
		width: 20px;
		height: 20px;
		margin-right: 50px;
	}
	.OnButton :global(svg) {
		width: 100%;
		height: 100%;
	}
	.OnButton :global(svg *) {
		fill: rgb(var(--text));
	}
</style>
