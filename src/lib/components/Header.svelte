<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { isFilled } from '@prismicio/client';
	import NavBarLink from './NavBarLink.svelte';
	import Button from './Button.svelte';

	// Placeholder imports for now (icons replaced with text/emojis)
	// import IconMenu from '~icons/ic/baseline-menu';
	// import IconClose from '~icons/ic/baseline-close';

	export let settings: Content.SettingsDocument;

	let open = false;

	function onLinkClick() {
		open = false; // Close the menu on link click
	}
</script>

<header class="top-0 py-2 z-50 w-full sticky bg-white">
	<div class="max-w-8xl mx-auto flex flex-wrap justify-between gap-x-6 gap-y-3 px-4">
		<!-- Site Title -->
		<a href="/" class="text-l font-semibold tracking-tight px-3 py-2 rounded-full">
			{settings.data.name}
		</a>

		<!-- Navigation -->
		<nav class="flex gap-1">
			<!-- Desktop Navigation -->
			<ul class="hidden md:flex flex-wrap gap-1 md:gap-1">
				{#each settings.data.nav_item as { label, link }}
					<li class="font-small tracking-tight text-slate-60">
						<NavBarLink field={link} {label} type="desktop" {onLinkClick} />
					</li>
				{/each}
			</ul>

			{#if isFilled.link(settings.data.cta_link)}
				<Button linkField={settings.data.cta_link} label={settings.data.cta_label} />
			{/if}

			<!-- Mobile Navigation Button -->
			<button
				aria-expanded={open}
				aria-label="Open Menu"
				class="px-4 text-3xl flex items-center justify-center text-center leading-none text-slate-800 md:hidden rounded-full"
				style="transform: translateY(-0.1em)"
				on:click={() => (open = !open)}
			>
				<!-- Placeholder for IconMenu -->
				{open ? '✖' : '☰'}
			</button>

			<!-- Mobile Navigation -->
			<ul
				class={`fixed inset-0 z-50 flex flex-col items-center gap-4 bg-white/80 backdrop-blur-lg p-2 pt-20 transition-transform duration-300 ease-in-out md:hidden ${
					open ? 'translate-x-0' : 'translate-x-[100%]'
				}`}
			>
				<li>
					<button
						aria-expanded={open}
						aria-label="Close Menu"
						class="absolute right-4 top-4 text-3xl text-slate-800"
						on:click={() => (open = false)}
					>
						<!-- Placeholder for IconClose -->
						✖
					</button>
				</li>
				{#each settings.data.nav_item as { label, link }}
					<li class="text-slate-800 font-semibold tracking-tight">
						<NavBarLink field={link} {label} type="mobile" {onLinkClick} />
					</li>
				{/each}
				{#if isFilled.link(settings.data.cta_link)}
					<li>
						<Button linkField={settings.data.cta_link} label={settings.data.cta_label} />
					</li>
				{/if}
			</ul>
		</nav>
	</div>
</header>
