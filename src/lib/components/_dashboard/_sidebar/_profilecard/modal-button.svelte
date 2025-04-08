<script lang="ts">
	let { action, name, icon } = $props();
</script>

<button class="button">
	<div class="icon">
		<span class="material-symbols-outlined">{icon}</span>
	</div>
	<div class="name">
		{name}
    </div>
</button>

<style>

    .button {
        all: unset;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
		padding: 0.8rem 0.8rem;
		border-radius: 4px;
		cursor: pointer;
        /* Setting the width: 100% causes it to overflow, 
        and go out of bounds, idk why man someone fix this.
        */
        width: 100px;
        gap: 24px;

    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon span {
        font-size: 20px;
    }

	.button:hover {
		background-color: var(--dark-black);
	}
</style>
