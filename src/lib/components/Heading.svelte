<script lang="ts">
	import clsx from 'clsx';

	export let tag = 'h1';
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'lg';
</script>

<svelte:element
	this={tag}
	class={clsx(
		'font-semibold leading-tight tracking-tight md:leading-tight',
		size === 'xl' && 'text-4xl md:text-5xl',
		size === 'lg' && 'text-3xl md:text-4xl',
		size === 'md' && 'text-2xl md:text-3xl',
		size === 'sm' && 'text-xl md:text-2xl',
		$$props.class
	)}
>
	<slot />
</svelte:element>
