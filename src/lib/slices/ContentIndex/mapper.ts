import type { Client, Content, SliceMapper } from '@prismicio/client';
import type { ComponentProps } from 'svelte';

import ContentIndex  from './index.svelte';



type Context = { client: Client<Content.AllDocumentTypes> };

const mapper: SliceMapper<
  Content.ContentIndexSlice,
  ComponentProps<ContentIndex>,
  Context
> = async ({ slice, context }) => {
  const { client } = context;

  const items =  await client.getAllByType('case');
  

  return { slice, items };
};

export default mapper;
