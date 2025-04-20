<script lang="ts">
	import SimpleButton from '$lib/components/buttons/SimpleButton.svelte';
</script>

<nav class="navbar">
	<slot {SimpleButton}/>
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

	/* Responsive design */

	@media (max-width: 768px) {
		/* TODO: Adjust the navbar for smaller screens */
	}

	@media (max-width: 480px) {
		/* TODO: Adjust the navbar for smaller screens */
	}
</style>
