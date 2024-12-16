<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data; // Prismic page data
</script>

<!-- Render the SliceZone with slices and components -->
<SliceZone slices={data.slices} {components} />
