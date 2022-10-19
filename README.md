# Welcome to [Astro](https://astro.build)

[![Netlify Status](https://api.netlify.com/api/v1/badges/8d66fa66-0596-4ae2-97ef-bef6134b2681/deploy-status)](https://app.netlify.com/sites/art-porfolio-emasuriano/deploys)

> Art portofolio built with Astro and using Notion API.

## [Demo](https://art.emasuriano.com/)

## Features

- [Astro setup](astro.build/)
- [Notion API](https://developers.notion.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- Prettier setup

## Setup

Create a new notion page similar to [this one](https://emasuriano.notion.site/93337e86f87a4a89b0553a05f512df2b?v=21134437da6f4e22bf36bdda167295cc).

Create an `.env` file at the root level and define the following variables:

```plain
NOTION_API_KEY=
DATABASE_ID=
```

You can find how to get these values for your page inside [the official documentation of Notion](https://developers.notion.com/docs/working-with-databases).

## Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                             |
| :--------------- | :------------------------------------------------- |
| `yarn`           | Installs dependencies                              |
| `yarn dev`       | Starts local dev server at `localhost:3000`        |
| `yarn build`     | Build your production site to `./dist/`            |
| `yarn preview`   | Preview your build locally, before deploying       |
| `yarn astro ...` | Run CLI commands like `astro add`, `astro preview` |

## License

MIT.
