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

	let orders = ['asc', 'desc'];
	let orderNames = {
		asc: 'Ascending',
		desc: 'Descending'
	};

	const changeOrder = (order: string) => {
		$sortOrder = order === 'asc' ? 'desc' : 'asc';
		if (integerKeys.includes($sortBy)) {
			$books = sortByKey($books, $sortBy, $sortOrder === 'asc', 'number');
		} else {
			$books = sortByKey($books, $sortBy, $sortOrder === 'asc', 'string');
		}
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
			{#each orders as order}
				{#if order === $sortOrder}
					<DropdownOption
						onclickFn={() => {
							changeOrder(order);
						}}
						currentOption={true}>{orderNames[order]}</DropdownOption
					>
				{:else}
					<DropdownOption
						onclickFn={() => {
							changeOrder(order);
						}}>{orderNames[order]}</DropdownOption
					>
				{/if}
			{/each}
		</Dropdown>
	{/if}
</div>

<style>
	.button-container {
		all: unset;
		pointer-events: all;
	}
</style>
