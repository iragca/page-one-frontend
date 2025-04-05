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
		<div class="advanced-search">
			<span class="material-symbols-outlined">manage_search</span>
		</div>
	</div>
	<div class="navcontainer right">
		<div class="account">
			<span class="material-symbols-outlined">account_circle</span>
		</div>
	</div>
</nav>

<style>
	@media (prefers-color-scheme: dark) {
		:root {
			--icon-color: white;
			--background-color: #0f2838;
		}
	}

	@media (prefers-color-scheme: light) {
		:root {
			--icon-color: white;
			--background-color: #2c80b4;
		}
	}

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
		position: fixed; /* Make the navbar fixed */
		top: 0; /* Position it at the top of the viewport */
		left: 0; /* Align it to the left */
		width: 100%; /* Make it span the full width */
		display: inline-flex;
		flex-flow: row;
		justify-content: space-evenly;
		align-items: center;
		background-color: var(--background-color);
		padding: 10px;
		z-index: 1000; /* Ensure it stays above other elements */
	}

	.navcontainer {
		align-items: center;
		display: flex;
		flex-flow: row;
		gap: 10px;
	}

	.navcontainer.middle {
		width: 50%;
		min-width: 200px
	}

	.search-bar {
		background-color: white;
		border-radius: 8px;
		padding-left: 8px;
		padding-right: 8px;
		align-items: center;
		display: flex;
		width: 100%;
	}

	.search-bar input {
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
