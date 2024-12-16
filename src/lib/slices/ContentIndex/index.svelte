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

	console.log(items);
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
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
		{#each items as item, index}
			<div class="relative transition-transform eas-out hover:scale-105">
				<!-- Image with Tags -->
				{#if contentImages[index]}
					<div class="relative group rounded-xl overflow-hidden">
						<img
							src={contentImages[index]}
							alt={item.data.title || 'Portfolio item'}
							class="w-full h-72 object-cover"
						/>
						<!-- Tags Overlay -->
						{#if item.tags.length > 0}
							<div
								class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
							>
								<div class="absolute bottom-3 left-2 flex flex-wrap gap-1">
									{#each item.tags as tag}
										<span
											class="rounded-full bg-white bg-opacity-100 px-2 py-1 text-xs font-medium text-slate-900"
										>
											{tag}
										</span>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				{/if}

				<!-- Item Title -->
				<div class="p-4">
					<h3 class="text-lg font-semibold text-slate-900">{item.data.title}</h3>
					<PrismicRichText field={item.data.intro} />
				</div>
			</div>
		{/each}
	</div>
</Bounded>
