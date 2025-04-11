<script lang="ts">
	let { icon, placeholder, visOff, name } = $props();

	let toggle = () => {
		visOff = !visOff;
	};

	let input = $state('')

</script>

<div class="background">
	<span class="material-symbols-outlined"> {icon} </span>

	{#if visOff}
		<input class="text-box" type="password" placeholder={placeholder} bind:value={input} {name} required/>
		<button class="visibility one" onclick={toggle}>
			<span class="material-symbols-outlined"> visibility_off </span>
		</button>
	{:else}
		<input class="text-box" type="text" placeholder={placeholder}  bind:value={input} {name} required/>
		<button class="visibility two" onclick={toggle}>
			<span class="material-symbols-outlined"> visibility </span>
		</button>
	{/if}
</div>

<style>
	.background {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;

		background-color: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(12px); /* the blur gives the frosted effect */
		-webkit-backdrop-filter: blur(12px); /* for Safari */
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		padding-left: 8px;
		padding-right: 12px;
		color: var(--light-gray);
	}

	.background:focus-within {
		background-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0px 0px 8px var(--dark-black);
	}

	.material-symbols-outlined {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.text-box {
		all: unset;
		height: 36px;
		width: 100%;
		color: white;
	}
	.text-box::placeholder {
		color: var(--light-gray);
	}

	.visibility {
		all: unset;
		align-self: left;
		cursor: pointer;
		color: var(--light-gray);
	}

	.one:hover {
		color: white;
	}

	.two {
		color: white;
	}
</style>
