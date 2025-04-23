<script lang="ts">
	import type { PageData } from './$types';
	import ModalDivider from '$lib/components/_dashboard/_sidebar/_profilecard/modal-divider.svelte';
	import ButtonWithTextOnly from '$lib/components/buttons/ButtonWithTextOnly.svelte';
	import InputWithTextOnly from '$lib/components/forms/InputWithTextOnly.svelte';
	import AuthError from '$lib/components/errors/AuthError.svelte';

	let { data, form }: { data: PageData; form: any } = $props();

	let oldpass = $state('');
	let newpass = $state('');
	let confirmpass = $state('');

	let disableLogin = $derived(newpass.length > 0 && confirmpass.length >= 8 ? false : true);
	let differentPass = $derived(confirmpass !== newpass);
</script>

<div class="background">
	<div class="content-container">
		<div class="form-container">
			<h1 class="form-header">Password</h1>
			<span>Update your current password</span>
			<ModalDivider />
			<form method="POST" class="form">
				<div class="error-container">
					{@render errors()}
				</div>
				<input type="hidden" name="username" value={data.username} />
				<div class="field">
					<label for="old-password">Old Password</label>
					<InputWithTextOnly rounded glass dark dark_border>
						{#snippet children()}
							<input
								type="password"
								id="old-password"
								name="old-password"
								bind:value={oldpass}
								required
							/>
						{/snippet}
					</InputWithTextOnly>
				</div>
				<div class="field">
					<label for="new-password">New Password</label>
					<InputWithTextOnly rounded glass dark dark_border>
						{#snippet children()}
							<input
								type="password"
								id="new-password"
								name="new-password"
								bind:value={newpass}
								required
							/>
						{/snippet}
					</InputWithTextOnly>
				</div>
				<div class="field">
					<label for="confirm-password">Confirm Password</label>
					<InputWithTextOnly rounded glass dark dark_border>
						{#snippet children()}
							<input
								type="password"
								id="confirm-password"
								name="confirm-password"
								bind:value={confirmpass}
								required
							/>
						{/snippet}
					</InputWithTextOnly>
				</div>
				<ButtonWithTextOnly text="Update Password" rounded disabled={differentPass || disableLogin} />
			</form>
		</div>
	</div>
</div>

{#snippet errors()}
	{#if differentPass && confirmpass}
		<AuthError error_message="Passwords do not match" />
	{/if}
	{#if disableLogin && newpass}
		<AuthError error_message="Password must be at least 8 characters" />
	{/if}
	{#if form?.error}
		<AuthError error_message={form.error} />
	{/if}
{/snippet}

<style>
	.background {
		display: block;
		justify-content: center;
		align-items: left;
		max-height: fit-content;
		height: 100%;
		max-width: 100%;
		padding: 4rem 4rem 0 4rem;
	}

	.content-container {
		display: flex;
		max-height: fit-content;
		width: 100%;
	}

	.form-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		gap: 1rem;
	}

	.error-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: 100%;
		gap: 8px;
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;

		width: 16rem;
	}

	h1 {
		margin: 0;
	}

	input {
		all: unset;
		margin: 8px;
		width: 100%;
	}

	.field {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		gap: 4px;
	}
</style>
