<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Bounded from '$lib/components/Bounded.svelte';

	export let slice: Content.PortfolioCardSlice;
</script>

<Bounded>
	<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="py-16">
		{#if isFilled.richText(slice.primary.heading)}
			<Heading size="lg" class="mb-8">
				<PrismicRichText field={slice.primary.heading} />
			</Heading>
		{/if}

		<ul class="grid grid-cols-1 gap-12 md:grid-cols-1 lg:grid-cols-1">
			{#each slice.primary.cards as card}
				<li class="group relative">
					{#if isFilled.link(card.link)}
						<PrismicLink
							field={card.link}
							class="group block relative overflow-hidden transition-transform"
						>
							<div class="flex flex-col md:flex-row gap-6 overflow-hidden">
								{#if isFilled.image(card.image)}
									<div class="w-full md:w-1/2 overflow-hidden rounded-xl">
										<PrismicImage
											field={card.image}
											sizes="100vw"
											class="w-full h-72 object-cover transition-transform ease-out group-hover:scale-110"
											style="background-color: {card.background_color || '#ffffff'}"
										/>
									</div>
								{/if}

								<div class="w-full md:w-1/2 p-6 flex flex-col justify-center items-start">
									{#if card.title}
										<h3
											class="text-xl font-semibold text-slate-900 transition-all group-hover:underline group-hover:text-slate-700"
										>
											{card.title}
										</h3>
									{/if}

									{#if isFilled.richText(card.description)}
										<PrismicRichText field={card.description} />
									{/if}

									{#if card.tag}
										<span
											class="inline-block bg-slate-50 text-gray-800 text-sm font-medium px-3 py-1 rounded-full transition-transform"
										>
											{card.tag}
										</span>
									{/if}
								</div>
							</div>
						</PrismicLink>
					{:else}
						<div class="flex flex-col md:flex-row gap-6 overflow-hidden">
							{#if isFilled.image(card.image)}
								<div class="w-full md:w-1/2">
									<PrismicImage
										field={card.image}
										sizes="100vw"
										class="w-full rounded-xl bg-slate-50"
									/>
								</div>
							{/if}

							<div class="w-full md:w-1/2 p-6">
								{#if card.title}
									<h3 class="text-xl font-semibold mb-4">{card.title}</h3>
								{/if}

								{#if isFilled.richText(card.description)}
									<PrismicRichText field={card.description} />
								{/if}

								{#if card.tag}
									<span
										class="inline-block bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
									>
										{card.tag}
									</span>
								{/if}
							</div>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
</Bounded>
