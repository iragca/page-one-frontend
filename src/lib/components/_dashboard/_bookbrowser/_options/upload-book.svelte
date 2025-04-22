<script lang="ts">
	import ButtonWithIcon from '$lib/components/buttons/ButtonWithIcon.svelte';
	import { showBookUpload } from '$lib/stores/dashboard';

	function openBookUpload() {
		$showBookUpload = true;
	}
</script>

<button class="upload-book" onclick={openBookUpload}>
    <ButtonWithIcon>add</ButtonWithIcon>
</button>

<style>
	button {
		pointer-events: visibleFill;
	}
</style>