<div class="background">
	<slot />
</div>

<style>
	.background {
		position: absolute;
		background: var(--dark-gray);
		border-radius: 8px;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.7);
		width: fit-content;
		padding: 8px;
		z-index: 8;
	}
</style>
