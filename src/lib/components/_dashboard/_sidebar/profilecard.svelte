<script lang="ts">
	import { faker, fr } from '@faker-js/faker';
	import { copyToClipboard } from '$lib/utils/copyToClipboard';
	import Tooltip from '$lib/components/tooltip.svelte';
	import ModalButton from './_profilecard/modal-button.svelte';
	import ModalDivider from './_profilecard/modal-divider.svelte';

	let showModal = $state(false);
	let mouseX = $state(0);
	let mouseY = $state(0);

	function openModal(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	let copied = $state(false);
	let userId = $state(Math.random().toString(36).substring(2, 15));
</script>

<div class="background">
	<div class="grid">
		<button class="user-image" onclick={openModal}>
			<img src={faker.image.avatarGitHub()} alt="user avatar" />
		</button>
		<div class="user-details">
			<div class="user-name">{faker.internet.displayName()}</div>
			<Tooltip title="Copy to clipboard">
				<button class="user-id" onclick={() => copyToClipboard(userId, copied)}>{userId}</button>
			</Tooltip>
		</div>
	</div>
</div>

{#if showModal}
	<button class="modal" style="top: {mouseY}px; left: {mouseX}px;" onmouseleave={closeModal}>
		<ModalButton action={() => {}} name="Account" icon="account_circle" />
		<ModalButton action={() => {}} name="Logout" icon="logout" />
		<ModalDivider />
		<ModalButton action={() => {}} name="Settings" icon="settings" />
	</button>
{/if}

<style>
	.modal {
		all: unset;
		position: absolute;
		background: var(--dark-gray);
		border-radius: 8px;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.7);
		width: fit-content;
		padding: 8px;
		z-index: 999;
	}
	.grid {
		border-bottom: var(--background-color-2) 1px solid;
		display: flex;
		flex-direction: row;
	}

	.user-image {
		all: unset;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		width: 50px;
		max-width: 50px;
		max-height: 50px;
		border-radius: 50%;
		overflow: hidden;
		margin: 12px;
		object-fit: cover;
	}

	.user-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.user-image:hover {
		cursor: pointer;
		transition: all 0.1s ease-in-out;
		box-shadow: 0px 0px 5px var(--dark-black);
		opacity: 0.5;
	}

	.user-details {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		justify-content: center;
		padding: 8px;
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
