<div class="button-container">
	<div class="sort button">
		<span class="material-symbols-outlined"> sort </span>
    </div>
</div>

<style>
	.button-container {
		border-radius: 8px;

		width: 40px;
		height: 40px;

        color: white;
	}
	.button-container:hover {
		box-shadow: 0px 0px 8px var(--dark-black);

	}

	.button-container:active {
		box-shadow: 0px 0px 8px var(--dark-black);
        transform: scale(0.90);
		transition: 0s;
	}

	.sort.button {
		all: unset;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 100%;
		border-radius: 8px;
	}
</style>
