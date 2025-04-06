<script lang="ts">
	import { faker, fr } from '@faker-js/faker';
	import { copyToClipboard } from '$lib/utils/copyToClipboard';
	import Tooltip from '$lib/components/tooltip.svelte';

	let copied = $state(false);
	let userId = $state(Math.random().toString(36).substring(2, 15));
</script>

<div class="background">
	<div class="grid">
		<div class="user-image">
			<img src={faker.image.avatarGitHub()} alt="user avatar" />
		</div>
		<div class="user-details">
			<div class="user-name">{faker.internet.displayName()}</div>
			<Tooltip title="Copy to clipboard">
				<button class="user-id" onclick={() => copyToClipboard(userId, copied)}>{userId}</button>
			</Tooltip>
		</div>
	</div>
</div>

<style>
	.grid {
		border-bottom: var(--background-color-2) 1px solid;
		box-shadow: 0px 0px 5px var(--dark-black);
		display: flex;
		flex-direction: row;
	}

	.user-image {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		width: 50px;
		max-width: 50px;
		max-height: 50px;
		border-radius: 50%;
		overflow: hidden;
		margin: 8px;
		object-fit: cover;
	}

	.user-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.user-image:hover {
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		transform: scale(0.9);
		box-shadow: 0px 0px 5px var(--dark-black);
		opacity: 0.5;
	}

	.user-details {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		justify-content: center;
		padding: 10px;
	}

	.user-name {
		font-weight: 700;
	}

	.user-id {
		all: unset;
		cursor: pointer;
		color: rgb(255, 255, 255, 0.5);
		font-size: 0.7rem;
		font-weight: 400;
	}

	.user-id:hover {
		color: rgb(255, 255, 255, 0.3);
		text-decoration: underline;
	}
</style>
