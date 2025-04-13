<script lang="ts">
	let { icon = null, currentOption = false, onclickFn } = $props();
</script>

<button
	class="option"
	style={currentOption ? 'color: white; background-color: var(--dark-black)' : ''}
	onclick={onclickFn}
>
	{#if icon}
		<div class="icon">
			<span class="material-symbols-outlined">{icon}</span>
		</div>
	{/if}
	<div class="name">
		<slot />
	</div>
</button>

<style>
	.option {
		all: unset;
		cursor: pointer;

		display: flex;
		justify-content: center;
		align-items: center;
		text-align: left;

		gap: 8px;
		padding: 0.4rem 0.8rem;
		border-radius: 8px;
		color: var(--light-gray);
	}
	.option:hover {
		background-color: var(--dark-black);
		color: white;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.name:hover {
		box-shadow: 0px 0px 8px var(--dark-black);
		transition: 0.24s;
		color: white;
	}

	.material-symbols-outlined {
		font-size: 20px;
	}
</style>
