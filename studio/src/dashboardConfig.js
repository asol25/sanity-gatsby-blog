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
                    "635e7c001f72163d043f1808",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-pwuu4bhv",
                  apiId: "5ecae2a1-cb8f-4972-9da8-3a6d3880a463",
                },
                {
                  buildHookId: "635e7c002c15d83f740246b2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wgwpp5kg",
                  apiId: "8590746b-2c21-4c55-a7e4-4fc672d372f5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/asol25/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wgwpp5kg.netlify.app",
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
