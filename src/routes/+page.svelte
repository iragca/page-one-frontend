<script>
	import BookBrowser from '$lib/components/_dashboard/bookbrowser.svelte';

	let response = $props();
</script>

<BookBrowser {response} />
