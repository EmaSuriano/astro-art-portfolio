import { Client } from "@notionhq/client";
import type { ClientOptions } from "@notionhq/client/build/src/Client";

type NotionItem = { label: string; href: string };

export const getNotionItems = async (
  options: ClientOptions,
): Promise<NotionItem[]> => {
  const notion = new Client(options);

  const response = await notion.databases.query({
    database_id: import.meta.env.DATABASE_ID,
  });

  return response.results
    .map((page) => {
      if ("properties" in page) {
        const title = page.properties.Title;
        if (title && "type" in title && title.type === "title") {
          return {
            label: title.title.at(0)?.plain_text,
            href: title.title.at(1)?.plain_text,
          };
        }
      }
      return false;
    })
    .filter((item): item is NotionItem => !!item);
};
