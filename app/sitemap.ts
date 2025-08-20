import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://xn--jmaservio-x3a.com.br/"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Remova as URLs com # - elas não funcionam em sitemaps
    // {
    //   url: `${baseUrl}/#sobre`,  ← REMOVER
    //   url: `${baseUrl}/#servicos`, ← REMOVER
    // }
  ]
}