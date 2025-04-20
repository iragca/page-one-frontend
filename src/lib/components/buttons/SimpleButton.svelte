<script lang="ts">
	let { iconName }: { iconName: string } = $props();
</script>

<button class="icon-link">
	<div class="icon">
		<span class="material-symbols-outlined">{iconName}</span>
	</div>
</button>

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
