<div class="extension">
		<div class="button-background">
			<button class="open-sidebar">
				<span class="material-symbols-outlined"> arrow_menu_open</span>
			</button>
		</div>
	</div>

<style>

	.open-sidebar {
		all: unset;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		top: 10px;
		left: 10px;
		width: 40px;
		height: 40px;
		background-color: none;
		z-index: 10;
		border-radius: 8px;
	}

	.extension {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: right;
		top: 10px;
		left: -50px;
		z-index: 10;
		width: 100px;
		
	}


	.button-background {
		display: flex;
		align-items: center;
		justify-content: right;
		border: 2px solid var(--dark-gray);
		width: 40px;
		height: 40px;
		border-radius: 8px;
		background-color: rgb(83, 82, 82);
		border: 2px solid var(--dark-gray);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}

	.button-background:hover {
		width: 200px;
		background-color: rgb(31, 31, 31);
		transition: 0.3s ease;
		border: 2px solid var(--dark-gray);
	}

	.open-sidebar:hover {
		transition: 0.3s ease;
	}

	.material-symbols-outlined {
		color: var(--icon-color);
	}
</style>

