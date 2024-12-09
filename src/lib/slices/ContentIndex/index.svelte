<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import { isFilled, type Content } from '@prismicio/client';

	export let slice: Content.ContentIndexSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Heading size="lg" class="mb-8">
		{slice.primary.title}
	</Heading>
	{#if isFilled.richText(slice.primary.description)}
		<div class="prose prose-x prose-invert mb-10">
			<PrismicRichText field={slice.primary.description}></PrismicRichText>
		</div>
	{/if}
</Bounded>
