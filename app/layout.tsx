import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import { Merriweather, Open_Sans } from "next/font/google"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-serif",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sites Apostas Desportivas - Análises e Comparações Portugal",
  description:
    "Análises independentes e comparações de sites de apostas desportivas em Portugal. Informação sobre casas de apostas licenciadas pelo SRIJ. Apenas para maiores de 18 anos.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://sitesapostasdesportivas.com"),
  alternates: {
    canonical: "https://sitesapostasdesportivas.com",
  },
  openGraph: {
    title: "Sites Apostas Desportivas - Análises e Comparações",
    description:
      "Site informativo com análises e comparações de casas de apostas desportivas licenciadas em Portugal. Conteúdo educacional sobre apostas responsáveis.",
    url: "https://sitesapostasdesportivas.com",
    siteName: "Sites Apostas Desportivas",
    locale: "pt_PT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Sites Apostas Desportivas" }],
  category: "Sports Information",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${openSans.variable} ${merriweather.variable}`}>
      <head>
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sites Apostas Desportivas",
              url: "https://sitesapostasdesportivas.com",
              description:
                "Portal informativo com análises e comparações independentes de casas de apostas desportivas licenciadas em Portugal. Conteúdo educacional sobre jogo responsável.",
              inLanguage: "pt-PT",
              audience: {
                "@type": "PeopleAudience",
                suggestedMinAge: 18,
              },
              about: {
                "@type": "Thing",
                name: "Apostas Desportivas",
                description: "Informação e análises sobre sites de apostas desportivas em Portugal",
              },
            }),
          }}
        /> */}
      </head>
      <body className="font-sans antialiased">

        {children}
      </body>
    </html>
  )
}
