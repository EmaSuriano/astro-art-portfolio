# astro-art-portfolio

[![Main](https://github.com/EmaSuriano/astro-art-portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/EmaSuriano/astro-art-portfolio/actions/workflows/main.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8d66fa66-0596-4ae2-97ef-bef6134b2681/deploy-status)](https://app.netlify.com/sites/astro-art-portfolio/deploys)

> Art portfolio built with Astro and using Notion API.

## [Demo ✨](https://art.emasuriano.com/)

## Screenshots 📸

| Description | Light                                                                                                                    | Dark                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Home        | ![Home - Light](https://user-images.githubusercontent.com/3399429/196646889-8e5a7d23-75d5-4978-8767-0364f1cf0ca5.png)    | ![Home - Dark](https://user-images.githubusercontent.com/3399429/196646947-ca228872-1fac-40f8-9b57-f9b7a22f8f31.png)    |
| Gallery     | ![Gallery - Light](https://user-images.githubusercontent.com/3399429/196646908-bb5fc6f4-c72f-4532-bd39-5b0bc5b04a94.png) | ![Gallery - Dark](https://user-images.githubusercontent.com/3399429/196648558-41226bcd-6594-49dc-8d29-c998352cdf86.png) |
| About       | ![About - Light](https://user-images.githubusercontent.com/3399429/196646936-f8087693-6254-4515-b7da-828f4ad0674d.png)   | ![About - Dark](https://user-images.githubusercontent.com/3399429/196646862-41bd7f63-758e-47f7-8bcb-23b2e5678496.png)   |

## Features 🚀

- [Astro](astro.build/)
- [Notion API](https://developers.notion.com/)
- [Tailwind CSS](https://tailwindcss.com/) with dark/light theme enabled
- Github workflow + Dependabot setup
- Typescript out of the box
- Gallery powered by [`photoswipe`](https://photoswipe.com/)
- File compression with [`astro-compress`](https://github.com/astro-community/astro-compress)
- 💯 Lighthouse score
- Icon supports with [`astro-icon`](https://github.com/natemoo-re/astro-icon)

## Lighthouse report 💯

| Mobile                                                                                                                            | Desktop                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ![Lighthouse mobile report](https://user-images.githubusercontent.com/3399429/205282617-84fd40b0-473e-4cb5-aec7-ae94f2fc7c51.png) | ![Lighthouse desktop report](https://user-images.githubusercontent.com/3399429/205282635-b9198cd3-2253-421c-8207-3473436f8689.png) |

## Setup 📦

* Duplicate the following [notion page](https://www.notion.so/emasuriano/dec82b99ec35407b830fa219863511be?v=54eba236190b4911b58cbdbb328244c1)
* Replace the default values with your pictures and labels. The images are created based on: [label] [link].
* Clone repository, and create an `.env` file at the root level and define the following variables:

```plain
NOTION_API_KEY=
DATABASE_ID=
```
* You can find how to get these values for your page inside [the official documentation of Notion](https://developers.notion.com/docs/working-with-databases).

## Automate deploy of website 🚀 (Optional)

Given that this project is a static website, you are force to trigger a deploy in order to reflect the latest changes inside our Notion database. This process can be easily automatized using many of the existing providers out there. 

In my case, I'm currently using [Zapier](https://zapier.com/) due to it provides compability with many services, and in this case with the ones that I need: [Notion](https://zapier.com/apps/notion/integrations) and [Netlify](https://zapier.com/apps/netlify/integrations). I created a [shared zap](https://zapier.com/shared/43559f7a74ff7d4aacb4befe8aa20f5acb88c628) that anyone can start using now!

![Zapier template](https://user-images.githubusercontent.com/3399429/207274121-c4ed214e-f45a-47aa-ab36-1b8a0f809b76.png)

## Commands 🧞

All commands are run from the root of the project, from a terminal:

| Command          | Action                                             |
| :--------------- | :------------------------------------------------- |
| `yarn`           | Installs dependencies                              |
| `yarn dev`       | Starts local dev server at `localhost:3000`        |
| `yarn build`     | Build your production site to `./dist/`            |
| `yarn preview`   | Preview your build locally, before deploying       |
| `yarn astro ...` | Run CLI commands like `astro add`, `astro preview` |

## License 🗒

MIT.
