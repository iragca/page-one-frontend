<script lang="ts">
	let { iconName, onclick = () => {} }: { iconName: string; onclick: () => void } = $props();
</script>

{#snippet icon(iconName: string, onclick: () => void = () => {})}
	<button class="icon-link" {onclick}>
		<div class="icon">
			<span class="material-symbols-outlined">{iconName}</span>
		</div>
	</button>
{/snippet}

{@render icon(iconName, onclick)}

<style>
	.icon-link {
		all: unset;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		width: 40px;
		color: var(--light-gray);
	}

	.icon-link:hover {
		color: white;
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
