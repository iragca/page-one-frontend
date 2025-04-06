<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
</script>

<div class="background">
	<img class="error-image" src="/images/500.png" alt="500 Error" />
    <p>{$page.status}: {$page.error?.message}</p>
</div>

<style>
	p {
		color: gray;
		text-align: center;
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
</style>
