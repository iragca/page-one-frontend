<script lang="ts">
    import SideBar from '$lib/components/sidebar.svelte';
</script>


<div class="grid-container">
    <div class="grid-item"><SideBar /></div>
    <div class="grid-item"></div>
</div>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: 2fr 5fr;
        height: 100vh;
    }

    .grid-item {
        background-color: var(--background-color);
        padding: 20px;
        text-align: center;
        color: white;
        border: 1px solid var(--icon-color);
    }
    
</style>