<script lang="ts">
</script>

<nav class="navbar">
	<div class="navcontainer left">
		<div class="home-icon">
			<span class="material-icons">home</span>
		</div>
		<div class="back-icon">
			<span class="material-symbols-outlined">line_start_arrow</span>
		</div>
	</div>
	<div class="navcontainer middle">
		<div class="search-bar">
			<input type="text" placeholder="Search..." />
			<span class="material-symbols-outlined search">search</span>
		</div>
	</div>
	<div class="navcontainer right">
		<div class="advanced-search">
			<span class="material-symbols-outlined">manage_search</span>
		</div>
	</div>
</nav>

<style>
	.material-icons {
		color: var(--icon-color);
	}

	.material-symbols-outlined {
		font-variation-settings:
			'FILL' 1,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
		color: var(--icon-color);
	}

	.material-symbols-outlined.search {
		color: var(--background-color);
	}

	.navbar {
		width: fit-content;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		align-items: center;
		background: rgba(31, 31, 31, 0.5); /* semi-transparent */
		box-shadow: 0px 0px 8px var(--dark-black);
		padding: 10px;
		gap: 12px;
		border: 1px solid var(--light-gray);
		border-radius: 12px;
	}

	.navbar:hover {
		box-shadow: 0px 0px 12px var(--dark-black);
	}

	.navcontainer {
		align-items: center;
		display: flex;
		flex-flow: row;
		gap: 10px;
	}

	.navcontainer.middle {
		width: 50%;
		min-width: 200px;
	}

	.search-bar {
		background-color: white;
		border-radius: 8px;
		padding-left: 8px;
		padding-right: 8px;
		align-items: center;
		display: flex;
		width: 50vw;
	}

	.search-bar input {
		color: var(--dark-black);
		border: none;
		border-radius: 8px;
		outline: none;
		width: 100%;
		height: 36px;
	}

	/* Responsive design */

	@media (max-width: 768px) {
		/* TODO: Adjust the navbar for smaller screens */
	}

	@media (max-width: 480px) {
		/* TODO: Adjust the navbar for smaller screens */
	}
</style>
