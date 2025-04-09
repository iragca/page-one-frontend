<div class="search-bar">
	<input class="text-box" type="text" placeholder="Search..." />
	<span class="material-symbols-outlined search">search</span>
	<div class="icon">
		<span class="material-symbols-outlined option">manage_search</span>
	</div>
</div>

<style>
	.search-bar {
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		padding-left: 8px;
		padding-right: 8px;
		align-items: center;
		display: flex;
		width: 50vw;
		max-width: 380px;
		height: 36px;
		gap: 8px;
		backdrop-filter: blur(12px); /* the blur gives the frosted effect */
		-webkit-backdrop-filter: blur(12px); /* for Safari */
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	}

	.search-bar:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}

	.search-bar:focus-within {
		background-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0px 0px 8px var(--dark-black);
	}

	.text-box {
		all: unset;
		color: var(--dark-black);
		border-radius: 8px;
		outline: none;
		width: 100%;
		height: 100%;
		text-align: left;
		color: white;
	}

	.text-box::placeholder {
		color: var(--light-gray);
	}
	.material-symbols-outlined.search {
		color: var(--icon-color);
		cursor: pointer;
	}

	.option {
		color: var(--light-gray);
		cursor: pointer;
	}
</style>
