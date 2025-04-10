<button class="shelf">
	<div class="container">
		<span class="material-symbols-outlined"> list </span>
		<slot />
	</div>
</button>

<style>
	.shelf {
		all: unset;
		display: flex;
		flex-direction: column;
		text-align: left;
		gap: 0.2rem;
		padding: 0.8rem;
		border-radius: 0 4px 4px 0;
        color: var(--light-gray);
		font-size: medium;
		font-weight: bolder;
	}

	.shelf:hover {
		background-color: var(--background-color-2);
		border-radius: 4px;
		cursor: pointer;
        color: white;
	}

    .container {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .material-symbols-outlined {
        font-size: 20px;
    }
</style>
