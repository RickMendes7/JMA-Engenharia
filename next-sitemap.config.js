/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://jmaengenharia.com.br",
  generateRobotsTxt: true,
  exclude: ["/admin/*", "/private/*"],
  additionalPaths: async (config) => [
    await config.transform(config, "/#sobre"),
    await config.transform(config, "/#servicos"),
    await config.transform(config, "/#projetos"),
    await config.transform(config, "/#depoimentos"),
    await config.transform(config, "/#blog"),
    await config.transform(config, "/#contato"),
  ],
}
