import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { Client } from '@notionhq/client';
import type { ClientOptions } from '@notionhq/client/build/src/Client';

export const getNotionItems = async (options: ClientOptions) => {
  const notion = new Client(options);

  const response = await notion.databases.query({
    database_id: import.meta.env.DATABASE_ID,
  });

  return response.results
    .map((page) => {
      if ('properties' in page) {
        const title = page.properties.Title;
        if (title && 'type' in title && title.type === 'title') {
          return title.title[0];
        }
      }
      return false;
    })
    .filter((title): title is RichTextItemResponse => !!title);
};
