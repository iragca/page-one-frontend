<script lang="ts">
	import SimpleButton from "$lib/components/buttons/SimpleButton.svelte";

	let { bookTitle } = $props();
	let isNavigating = $state(false);

  function goBack() {
    if (!isNavigating) {
      isNavigating = true;
      history.back();
    }
  }
</script>

<nav class="navbar">
	<SimpleButton iconName="arrow_back" onclick={goBack} />
	<div class="bookTitle">
		{@render bookTitle()}
	</div>
	<SimpleButton iconName="download" onclick={() => {}} />
</nav>

<style>

	.navbar {
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		background: rgba(31, 31, 31, 0.5); /* semi-transparent */
		box-shadow: 0px 0px 4px var(--dark-black);
		padding: 10px;
		gap: 12px;
		border: 1px solid var(--light-gray);
		border-radius: 12px;
	}

	.bookTitle {
		display: flex;
		justify-content: flex-start;
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
