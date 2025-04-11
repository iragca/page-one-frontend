<script>
	import SimpleInputWithIcon from './SimpleInputWithIcon.svelte';
	import PasswordInputWithIcon from './PasswordInputWithIcon.svelte';
	import SimpleButtonWithText from '$lib/components/buttons/SimpleButtonWithText.svelte';
	import SimpleLinkButton from '$lib/components/buttons/SimpleLinkButton.svelte';

	let hidePassword = $state(true);


</script>

<div class="background">
	<div class="top">
		<SimpleInputWithIcon icon="" placeholder="Username" />
		<PasswordInputWithIcon icon="" placeholder="Password" visOff={hidePassword} />
		<PasswordInputWithIcon icon="" placeholder="Confirm Password" visOff={hidePassword} />
	</div>
	<div class="bottom">
		<SimpleLinkButton icon="arrow_back" text="" href="/login" />
		<SimpleButtonWithText icon="person_add" text="Create Account" />
	</div>
</div>

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
