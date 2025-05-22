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
	let usernameInput = $state(form?.data?.username || '');
	let emailInput = $state(form?.data?.email || '');
	let passwordInput = $state(form?.data?.password || '');
	let confirmPasswordInput = $state(form?.data?.confirmPassword || '');

	let differentPass = $derived(passwordInput !== confirmPasswordInput);

	let passwordValidations = {
		get length() { return passwordInput.length >= 8; },
		get uppercase() { return /[A-Z]/.test(passwordInput); },
		get number() { return /[0-9]/.test(passwordInput); },
		get special() { return /[^A-Za-z0-9]/.test(passwordInput); }
	};

	let allPasswordValid = $derived(
		passwordValidations.length && passwordValidations.uppercase && passwordValidations.number && passwordValidations.special
	);

	let disableCreateAccount = $derived(
		usernameInput.length > 0 && emailInput.length > 0 && allPasswordValid && !differentPass
			? false
			: true
	);

	let invalidEmail = $derived(emailInput.length > 0 && !emailInput.includes('@'));

	let toggle = () => {
		hidePassword = !hidePassword;
	}

	$effect(() => {
		if (form?.data) {
			if (form.data.username !== undefined) usernameInput = form.data.username;
			if (form.data.email !== undefined) emailInput = form.data.email;
			if (form.data.password !== undefined) passwordInput = form.data.password;
			if (form.data.confirmPassword !== undefined) confirmPasswordInput = form.data.confirmPassword;
		}
	});
</script>

<form class="background" method="POST">
	<div class="top">
		{#if form?.error}
			<AuthError error_message={form.error} />
		{/if}
		<SimpleInputWithIcon icon="" parentComponent={username} />
		<SimpleInputWithIcon icon="" parentComponent={email} />
		{#if invalidEmail}
			<div class="email-error-message">
				<AuthError error_message="Please double-check and enter a valid email address." />
			</div>
		{/if}
		<SimpleInputWithIcon icon="" parentComponent={password} />
		{#if passwordInput && !allPasswordValid}
			<div class="password-requirements">
				<div>
					<span class="material-symbols-outlined" style="color: {passwordValidations.length ? 'green' : 'red'}">{passwordValidations.length ? 'check_circle' : 'cancel'}</span>
					Password must be at least 8 characters
				</div>
				<div>
					<span class="material-symbols-outlined" style="color: {passwordValidations.uppercase ? 'green' : 'red'}">{passwordValidations.uppercase ? 'check_circle' : 'cancel'}</span>
					At least one uppercase letter
				</div>
				<div>
					<span class="material-symbols-outlined" style="color: {passwordValidations.number ? 'green' : 'red'}">{passwordValidations.number ? 'check_circle' : 'cancel'}</span>
					At least one number
				</div>
				<div>
					<span class="material-symbols-outlined" style="color: {passwordValidations.special ? 'green' : 'red'}">{passwordValidations.special ? 'check_circle' : 'cancel'}</span>
					At least one special character
				</div>
			</div>
		{/if}
		<SimpleInputWithIcon icon="" parentComponent={confirm_password} />
		{#if differentPass && confirmPasswordInput}
			<AuthError error_message="Passwords do not match" />
		{/if}
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

	.password-requirements {
		display: flex;
		flex-direction: column;
		gap: 2px;
		margin-top: 4px;
		margin-bottom: 8px;
		font-size: 13px;
		width: 100%;
		background: none;
		color: white;
	}
	.password-requirements .material-symbols-outlined {
		vertical-align: middle;
		margin-right: 4px;
		font-size: 18px;
	}

	.email-error-message {
		margin-top: 8px;
	}
</style>