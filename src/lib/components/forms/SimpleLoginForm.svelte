<script>
    import SimpleInputWithIcon from "./SimpleInputWithIcon.svelte";
    import SimpleButtonWithText from "$lib/components/buttons/SimpleButtonWithText.svelte";
    import SimpleLinkButton from "$lib/components/buttons/SimpleLinkButton.svelte";
</script>

<div class="background">
    <div class="top">
        <SimpleInputWithIcon icon="person" placeholder="Username"/>
        <SimpleInputWithIcon icon="key" placeholder="Password" type="password"/>
    </div>
    <div class="bottom">
        <SimpleLinkButton icon="person_add" text="Signup" href="/signup" />
        <SimpleButtonWithText icon="login" text="Login" />
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