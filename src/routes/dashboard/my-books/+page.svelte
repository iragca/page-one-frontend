<script lang="ts">
	import BookBrowser from '$lib/components/_dashboard/bookbrowser.svelte';
	import ButtonWithIcon from '$lib/components/buttons/ButtonWithIcon.svelte';
	import { closeSidebar } from '$lib/stores/sidebar';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	let response: { data: PageData } = $props();


	let toggleSidebar = () => {
		$closeSidebar = !$closeSidebar;
	};
</script>

<BookBrowser {response}>
	<button class="close-sidebar" onclick={toggleSidebar}>
		<ButtonWithIcon>menu</ButtonWithIcon>
	</button>
</BookBrowser>

<style>
	.close-sidebar {
		all: unset;
		pointer-events: visibleFill;
	}
</style>
