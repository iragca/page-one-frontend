<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../$types';
	import { onMount } from 'svelte';
	import { closeSidebar } from '$lib/stores/sidebar';
	import { user } from '$lib/stores/user';

	import Profilecard from '$lib/components/_dashboard/_sidebar/profilecard.svelte';
	import ShelvesCategory from '$lib/components/_dashboard/_sidebar/_shelves/shelves-category.svelte';
	import SideBar from '$lib/components/_dashboard/sidebar.svelte';

	onMount(() => {
		document.title = 'Dashboard | Page One';
	});

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	$user = { ...data };
</script>

<div class="background">
	<div class="grid-container">
		{#if !$closeSidebar}
			<div class="grid-item sidebar">
				<SideBar>
					<Profilecard />
					<ShelvesCategory let:Shelves categoryName="">
						<Shelves let:Shelf>
							<Shelf url="/settings/profile" iconName="person">Public Profile</Shelf>
							<Shelf url="/settings/admin" iconName="manage_accounts">Account</Shelf>
							<Shelf url="/settings/brush" iconName="brush">Appearance</Shelf>
							<Shelf url="/settings/accessibility" iconName="accessibility_new">Accessibility</Shelf>
							<Shelf url="/settings/notifications" iconName="notifications">Notifications</Shelf>
						</Shelves>
					</ShelvesCategory>
					<ShelvesCategory let:Shelves categoryName="Access">
						<Shelves let:Shelf>
							<Shelf url="/settings/billing" iconName="credit_card">Billing</Shelf>
							<Shelf url="/settings/authentication" iconName="encrypted">Authentication</Shelf>
						</Shelves>
					</ShelvesCategory>
				</SideBar>
			</div>
		{/if}
		<div class="grid-item settings">{@render children()}</div>
	</div>
</div>

<style>
	.background {
		height: 100%;
		width: 100%;
		min-height: 100vh;
	}

	.grid-container {
		display: flex;
		height: 100%;
		min-height: 100vh;
	}

	.grid-item {
		position: relative;
		text-align: center;
	}

	.grid-item.sidebar {
		flex: 0 0 250px; /* Fixed width for sidebar */
	}
	.grid-item.settings {
		flex: 1; /* Takes the remaining space */
	}
</style>
