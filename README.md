# Welcome to [Astro](https://astro.build)

[![Netlify Status](https://api.netlify.com/api/v1/badges/8d66fa66-0596-4ae2-97ef-bef6134b2681/deploy-status)](https://app.netlify.com/sites/art-porfolio-emasuriano/deploys)

> Art portofolio built with Astro and using Notion API.

## [Demo](https://art.emasuriano.com/)

## Screenshots

| Description | Light                                                                                                                                                           | Dark                                                                                                                                                            |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home        | ![screencapture-localhost-3000-2022-10-19-10_42_35](https://user-images.githubusercontent.com/3399429/196646889-8e5a7d23-75d5-4978-8767-0364f1cf0ca5.png)       | ![screencapture-localhost-3000-2022-10-19-10_49_45](https://user-images.githubusercontent.com/3399429/196646947-ca228872-1fac-40f8-9b57-f9b7a22f8f31.png)       |
| Gallery     | ![screencapture-localhost-3000-2022-10-19-10_42_43](https://user-images.githubusercontent.com/3399429/196646908-bb5fc6f4-c72f-4532-bd39-5b0bc5b04a94.png)       | ![screencapture-localhost-3000-2022-10-19-11_09_04](https://user-images.githubusercontent.com/3399429/196648558-41226bcd-6594-49dc-8d29-c998352cdf86.png)       |
| About       | ![screencapture-localhost-3000-about-2022-10-19-10_49_19](https://user-images.githubusercontent.com/3399429/196646936-f8087693-6254-4515-b7da-828f4ad0674d.png) | ![screencapture-localhost-3000-about-2022-10-19-11_01_52](https://user-images.githubusercontent.com/3399429/196646862-41bd7f63-758e-47f7-8bcb-23b2e5678496.png) |

## Features

- [Astro setup](astro.build/)
- [Notion API](https://developers.notion.com/)
- [Tailwind CSS](https://tailwindcss.com/) with dark/light theme enabled
- Github workflow + Dependabot setup
- Typescript
- Gallery powered by [photoswipe](https://photoswipe.com/)

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
