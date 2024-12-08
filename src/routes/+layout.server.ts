import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export async function load() {
	const client = createClient();

	const settings = await client.getSingle('settings');
	const navigation = await client.getSingle('navigation');

	return {
		settings,
		navigation
	};
}
