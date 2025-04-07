<script lang="ts">
	import Profilecard from '$lib/components/_dashboard/_sidebar/profilecard.svelte';
	import ShelvesCategory from '$lib/components/_dashboard/_sidebar/_shelves/shelves-category.svelte';
	import Shelves from './_sidebar/_shelves/shelves.svelte';
</script>

<div class="background">
	<div class="grid">
		<Profilecard />
		<ShelvesCategory let:Shelves categoryName="My Library">
				<Shelves let:Shelf>
					<Shelf>My Books</Shelf>
					<Shelf>Reading</Shelf>
					<Shelf>Want to Read</Shelf>
					<Shelf>Favorites</Shelf>
				</Shelves>
		</ShelvesCategory>
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
