/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NOTION_API_KEY?: string;
  readonly DATABASE_ID?: string;
  readonly FORCE_THEME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
