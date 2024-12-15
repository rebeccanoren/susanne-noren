<script lang="ts">
	import clsx from 'clsx';

	export let tag = 'section';
	export let yPadding: 'sm' | 'base' | 'lg' = 'base';
	export let collapsible = true;
</script>

<svelte:element
	this={tag}
	data-collapsible={collapsible}
	{...$$restProps}
	class={clsx(
		'px-6',
		yPadding === 'sm' && 'py-8 md:py-10',
		yPadding === 'base' && 'py-16 md:py-16',
		yPadding === 'lg' && 'py-16 md:py-32',
		$$props.class
	)}
>
	<div class="mx-auto w-full max-w-4xl"><slot /></div>
</svelte:element>
