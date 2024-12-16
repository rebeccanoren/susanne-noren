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
		class={`relative px-3 py-2 text-sm font-normal flex w-fit items-center justify-center text-zinc-500 transition-colors duration-200 ease-out rounded-full hover:text-zinc-900 ${
			isActive ? ' text-zinc-950' : ''
		}`}
		{field}
		on:click={onLinkClick}
		aria-current={isActive ? 'page' : undefined}
	>
		<span>{label}</span>
	</PrismicLink>
{:else}
	<PrismicLink
		class={`relative block px-3 py-2 text-lg font-normal text-zinc-500 transition-transform duration-200 ease-out rounded-full hover:text-zinc-900 ${
			isActive ? 'text-zinc-900' : ''
		}`}
		{field}
		on:click={onLinkClick}
		aria-current={isActive ? 'page' : undefined}
	>
		<span>{label}</span>
	</PrismicLink>
{/if}
