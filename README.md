# astro-art-portfolio

[![Main](https://github.com/EmaSuriano/astro-art-portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/EmaSuriano/astro-art-portfolio/actions/workflows/main.yml)
![Dependabot Status](https://badgen.net/github/dependabot/EmaSuriano/astro-art-portfolio)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8d66fa66-0596-4ae2-97ef-bef6134b2681/deploy-status)](https://app.netlify.com/sites/astro-art-portfolio/deploys)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Ema-suriano/astro-art)

> Art portfolio built with Astro and using Notion API.

## [Demo ✨](https://astro-art-portfolio.netlify.app)

## Screenshots 📸

| Light                                                                                               | Dark                                                                                               |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| ![Home - Light](https://github.com/user-attachments/assets/8e8afd1b-4beb-45ed-80be-26c5d34c6d23)     | ![Home - Dark](https://github.com/user-attachments/assets/447c76a3-8908-43f8-820e-62326e0367bf)    |
| ![Gallery - Light](https://github.com/user-attachments/assets/bb0da25d-e7bd-42af-b9ff-4c141ee2072f) | ![Gallery - Dark](https://github.com/user-attachments/assets/8137836b-c427-4929-a23b-a5a685114a26) |
| ![About - Light](https://github.com/user-attachments/assets/e3ba85d0-651d-4cd8-a49e-f2c3fd489265)   | ![About - Dark](https://github.com/user-attachments/assets/b1d33ea0-bac6-48db-af84-e2f8e904f2d7)   |

## Features 🚀

- [Astro](astro.build/)
- [Notion API](https://developers.notion.com/)
- [Tailwind CSS](https://tailwindcss.com/) with dark/light theme enabled
- Github workflow + Dependabot setup
- Typescript out of the box
- Gallery powered by [`photoswipe`](https://photoswipe.com/)
- Icon supports with [`astro-icon`](https://github.com/natemoo-re/astro-icon)

## Setup 📦

- Duplicate the following [notion page](https://www.notion.so/emasuriano/dec82b99ec35407b830fa219863511be?v=54eba236190b4911b58cbdbb328244c1)
- Replace the default values with your pictures and labels. The images are created based on: [label] [link].
- Clone repository,
- Install dependencies by running: `yarn install`
- Rename the file called `.env.example` to `.env` file and fill all the values.
- You can find how to get these values for your page inside [the official documentation of Notion](https://developers.notion.com/docs/working-with-databases).

## Force theme colors

I added a mechanism to force the theme of the website, in case you don't like the default behavior of [Dark Mode in Tailwind](https://tailwindcss.com/docs/dark-mode). Simply modify your deployment script in order to use:

<details>
  <summary>To force light theme </summary>
  
  ```
  build:light
  ```

</details>

<details>
  <summary>To force dark theme </summary>
  
  ```
  build:dark
  ```

</details>

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
