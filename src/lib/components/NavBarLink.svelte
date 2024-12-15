<script lang="ts">
	import { page } from '$app/stores';
	import { asLink, type KeyTextField, type LinkField } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';

	export let field: LinkField;
	export let label: KeyTextField;
	export let onLinkClick: (event: MouseEvent) => void;
	export let type: 'desktop' | 'mobile';

	const path = asLink(field);
	$: isActive = path && $page.url.pathname.includes(path);
</script>

{#if type === 'desktop'}
	<PrismicLink
		class={`group relative block overflow-hidden rounded-full px-4 py-2 text-base font-semibold text-slate-900 bg-white transition-transform duration-200 ease-out hover:scale-105 ${
			isActive ? 'bg-fuchsia-600' : ''
		}`}
		{field}
		on:click={onLinkClick}
		aria-current={isActive ? 'page' : undefined}
	>
		<!-- Hover Effect Background -->
		<span
			class={`absolute inset-0 z-0 h-full bg-gradient-to-r from-fuchsia-200 via-fuchsia-300 to-fuchsia-500 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${
				isActive ? 'translate-y-0' : 'translate-y-full'
			}`}
		></span>

		<!-- Button Label -->
		<span class="relative z-10">{label}</span>
	</PrismicLink>
{:else}
	<PrismicLink
		class={`group relative block overflow-hidden rounded-full px-4 py-2 text-3xl font-semibold text-slate-900 bg-white transition-transform duration-200 ease-out hover:scale-105 ${
			isActive ? 'border-b-2 border-fuchsia-600' : ''
		}`}
		{field}
		on:click={onLinkClick}
		aria-current={isActive ? 'page' : undefined}
	>
		<!-- Hover Effect Background -->
		<span
			class={`absolute inset-0 z-0 h-full bg-gradient-to-r from-fuchsia-100 via-fuchsia-300 to-fuchsia-500 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${
				isActive ? 'translate-y-0' : 'translate-y-full'
			}`}
		></span>

		<!-- Button Label -->
		<span class="relative z-10">{label}</span>
	</PrismicLink>
{/if}
