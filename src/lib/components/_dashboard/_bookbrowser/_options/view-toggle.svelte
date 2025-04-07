<script lang="ts">
    let { toggleView, viewMode } = $props();
</script>

<div class="view-toggle">
    <button class="toggle-button" onclick={toggleView}>
        {viewMode === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
    </button>
</div>