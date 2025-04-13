<script lang="ts">
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import DropdownOption from '$lib/components/dropdown/DropdownOption.svelte';
	import ButtonWithIcon from '$lib/components/buttons/ButtonWithIcon.svelte';
	import ModalDivider from '../../_sidebar/_profilecard/modal-divider.svelte';
	import { sortBy, books, sortOrder } from '$lib/stores/dashboard';
	import { sortByKey } from '$lib/client/sort';

	let showDropdown = $state(false);
	const toggleDropdown = () => {
		showDropdown = !showDropdown;
	};

	let options = ['title', 'author', 'year_published'];

	let optionNames = {
		title: 'Title',
		author: 'Author',
		year_published: 'Date'
	};
	let integerKeys = ['year_published'];

	const changeOption = (option: string) => {
		$sortBy = option;

		if (integerKeys.includes(option)) {
			$books = sortByKey($books, $sortBy, $sortOrder === 'asc', 'number');
		} else {
			$books = sortByKey($books, $sortBy, $sortOrder === 'asc', 'string');
		}
	};

	const changeToAscending = () => {
		$sortOrder = 'asc';
		$books = sortByKey($books, $sortBy, true, integerKeys.includes($sortBy) ? 'number' : 'string');
	};
	const changeToDescending = () => {
		$sortOrder = 'desc';
		$books = sortByKey($books, $sortBy, false, integerKeys.includes($sortBy) ? 'number' : 'string');
	};
</script>

<div class="background">
	<button class="button-container" onclick={toggleDropdown}>
		<ButtonWithIcon>sort</ButtonWithIcon>
	</button>
	{#if showDropdown}
		<Dropdown>
			{#each options as option}
				{#if option === $sortBy}
					<DropdownOption
						onclickFn={() => {
							changeOption(option);
						}}
						currentOption={true}>{optionNames[option]}</DropdownOption
					>
				{:else}
					<DropdownOption
						onclickFn={() => {
							changeOption(option);
						}}>{optionNames[option]}</DropdownOption
					>
				{/if}
			{/each}
			<ModalDivider />
			<DropdownOption onclickFn={changeToAscending} currentOption={$sortOrder === 'asc'}
				>Ascending</DropdownOption
			>
			<DropdownOption onclickFn={changeToDescending} currentOption={$sortOrder === 'desc'}
				>Descending</DropdownOption
			>
		</Dropdown>
	{/if}
</div>

<style>
	.button-container {
		all: unset;
		pointer-events: all;
	}
</style>
