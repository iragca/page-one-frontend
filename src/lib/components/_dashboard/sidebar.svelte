<script lang="ts">
	import Profilecard from '$lib/components/_dashboard/_sidebar/profilecard.svelte';
	import ShelvesCategory from './_sidebar/_shelves/shelves-category.svelte';
</script>

<div class="background">
	<div class="grid">
		<slot />
	</div>
</div>

<style>
	.grid {
		display: absolute;
		width: 320px;
		position: fixed;
		grid-template-rows: minmax(0, 100px) 1fr;
	}

	.background {
		height: 100%;
		width: 320px;
		background-color: rgb(31, 31, 31, 0.5);
        border-right: 2px solid var(--background-color-3);
	}

</style>
