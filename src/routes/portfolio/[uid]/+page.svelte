<script lang="ts">
	// Import the type for the PageServerLoad function
	import type { PageServerLoad } from './$types';

	// Import necessary components and libraries
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';

	// Import the page store for reactive data (if needed)
	import { page } from '$app/stores';

	// Declare the data prop and ensure it is typed correctly
	export let data: {
		page: {
			data: {
				title: string;
				slices: any[];
			};
			tags: string[];
		};
	};
</script>

<Bounded tag="portfolio-item">
	<!-- SliceZone rendering -->
	<div class="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
		<!-- Page title -->
		<div class="px-6">
			<Heading tag="h1">{data.page.data.title || 'Untitled'}</Heading>

			<!-- Tags section -->
			<div class="py-4 flex gap-1 md:gap-2 text-slate-900">
				{#if data.page.tags && data.page.tags.length > 0}
					{#each data.page.tags as tag}
						<span
							class="text-xs md:text-sm bg-white bg-opacity-60 px-3 py-1 rounded-2xl whitespace-nowrap"
							>{tag}</span
						>
					{/each}
				{:else}
					<span class="text-gray-500 italic">No tags available</span>
				{/if}
			</div>
		</div>
		<SliceZone slices={data.page.data.slices} {components} context={{ someCustomContext: true }} />
	</div>
</Bounded>
