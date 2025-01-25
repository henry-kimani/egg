# EGG :moyai:

## What is Egg?

Egg is an online content driven site made with Astro and the Starlight template.
Egg consist of content involving Criminology.


## 🚀 Project Structure

`src/content/docs/index.mdx` is the entry point of the application. 

`src/content/docs` directory, contains all the contents of the site in markdown.

`./astro.sidebar.ts` file, configures the sidebar and dictates what content 
should appear on the sidebar and how its structured.

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/ # contents in markdown
│   └── content.config.ts
├── astro.config.mjs
├── astro.sidebar.ts # The sidebar configuration
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## :grinning: Explore and Collaborate 

Wanna explore :telescope: and inspect :mag_right: the code and prolly send a PR.
1. Clone the repo and run the commands below to start it in development mode.

```bash
git clone https://github.com/henry-kimani/egg.git
```

2. Now run the command given below.

:tada: You can now preview the side in development mode :sparkles:

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`or `pnpm i` | Installs dependencies                            |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`      |
| `pnpm run build`          | Build your production site to `./dist/`          |
| `pnpm run preview`        | Preview your build locally, before deploying     |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

