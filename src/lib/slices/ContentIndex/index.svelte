<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import { isFilled, asImageSrc, type Content } from '@prismicio/client';

	export let slice: Content.ContentIndexSlice;
	export let items: Content.CaseDocument[] = [];
	console.log('Fetched items:', items);

	// Map images for all items
	$: contentImages = items.map((item) => {
		return isFilled.image(item.data.portfolio_image) ? asImageSrc(item.data.portfolio_image) : null;
	});

	if (items.length === 0) {
		console.log('No cases are being passed');
	}
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<!-- Section Title -->
	<Heading size="lg" class="mb-8">
		{slice.primary.title}
	</Heading>

	<!-- Section Description -->
	{#if isFilled.richText(slice.primary.description)}
		<div class="prose prose-x prose-invert mb-10">
			<PrismicRichText field={slice.primary.description}></PrismicRichText>
		</div>
	{/if}

	<!-- Items List -->
	{#if items.length > 0}
		<div class="grid grid-cols-1 gap-16 sm:grid-cols-1 lg:grid-cols-2">
			{#each items as item, index}
				<a
					href={item.url || '#'}
					class="group block relative rounded-xl overflow-hidden transition-transform"
				>
					<!-- Image -->
					{#if contentImages[index]}
						<div class="relative rounded-xl overflow-hidden">
							<img
								src={contentImages[index]}
								alt={item.data.title || 'Portfolio item'}
								class="w-full h-72 object-cover transition-transform ease-out group-hover:scale-110"
							/>
						</div>
					{/if}

					<!-- Item Title and Content -->
					<div class="py-4">
						<h3
							class="text-xl font-semibold text-slate-900 transition-all group-hover:underline group-active:underline"
						>
							{item.data.title}
						</h3>
						<PrismicRichText field={item.data.intro} />
					</div>

					<!-- Tags -->
					{#if item.tags.length > 0}
						<div class="flex flex-wrap gap-1 mt-2">
							{#each item.tags as tag}
								<span
									class="rounded-full bg-white bg-opacity-100 px-2 py-1 text-xs font-medium text-slate-900"
								>
									{tag}
								</span>
							{/each}
						</div>
					{/if}
				</a>
			{/each}
		</div>
	{/if}
</Bounded>
