<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let slice: Content.PortfolioCardSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h2>{slice.primary.heading}</h2>
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
				<div class="leading-relaxed">
					<p>{card.tag}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
