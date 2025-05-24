<script lang="ts">
	import ButtonWithIcon from '$lib/components/buttons/ButtonWithIcon.svelte';
	import { showBookUpload } from '$lib/stores/dashboard';
	import { isAdmin } from '$lib/stores/user';

	function openBookUpload() {
		$showBookUpload = true;
	}
</script>

{#if $isAdmin}
	<button class="upload-book" onclick={openBookUpload}>
		<ButtonWithIcon>add</ButtonWithIcon>
	</button>
{/if}

<style>
	button {
		pointer-events: visibleFill;
	}
</style>