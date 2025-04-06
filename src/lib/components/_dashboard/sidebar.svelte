<script lang="ts">
	import Profilecard from '$lib/components/_dashboard/_sidebar/profilecard.svelte';
</script>

<div class="background">
	<div class="grid">
		<Profilecard />
		<slot name="content"></slot>
		<slot name="footer"></slot>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: minmax(0, 100px) 1fr;
	}

	.background {
		height: 100vh;
		background-color: rgb(31, 31, 31, 0.5);
        border-right: 2px solid var(--background-color-3);
	}
</style>
