<script>
	import SimpleInputWithIcon from './SimpleInputWithIcon.svelte';
	import PasswordInputWithIcon from './PasswordInputWithIcon.svelte';
	import SimpleButtonWithText from '$lib/components/buttons/SimpleButtonWithText.svelte';
	import SimpleLinkButton from '$lib/components/buttons/SimpleLinkButton.svelte';

	let hidePassword = $state(true);


</script>

<form class="background" method="POST">
	<div class="top">
		<SimpleInputWithIcon icon="" placeholder="Username" name="username"/>
		<SimpleInputWithIcon icon="" placeholder="Email" name="email"/>
		<PasswordInputWithIcon icon="" placeholder="Password" visOff={hidePassword} name="password"/>
		<PasswordInputWithIcon icon="" placeholder="Confirm Password" visOff={hidePassword} name="confirm_password"/>
	</div>
	<div class="bottom">
		<SimpleLinkButton icon="arrow_back" text="" href="/login" />
		<SimpleButtonWithText type="submit" icon="person_add" text="Create Account" />
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
