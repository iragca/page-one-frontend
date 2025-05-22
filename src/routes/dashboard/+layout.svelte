<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../$types';
	import { onMount } from 'svelte';
	import { closeSidebar } from '$lib/stores/sidebar';
	import { user } from '$lib/stores/user';
	import { userRole } from '$lib/stores/dashboard';

	import Profilecard from '$lib/components/_dashboard/_sidebar/profilecard.svelte';
	import ShelvesCategory from '$lib/components/_dashboard/_sidebar/_shelves/shelves-category.svelte';
	import SideBar from '$lib/components/_dashboard/sidebar.svelte';

	onMount(() => {
		document.title = 'Dashboard | Page One';
	});

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	$user = { username: data.username, profile_picture: data.profile_picture };
	$userRole = data.role || 'user';
</script>

<div class="background">
	<div class="grid-container">
		{#if !$closeSidebar}
			<div class="grid-item sidebar">
				<SideBar>
					<Profilecard />
					<ShelvesCategory let:Shelves categoryName="Library">
						<Shelves let:Shelf>
							<Shelf url="/dashboard" iconName="menu_book">Catalog</Shelf>
							<Shelf url="/dashboard/my-books" iconName="bookmark">My Books</Shelf>
						</Shelves>
					</ShelvesCategory>
					<ShelvesCategory let:Shelves categoryName="Settings">
						<Shelves let:Shelf>
							<Shelf url="/settings/profile" iconName="person">Profile</Shelf>
							<Shelf url="/settings/authentication" iconName="encrypted">Authentication</Shelf>
						</Shelves>
					</ShelvesCategory>
				</SideBar>
			</div>
		{/if}
		<div class="grid-item dashboard">
			<slot />
		</div>
	</div>
</div>

<style>
	.background {
		display: flex;
		justify-content: center;
		align-items: start;
		height: 100vh;
		width: 100%;
	}

	.grid-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: stretch;
		height: 100%;
		width: 100%;
	}

	.grid-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		height: 100%;
	}

	.sidebar {
		width: 300px;
		background-color: var(--background-color-1);
	}

	.dashboard {
		width: 100%;
	}
</style>
