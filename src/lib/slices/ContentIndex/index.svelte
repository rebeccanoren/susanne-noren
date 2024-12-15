<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import { isFilled, asImageSrc, type Content } from '@prismicio/client';

	export let slice: Content.ContentIndexSlice;
	export let items: Content.CaseDocument[];

	// Map images for all items
	$: contentImages = items.map((item) => {
		return isFilled.image(item.data.portfolio_image) ? asImageSrc(item.data.portfolio_image) : null;
	});
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
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each items as item, index}
			<div class="">
				<!-- Item Image -->
				{#if contentImages[index]}
					<img
						src={contentImages[index]}
						alt={item.data.title || 'Portfolio item'}
						class="mb-4 rounded-lg"
					/>
				{/if}

				<!-- Item Title -->
				<h3 class="text-lg font-semibold text-slate-900">{item.data.title}</h3>

				<!-- Item Tags -->
				{#if item.tags.length > 0}
					<div class="mt-2 flex flex-wrap gap-2">
						{#each item.tags as tag}
							<span class="rounded-full bg-white px-2 py-1 text-sm text-slate-900">
								{tag}
							</span>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</Bounded>
