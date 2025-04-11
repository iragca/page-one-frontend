<script>
	import SimpleInputWithIcon from './SimpleInputWithIcon.svelte';
	import SimpleButtonWithText from '$lib/components/buttons/SimpleButtonWithText.svelte';
	import SimpleLinkButton from '$lib/components/buttons/SimpleLinkButton.svelte';
	import PasswordInputWithIcon from './PasswordInputWithIcon.svelte';
    import LoginError from '../errors/LoginError.svelte';

	let hidePassword = $state(true);

    let { form } = $props();

</script>

<form class="background" method="POST">
	<div class="top">
        {#if form?.error}
            <LoginError error_message={form.error} />
        {/if}
		<SimpleInputWithIcon icon="person" placeholder="Username" name="username" />
		<PasswordInputWithIcon icon="key" placeholder="Password" visOff={hidePassword} name="password" />
	</div>
	<div class="bottom">
		<SimpleLinkButton icon="person_add" text="Signup" href="/signup" />
		<SimpleButtonWithText icon="login" text="Login" type="submit" />
	</div>
</form>

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
</style>
