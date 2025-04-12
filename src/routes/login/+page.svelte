<script lang="ts">
	import SimpleLoginForm from '$lib/components/forms/SimpleLoginForm.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	onMount(() => {
		document.title = 'Login | Page One';
	});

	let { data, form }: { data: PageData; form: any } = $props();
</script>

<div class="background">
	<div class="grid">
		<div class="grid-item login">
			<div class="container">
				<div class="logo">
					<img src="/images/asset-pack/page-one-256.png" alt="page-one logo" class="image" />
					<div class="title">Page One</div>
				</div>
				<div class="form">
					<SimpleLoginForm {form} />
				</div>
				<div class="footer">Page One © 2025 - All Rights Reserved</div>
			</div>
		</div>
		<div class="grid-item hero"></div>
	</div>
</div>

<style>
	.background {
		min-height: 100vh;
	}
	.grid {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: stretch;
		height: 100%;
	}

	.grid-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		min-height: 100vh;
	}

	.login {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 40%;
		gap: 8px;
		background-color: rgb(31, 31, 31, 0.5);
		backdrop-filter: blur(12px); /* the blur gives the frosted effect */
		-webkit-backdrop-filter: blur(12px); /* for Safari */
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 80%;
		max-width: 320px;
		gap: 64px;
	}

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 32px;
	}

	.image {
		width: 100%;
		height: auto;
		max-width: 80px;
		max-height: 80px;
	}

	.title {
		font-size: 3em;
		font-weight: bold;
		color: var(--light-gray);
	}

	.form {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: fit-content;
	}

	.footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 8px;
		color: var(--light-gray);
	}
</style>
