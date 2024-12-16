<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import clsx from 'clsx';

	import Bounded from '$lib/components/Bounded.svelte';

	export let slice: Content.ImageSlice;
	export let index: number;
</script>

<Bounded
	tag="section"
	class={clsx('bg-transperant', index === 0 && 'pt-0 md:pt-0')}
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if isFilled.image(slice.primary.image)}
		<div class="bg-transparent text-center pt-8">
			<figure>
				<PrismicImage field={slice.primary.image} sizes="100vw" class="w-full" />
				{#if isFilled.richText(slice.primary.caption)}
					<figcaption class="py-6">
						<PrismicRichText field={slice.primary.caption} />
					</figcaption>
				{/if}
			</figure>
		</div>
	{/if}
</Bounded>
