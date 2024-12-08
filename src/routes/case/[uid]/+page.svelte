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
	<div class="rounded-2xl border-2">
		<!-- Page title -->
		<Heading tag="h1">{data.page.data.title || 'Untitled'}</Heading>

		<!-- Tags section -->
		<div class="flex gap-4 text-slate-900">
			{#if data.page.tags && data.page.tags.length > 0}
				{#each data.page.tags as tag}
					<span class="text-l font-bold">{tag}</span>
				{/each}
			{:else}
				<span class="text-gray-500 italic">No tags available</span>
			{/if}
		</div>

		<!-- SliceZone rendering -->
		<div class="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
			<SliceZone
				slices={data.page.data.slices}
				{components}
				context={{ someCustomContext: true }}
			/>
		</div>
	</div>
</Bounded>
