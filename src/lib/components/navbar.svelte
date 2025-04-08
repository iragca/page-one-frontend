<script lang="ts">
</script>

<nav class="navbar">
	<div class="navcontainer left">
		<div class="menu">
			<span class="material-icons">menu</span>
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
		transition: color 0.2s ease-in;
	}

	.navbar {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center; 
		padding: 0px 2%; 
	}

	.search-bar:hover {
		background-color: rgb(255, 255, 255);
		box-shadow: 0px 0px 12px var(--dark-black);
		color: var(--dark-black);
	}

	.navcontainer {
		display: flex;
		align-items: center;
	}

	.navcontainer.middle {
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}

	.search-bar {
		background-color: rgba(131, 131, 131, 0.5);
		border-radius: 8px;
		padding: 2px 8px;
		align-items: center;
		display: flex;
		width: 90%;
		max-width: 580px; /* Max width to prevent search bar from stretching too much */
		height: 36px;
		transition: background-color 0.3s ease-in;
	}

	.search-bar input {
		background-color: transparent;
		color: white;
		border: none;
		border-radius: 8px;
		outline: none;
		width: 100%;
		height: 100%;
		font-weight: bold;
		font-size: larger;
	}

	.search-bar:hover input {
		color: black;
	}

	.search-bar:hover .material-symbols-outlined.search {
		color: var(--dark-black);
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.navbar {
			padding: 8px 8px;
		}
		.search-bar {
			max-width: 500px; /* Slightly reduce search bar width on medium screens */
		}
	}

	@media (max-width: 480px) {
		.navbar {
			flex-direction: column;
			align-items: flex-start;
		}

		.navcontainer.middle {
			width: 100%;
		}

		.search-bar {
			width: 90%; 
		}
	}
</style>
