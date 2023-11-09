module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_HOOK,
      apiToken: process.env.VERCEL_TOKEN,
      appFilter: "strapi-backend",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
