import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const page = {
    data: {
      slices: [], // Replace with actual slices fetched from Prismic
    },
  };

  return {
    page, // Ensure `page` is part of the returned data
  };
};
