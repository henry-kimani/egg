import type { HeadUserConfig } from "node_modules/@astrojs/starlight/schemas/head";


export default function SeoHeadConfig(): HeadUserConfig{
  return [
    {
      tag: "meta",
      attrs: {
        property: 'title',
        content: "Egg | Learn Criminology with Ease"
      }
    }, 
    {
      tag: "meta",
      attrs: {
        property: 'og:logo',
        content: "https://egglious-web.web.app/logo.webp"
      }
    },
    {
      tag: "meta",
      attrs: {
        property: 'og:image',
        content: "https://egglious-web.web.app/egg-og-img-dark.webp"
      }
    },
    {
      tag: "meta",
      attrs: {
        name: "robots",
        content: "index, follow"
      }
    }
  ]
}
