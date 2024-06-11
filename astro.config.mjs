import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "",
      logo: {
        src: "./src/assets/logo.png",
      },
      social: {
        github: "https://github.com/light-stand/scriptura-api",
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Introduction", link: "/start-here/introduction/" },
            { label: "Getting Started", link: "/start-here/getting-started/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
