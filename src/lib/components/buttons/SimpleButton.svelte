<script lang="ts">
	let {
		iconName,
		type = 'button',
		form = '',
		onclick = () => {}
	}: { iconName: string; type: string; form: string; onclick: () => void } = $props();
</script>

<button class="icon-link" {onclick} {type} {form}>
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
