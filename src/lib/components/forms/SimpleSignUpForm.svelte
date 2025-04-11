<script>
	import SimpleInputWithIcon from './SimpleInputWithIcon.svelte';
	import SimpleButtonWithText from '$lib/components/buttons/SimpleButtonWithText.svelte';
	import SimpleLinkButton from '$lib/components/buttons/SimpleLinkButton.svelte';
	import AuthError from '../errors/AuthError.svelte';

	let { form } = $props();

	let hidePassword = $state(true);
	let iconPass = $derived(hidePassword ? 'visibility' : 'visibility_off');
	let inputType = $derived(hidePassword ? 'password' : 'text');

	//* The following variables are used to bind the input values to the component state. */
	//* This allows us to use the values in the form submission and validation. */
	// This doesn't check if the email is valid though.
	let usernameInput = $state('');
	let emailInput = $state('');
	let passwordInput = $state('');
	let confirmPasswordInput = $state('');

	let differentPass = $derived(passwordInput !== confirmPasswordInput);

	let disableCreateAccount = $derived(
		usernameInput.length > 0 && emailInput.length > 0 && passwordInput.length >= 8 && !differentPass
			? false
			: true
	);

	let toggle = () => {
		hidePassword = !hidePassword;
	};
</script>

<form class="background" method="POST">
	<div class="top">
		{#if differentPass && confirmPasswordInput}
			<AuthError error_message="Passwords do not match" />
		{/if}
		{#if form?.error}
			<AuthError error_message={form.error} />
		{/if}
		<SimpleInputWithIcon icon="" parentComponent={username} />
		<SimpleInputWithIcon icon="" parentComponent={email} />
		<SimpleInputWithIcon icon="" parentComponent={password} />
		<SimpleInputWithIcon icon="" parentComponent={confirm_password} />
	</div>
	<div class="bottom">
		<SimpleLinkButton icon="arrow_back" text="" href="/login" />
		<SimpleButtonWithText
			type="submit"
			icon="person_add"
			text="Create Account"
			disabled={disableCreateAccount}
		/>
	</div>
</form>

{#snippet username()}
	<input
		type="text"
		name="username"
		placeholder="Username"
		class="text-box"
		required
		bind:value={usernameInput}
	/>
{/snippet}

{#snippet email()}
	<input
		type="email"
		name="email"
		placeholder="Email"
		class="text-box"
		required
		bind:value={emailInput}
	/>
{/snippet}

{#snippet password()}
	<input
		type={inputType}
		name="password"
		placeholder="Password"
		class="text-box"
		required
		minlength="8"
		bind:value={passwordInput}
	/>
	<button type="button" class="visibility two" onclick={toggle} tabindex="-1">
		<span class="material-symbols-outlined"> {iconPass} </span>
	</button>
{/snippet}

{#snippet confirm_password()}
	<input
		type={inputType}
		placeholder="Confirm Password"
		class="text-box"
		required
		minlength="8"
		bind:value={confirmPasswordInput}
	/>
{/snippet}

<style>
	.background {
		display: flex;
		flex-direction: column;
		gap: 8px;
		height: 100%;
	}

	.top {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
	}

	.bottom {
		display: flex;
		flex-direction: row;
		gap: 8px;
		width: 100%;
	}

	.text-box {
		all: unset;
		height: 36px;
		width: 100%;
	}

	.text-box:user-invalid {
		border: 1px solid var(--red);
	}
	.text-box::placeholder {
		color: var(--light-gray);
	}

	.visibility {
		all: unset;
		display: flex;
		align-self: left;
		cursor: pointer;
		color: var(--light-gray);
		padding-right: 12px;
	}
</style>
