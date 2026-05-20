import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import "@/styles/globals.css";

export const metadata: Metadata = buildMetadata({
  title: "Harmonia | East-West Life Wisdom | Mind-Body Harmony",
  description:
    "End mental drain and inner anxiety. Harmonia fuses I Ching, TCM, Zen, NLP and neuroscience into one practice system for real transformation. Join 60,000+ practitioners worldwide.",
  path: "/",
  ogImage: "/og-homepage.jpg",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Harmonia 寰宇心流",
              url: "https://harmoniawisdom.com",
              logo: "https://harmoniawisdom.com/logo.png",
              description: "East-West life wisdom platform integrating I Ching, TCM, Zen, NLP and neuroscience.",
              sameAs: [
                "https://instagram.com/harmonia_wisdom",
                "https://youtube.com/@harmonialife",
              ],
              foundingDate: "2018",
              founder: { "@type": "Person", name: "Richard" },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="grain-overlay antialiased">{children}</body>
    </html>
  );
}
