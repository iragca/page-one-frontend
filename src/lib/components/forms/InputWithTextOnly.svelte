<script lang="ts">
	let {
		children,
		rounded = false,
		dark = false,
		gray = false,
		glass = false,
		shadow = false,
		dark_border = false,
		gray_border = false
	} = $props();

	let options = $state(
		[
			rounded && 'rounded',
			dark && 'dark',
			gray && 'gray',
			glass && 'glass',
			shadow && 'shadow',
			dark_border && 'dark-border',
			gray_border && 'gray-border'
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class="background {options}">
	{@render children()}
</div>

<style>
	.background {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 8px;
		text-align: left;
		width: 100%;
		height: 100%;
	}

	.rounded {
		border-radius: 8px;
	}

	.glass {
		backdrop-filter: blur(12px); /* the blur gives the frosted effect */
		-webkit-backdrop-filter: blur(12px); /* for Safari */
	}
	.glass:focus-within {
		background-color: rgba(255, 255, 255, 0.2);
	}

	.shadow {
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	}
	.shadow:focus-within {
		box-shadow: 0px 0px 8px var(--dark-black);
	}

	.dark {
		background-color: rgba(0, 0, 0, 0.1);
	}

	.gray {
		background-color: var(--light-gray);
	}

	.dark-border {
		border: 1px solid var(--dark-gray);
	}

	.gray-border {
		border: 1px solid var(--light-gray);
	}
</style>
