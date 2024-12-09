<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	import Heading from './Heading.svelte';

	export let slice: Content.HeroSlice;

	// Determine the background and text classes based on the variation
	const backgroundClass =
		slice.variation === 'transparentBackground'
			? 'bg-transparent text-slate-900'
			: 'bg-slate-900 text-white';
</script>

<section
	class={`relative ${backgroundClass}`}
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if isFilled.image(slice.primary.backgroundImage) && slice.variation !== 'transparentBackground'}
		<PrismicImage
			field={slice.primary.backgroundImage}
			alt=""
			class="absolute inset-0 h-full w-full pointer-events-none select-none object-cover opacity-40"
		/>
	{/if}
	<Bounded tag="div" yPadding="lg" class="relative">
		<div class="gap-8">
			<div class="max-w-5xl py-8">
				<PrismicRichText
					field={slice.primary.text}
					components={{
						heading1: Heading
					}}
				/>
			</div>
			{#if isFilled.link(slice.primary.buttonLink)}
				<PrismicLink
					field={slice.primary.buttonLink}
					class={`rounded px-5 py-3 font-medium ${
						slice.variation === 'transparentBackground'
							? 'bg-black text-white'
							: 'bg-transparent text-slate-800'
					} self-start`}
				>
					{slice.primary.buttonText || 'Learn More'}
				</PrismicLink>
			{/if}
		</div>
	</Bounded>
</section>
