import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JMA Engenharia Elétrica | Eng. Jodalvo Mendes | Projetos Elétricos São Paulo",
  description:
    "JMA Engenharia Elétrica - Eng. Jodalvo Mendes CREA SP. Projetos elétricos residenciais e comerciais, energia solar fotovoltaica, instalações elétricas, laudos técnicos ART em São Paulo. Orçamento grátis!",
  keywords: [
    "engenheiro eletricista são paulo",
    "projeto elétrico residencial",
    "projeto elétrico comercial",
    "energia solar fotovoltaica",
    "instalação elétrica",
    "laudo técnico elétrico",
    "ART elétrica",
    "SPDA para-raios",
    "manutenção elétrica",
    "eletricista credenciado CREA",
    "engenharia elétrica são paulo",
    "sistema fotovoltaico",
    "aterramento elétrico",
  ].join(", "),
  authors: [{ name: "Eng. Jodalvo Mendes", url: "https://jmaengenharia.com.br" }],
  creator: "JMA Engenharia Elétrica",
  publisher: "JMA Engenharia Elétrica",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jmaengenharia.com.br",
    title: "JMA Engenharia Elétrica | Projetos Elétricos e Energia Solar SP",
    description:
      "Soluções completas em engenharia elétrica com Eng. Jodalvo Mendes. Projetos elétricos, energia solar, instalações e laudos técnicos em São Paulo.",
    siteName: "JMA Engenharia Elétrica",
    images: [
      {
        url: "https://jmaengenharia.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JMA Engenharia Elétrica - Eng. Jodalvo Mendes - Projetos Elétricos São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JMA Engenharia Elétrica | Eng. Jodalvo Mendes",
    description: "Projetos elétricos, energia solar e instalações em São Paulo. Orçamento grátis!",
    images: ["https://jmaengenharia.com.br/og-image.jpg"],
  },
  alternates: {
    canonical: "https://jmaengenharia.com.br",
  },
  verification: {
    google: "seu-codigo-google-search-console-aqui",
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "São Paulo",
    "geo.position": "-23.5505;-46.6333",
    ICBM: "-23.5505, -46.6333",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "JMA Engenharia Elétrica",
  description: "Empresa de engenharia elétrica especializada em projetos elétricos, energia solar e instalações",
  url: "https://jmaengenharia.com.br",
  telephone: "+55-11-99999-9999",
  email: "contato@jmaengenharia.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.5505,
    longitude: -46.6333,
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
  priceRange: "$$",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -23.5505,
      longitude: -46.6333,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Engenharia Elétrica",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Projeto Elétrico Residencial",
          description: "Projetos elétricos completos para residências",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Energia Solar Fotovoltaica",
          description: "Instalação de sistemas de energia solar",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instalação Elétrica",
          description: "Instalações elétricas residenciais e comerciais",
        },
      },
    ],
  },
  founder: {
    "@type": "Person",
    name: "Jodalvo Mendes",
    jobTitle: "Engenheiro Eletricista",
    hasCredential: "CREA SP-123456",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://jmaengenharia.com.br" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
