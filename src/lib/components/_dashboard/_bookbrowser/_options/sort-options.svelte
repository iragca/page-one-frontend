<script>
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import DropdownOption from '$lib/components/dropdown/DropdownOption.svelte';
	import ButtonWithIcon from '$lib/components/buttons/ButtonWithIcon.svelte';

	let showDropdown = $state(false);
	let currentSort = $state('Title');

	const toggleDropdown = () => {
		showDropdown = !showDropdown;
	};
</script>

<div class="background">
	<button class="button-container" onclick={toggleDropdown}>
		<ButtonWithIcon>sort</ButtonWithIcon>
	</button>
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
		all: unset;
	}
</style>
