import { createClient } from '$lib/prismicio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch, cookies }) => {
	// Create a Prismic client with the fetch and cookies context
	const client = createClient({ fetch, cookies });

	// Fetch the page data using the UID from the route parameters
	const page = await client.getByUID('case', params.uid);

	// Return the page data to the +page.svelte component
	return {
		page
	};
};

export const entries = async () => {
	// Create a Prismic client without fetch/cookies if unnecessary
	const client = createClient();

	// Fetch all pages of the 'case' type
	const pages = await client.getAllByType('case');

	// Map the pages to return only their UID
	return pages.map((page) => ({ uid: page.uid }));
};
