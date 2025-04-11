<script>
    let { error_message } = $props();
</script>

<div class="background">
    <div class="error-message">
        {error_message}
    </div>
</div>
<style>
    .background {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 8px 0 8px 0;

        background-color: rgba(255, 0, 0, 0.1);
    }
</style>