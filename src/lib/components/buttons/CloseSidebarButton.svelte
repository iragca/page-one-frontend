<button class="close-sidebar">
	<span class="material-symbols-outlined"> arrow_menu_close </span>
</button>

<style>
	.close-sidebar {
		position: absolute;
		top: 10px;
		left: 224px;
		width: 40px;
		height: 40px;
		cursor: pointer; /* Change cursor to pointer */
		background-color: rgb(83, 82, 82);
		border: 2px solid var(--dark-gray);
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		z-index: 10;
	}

	.close-sidebar:hover {
		background-color: rgb(31, 31, 31);
		transition: background-color 0.3s ease;
	}

    .material-symbols-outlined {
		color: var(--icon-color);
	}
</style>
