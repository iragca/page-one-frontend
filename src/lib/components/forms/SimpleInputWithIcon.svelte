<script lang="ts">
	let { icon, parentComponent } = $props();
</script>

<div class="background">
	<span class="material-symbols-outlined"> {icon} </span>
	{@render parentComponent()}
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
        border-radius: 4px;

	}

    .background:focus-within {
		background-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0px 0px 8px var(--dark-black);
	}

    .material-symbols-outlined {
        color: var(--light-gray);
    }
</style>
