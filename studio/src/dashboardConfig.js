export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63a55010ceb41a361d00d62e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-eqfro54p",
                  apiId: "a45575c3-1132-47c5-8b9c-b9c1f30b77bc",
                },
                {
                  buildHookId: "63a550112f267936b577d0f7",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-6i16u31z",
                  apiId: "c21bd422-372b-48b2-a657-f4625175eb5c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Mukilan13/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-6i16u31z.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
