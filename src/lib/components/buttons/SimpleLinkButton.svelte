<script lang="ts">
	let { icon, text, href }: { icon: string; text: string, href: string } = $props();
</script>

<a href={href} class="background">
	<span class="material-symbols-outlined"> {icon} </span>
	<div class="text-box">{text}</div>
</a>

<style>
	.background {
		all: unset;
		user-select: none;
        cursor: pointer;
		display: flex;
		flex-direction: row;

		align-items: center;
		justify-content: flex-start;
		gap: 8px;

		backdrop-filter: blur(12px); /* the blur gives the frosted effect */
		-webkit-backdrop-filter: blur(12px); /* for Safari */
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		padding: 8px;

		width: 100%;
	}

	.background:hover {
		background-color: rgba(255, 255, 255, 0.1);
		color: white;
	}

	.background:active {
		background-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0px 0px 8px var(--dark-black);
		transition: 0s;
	}

	.material-symbols-outlined {
		cursor: pointer;
	}

	.text-box {
		all: unset;
	}
</style>
