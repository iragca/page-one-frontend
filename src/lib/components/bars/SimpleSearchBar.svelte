<script lang="ts">
	import {books} from '$lib/stores/dashboard';
	import {searchQuery, searchResults} from '$lib/stores/search';
	import {createSearchIndex, searchBooks} from '$lib/client/searchService';
	import {onMount} from 'svelte';

	let searchIndex: any;

	onMount(() => {
		searchIndex = createSearchIndex($books);

		books.subscribe(newBooks => {
			searchIndex = createSearchIndex(newBooks);
		});
	});

	function handleSearch(event: Event) {
        const query = (event.target as HTMLInputElement).value;
        searchQuery.set(query);
        
        if (!query.trim()) {
            searchResults.set([]);
            return;
        }

        const results = searchBooks(searchIndex, query);
		searchResults.set(results.map(result => ({
			...result.item,
			score: result.score
		})));
		
	}
</script>

<div class="search-bar">
    <span class="material-symbols-outlined search">search</span>
    <input 
        class="text-box" 
        type="text" 
        placeholder="Search..." 
        on:input={handleSearch}
        bind:value={$searchQuery}
    />
    <div class="icon">
        <span class="material-symbols-outlined option">manage_search</span>
    </div>
</div>

<style>
	.search-bar {
		pointer-events: visibleFill;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		padding-left: 8px;
		padding-right: 8px;
		align-items: center;
		display: flex;
		width: 64vw;
		max-width: 400px;
		height: 42px;
		gap: 8px;
		backdrop-filter: blur(4px); 
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
	}

	.search-bar:hover {
		background-color: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(12px);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	}

	.search-bar:focus-within {
		background-color: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(12px);
		box-shadow: 0px 0px 8px var(--dark-black);
	}

	.text-box {
		all: unset;
		color: var(--dark-black);
		border-radius: 8px;
		outline: none;
		width: 100%;
		height: 100%;
		text-align: left;
		color: white;
		font-weight: bold;
		font-size: medium;
	}

	.text-box::placeholder {
		color: var(--light-gray);
	}
	.material-symbols-outlined.search {
		color: var(--icon-color);
		cursor: pointer;
	}

	.option {
		color: var(--light-gray);
		cursor: pointer;
	}
</style>
