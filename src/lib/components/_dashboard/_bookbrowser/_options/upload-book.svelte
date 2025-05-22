<script lang="ts">
	import ButtonWithIcon from '$lib/components/buttons/ButtonWithIcon.svelte';
	import { showBookUpload, userRole } from '$lib/stores/dashboard';

	function openBookUpload() {
		$showBookUpload = true;
	}
</script>

{#if $userRole === 'admin'}
	<button class="upload-book" onclick={openBookUpload}>
		<ButtonWithIcon>add</ButtonWithIcon>
	</button>
{/if}

<style>
	button {
		pointer-events: visibleFill;
	}
</style>