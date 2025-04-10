<script>
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
    import DropdownOption from '$lib/components/dropdown/DropdownOption.svelte';

    let showDropdown = $state(false);
    let currentSort = $state('Title');
</script>

<div class="background">
    <div class="button-container">
        <button class="sort button" onclick={() => (showDropdown = !showDropdown)}>
            <span class="material-symbols-outlined"> sort </span>
        </button>
    </div>
    {#if showDropdown}
        <Dropdown>
            <DropdownOption>Title</DropdownOption>
            <DropdownOption>Author</DropdownOption>
            <DropdownOption>Date</DropdownOption>
            <DropdownOption>Genre</DropdownOption>
        </Dropdown>
    {/if}
</div>

<style>
	.button-container {
		border: 2px solid var(--dark-gray);
		border-radius: 8px;

		width: 40px;
		height: 40px;

		background-color: rgba(31, 31, 31, 0.4);
		color: var(--light-gray);
	}
	.button-container:hover {
		box-shadow: 0px 0px 8px var(--dark-black);
		transition: 0.24s;
		color: white;
	}

	.button-container:active {
		box-shadow: 0px 0px 8px var(--dark-black);
		transition: 0s;
		border: 2px solid var(--light-gray);
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
