<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
	<div class="background _404">
		<img class="error-image" src="/images/404-cute!.png" alt="404 Error" />
	</div>

{:else if $page.status === 500}
	<div class="background _500">
		<img class="error-image" src="/images/500.png" alt="500 Error" />
	</div>
{:else}
	<div class="background gen">
		<img class="error-image" src="/images/generic-error.png" alt="500 Error" />
		<p>{$page.status}: {$page.error?.message}</p>
	</div>
{/if}

<style>
	p {
		color: gray;
		text-align: center;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.error-image {
		width: 100%;
		height: auto;
		max-width: 300px;
		margin: 0 auto;
	}

	.background {
		display: flex;
		flex-direction: column;
		background-color: #171a1d;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	._404 {
		background-color: #32312f;
	}
</style>
