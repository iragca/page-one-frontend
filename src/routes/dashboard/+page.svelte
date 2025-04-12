<script>
	import BookBrowser from '$lib/components/_dashboard/bookbrowser.svelte';
	import ButtonWithIcon from '$lib/components/buttons/ButtonWithIcon.svelte';
	import { closeSidebar } from '$lib/stores/sidebar';
	
	let response = $props();
	
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