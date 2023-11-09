module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: "https://api.vercel.com",
      apiToken: "lFfn8VDsN4sWSEEi14oQq3GG",
      appFilter: "your-app-name-on-vercel",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
