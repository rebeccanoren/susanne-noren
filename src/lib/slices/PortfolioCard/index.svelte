<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import { PrismicText } from '@prismicio/svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Heading from '$lib/components/Heading.svelte';

	export let slice: Content.PortfolioCardSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#if isFilled.richText(slice.primary.heading)}
		<Heading class="text-center">
			<PrismicText field={slice.primary.heading} />
		</Heading>
	{/if}
	<ul>
		{#each slice.primary.cards as card}
			<li class="grid gap-8">
				{#if isFilled.image(card.image)}
					<div class="bg-gray-100">
						{#if isFilled.link(card.link)}
							<PrismicLink field={card.link} tabindex={-1}>
								<PrismicImage field={card.image} sizes="100vw" class="w-full" />
							</PrismicLink>
						{:else}
							<PrismicImage field={card.image} sizes="100vw" class="w-full" />
						{/if}
					</div>
				{/if}

				<div>
					{#if card.title}
						<h3>{card.title}</h3>
					{/if}

					{#if isFilled.richText(card.description)}
						<PrismicRichText field={card.description} />
					{/if}
				</div>
				<div class="leading-relaxed">
					<p>{card.tag}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
