<script lang="ts">
	import SimpleButton from '$lib/components/buttons/SimpleButton.svelte';
	import { showBookDetails } from '$lib/stores/dashboard';

	let { bookTitle } = $props();

	function closeBookDetails() {
		$showBookDetails = false;
	}
</script>

<nav class="navbar">
	<SimpleButton iconName="close" onclick={closeBookDetails} />
	<div class="bookTitle">
		{bookTitle}
	</div>
	<SimpleButton iconName="edit" onclick={() => {}} />
	<SimpleButton iconName="download" onclick={() => {}} />
</nav>

<style>
	.navbar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		align-content: center;
		width: 100%;

		padding: 10px;
		gap: 12px;

		border-radius: 12px;
	}

	.bookTitle {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		color: var(--light-gray);
		text-align: center;
	}

	/* Responsive design */

	@media (max-width: 768px) {
		/* TODO: Adjust the navbar for smaller screens */
	}

	@media (max-width: 480px) {
		/* TODO: Adjust the navbar for smaller screens */
	}
</style>
