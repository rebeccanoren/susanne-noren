<script lang="ts">
	import '../app.css';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';

	import '@fontsource-variable/outfit';

	export let data;

	// Extract `siteTitle`, `background_color`, and `favicon` from `data.settings`

	const siteTitle = data.settings?.data?.siteTitle || 'Default Site Title';
	const backgroundColor = data.settings?.data?.background_color || '#ffffff';
	const faviconUrl = data.settings?.data?.favicon?.url;
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}

	{#if faviconUrl}
		<link rel="icon" href={faviconUrl} type="image/png" />
	{/if}
</svelte:head>
<div class="text-slate-800" style={`background-color: ${backgroundColor}`}>
	<Header navigation={data.navigation} settings={data.settings} />
	<main><slot /></main>
</div>
<PrismicPreview {repositoryName} />
