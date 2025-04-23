<script lang="ts">
	let { text, type = "submit", rounded = false, disabled = false } = $props();

    let options = $state('');
    if (rounded) {
        options += ' rounded';
    }
</script>

<button class="background {options}" {type} {disabled}>
	<div class="text-box">{text}</div>
</button>

<style>
	.background {
        all: unset;
        user-select: none;
        display: flex;
        flex-direction: row;
        
        align-items: center;
        justify-content: center;
        gap: 8px;

		backdrop-filter: blur(12px); /* the blur gives the frosted effect */
		-webkit-backdrop-filter: blur(12px); /* for Safari */
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 255, 255, 0.05);

        width: 100%;
	}

    .background:hover  {
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
    }

    .background:active {
        background-color: rgba(255, 255, 255, 0.4);
		box-shadow: 0px 0px 8px var(--dark-black);
		transition: 0s;
	}

    .background:disabled {
        color: var(--light-gray);
        cursor: not-allowed;
        pointer-events: none;
    }

    .text-box {
        all: unset;
        margin: 8px
    }

    .rounded {
        border-radius: 8px;
    }
</style>
