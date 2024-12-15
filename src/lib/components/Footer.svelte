<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { asLink } from '@prismicio/helpers';

	export let settings: Content.SettingsDocument;
</script>

<footer
	class="bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-900
 text-white py-8"
>
	<div class="container mx-auto flex flex-col items-center gap-4">
		<!-- Name -->
		<div class="text-xl font-semibold tracking-tight">
			<a
				href="/"
				aria-label="Homepage"
				class="hover:text-yellow-400 transition-colors duration-150"
			>
				{settings.data.name}
			</a>
		</div>

		<!-- Navigation Links -->
		<nav>
			<ul class="flex flex-wrap justify-center gap-6">
				{#each settings.data.nav_item as { link, label }}
					{#if asLink(link)}
						<li>
							<a
								href={asLink(link)}
								aria-label={label}
								class="font-semibold hover:text-yellow-400 transition-colors duration-150"
							>
								{label}
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</nav>

		<!-- Optional LinkedIn Link -->
		{#if asLink(settings.data.linkedin_link)}
			<div>
				<a
					href={asLink(settings.data.linkedin_link)}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn Profile"
					class="font-medium underline hover:text-yellow-400 transition-colors duration-150"
				>
					LinkedIn
				</a>
			</div>
		{/if}
	</div>
</footer>
