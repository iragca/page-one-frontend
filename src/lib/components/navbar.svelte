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
			--background-color: black;
		}
	}

	@media (prefers-color-scheme: light) {
		:root {
			--icon-color: white;
			--background-color: black;
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
		display: flex;
		flex-flow: row;
		justify-content: space-evenly;
		align-items: center;
		background-color: var(--background-color);
		padding: 10px 20px;
		z-index: 1000; /* Ensure it stays above other elements */
	}

	.navcontainer.left {
		display: flex;
		flex-flow: row;
		gap: 10px;
	}
	.navcontainer.right {
		display: flex;
		flex-flow: row;
		justify-content: left;
	}

	.search-bar {
		background-color: white;
		border-radius: 8px;
		padding-left: 8px;
		padding-right: 8px;
		align-items: center;
		display: flex;
	}

	.search-bar input {
		border:none;
		border-radius: 8px;
		width: 480px;
		height: 28px;
		
	}
</style>
