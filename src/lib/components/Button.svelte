<script lang="ts">
	import { type KeyTextField, type LinkField } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';

	// import IconArrow from '~icons/ic/baseline-arrow-outward';

	export let linkField: LinkField;
	export let label: KeyTextField;
	export let showIcon: boolean = true;
	let className: string = '';
	export { className as class };
</script>

<PrismicLink
	field={linkField}
	class={`group text-white text-sm font-normal relative flex items-center justify-center overflow-hidden rounded-full bg-fuchsia-900 px-4 py-2 transition-transform ease-out hover:scale-105 ${className}`}
>
	<span
		class="absolute inset-0 z-0 h-full bg-gradient-to-r from-fuchsia-300 via-fuchsia-500 to-fuchsia-700 transition-transform duration-300 ease-in-out translate-y-20 group-hover:translate-y-0"
	></span>
	<span class="relative flex items-center gap-2">{label}</span>
</PrismicLink>
