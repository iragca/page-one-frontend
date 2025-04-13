<script lang="ts">
	import Dropdown from '$lib/components/dropdown/Dropdown.svelte';
	import DropdownOption from '$lib/components/dropdown/DropdownOption.svelte';
	import ButtonWithIcon from '$lib/components/buttons/ButtonWithIcon.svelte';
	import ModalDivider from '../../_sidebar/_profilecard/modal-divider.svelte';
	import { sortBy, books, sortOrder } from '$lib/stores/dashboard';
	import { sortByKey, sortByIntegerKey } from '$lib/client/sort';

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

	const changeOption = (option: string) => {
		console.log(option);
		let integerKeys = ['year_published'];
		$sortBy = option;

		if (integerKeys.includes(option)) {
			console.log('integer key');
			$books = sortByIntegerKey($books, $sortBy, $sortOrder === 'asc');
		} else {
			console.log('string key');
			$books = sortByKey($books, $sortBy, $sortOrder === 'asc');
		}
	};

	let orders = ['asc', 'desc'];
	let orderNames = {
		asc: 'Ascending',
		desc: 'Descending'
	};

	const changeOrder = (order: string) => {
		$sortOrder = order;
		if (order === 'asc') {
			$books = sortByKey($books, $sortBy, true);
		} else {
			$books = sortByKey($books, $sortBy, false);
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
