<script>
	import SimpleInputWithIcon from './SimpleInputWithIcon.svelte';
	import SimpleButtonWithText from '$lib/components/buttons/SimpleButtonWithText.svelte';
	import SimpleLinkButton from '$lib/components/buttons/SimpleLinkButton.svelte';
	import AuthError from '../errors/AuthError.svelte';

	let hidePassword = $state(true);
	let iconPass = $derived(hidePassword ? 'visibility' : 'visibility_off');
	let inputType = $derived(hidePassword ? 'password' : 'text');
	let toggle = () => {
		hidePassword = !hidePassword;
	};

	let { form } = $props();
</script>

<form class="background" method="POST">
	<div class="top">
		{#if form?.error}
			<AuthError error_message={form.error} />
		{/if}
		<SimpleInputWithIcon icon="" parentComponent={username} />
		<SimpleInputWithIcon icon="" parentComponent={password} />
	</div>
	<div class="bottom">
		<SimpleLinkButton icon="person_add" text="Signup" href="/signup" />
		<SimpleButtonWithText icon="login" text="Login" type="submit" />
	</div>
</form>

{#snippet username()}
	<input type="text" name="username" placeholder="Username" class="text-box" required />
{/snippet}

{#snippet password()}
	<input
		type={inputType}
		name="password"
		placeholder="Password"
		class="text-box"
		required
		minlength="8"
	/>
	<button type="button" class="visibility two" onclick={toggle}>
		<span class="material-symbols-outlined"> {iconPass} </span>
	</button>
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
