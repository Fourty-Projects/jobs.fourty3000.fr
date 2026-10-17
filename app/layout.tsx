import type { Metadata } from "next";
import { withBasePath } from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fourty3000 Jobs",
  description:
    "Rejoignez les équipes de la Fourty3000 en découvrant les différentes offres d'emploi actuellement disponibles !",
  keywords: ["Fourty3000", "jobs", "recrutement", "emploi", "carrière"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        {/* Favicons. app/favicon.ico est injecté automatiquement par Next.js */}
        <link rel="icon" href={withBasePath("/favicon.ico")} sizes="any" />
        <link
          rel="icon"
          href={withBasePath("/img/fourty3000-logo.png")}
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href={withBasePath("/apple-touch-icon.png")}
        />
        <link
          rel="mask-icon"
          href={withBasePath("/img/fourty3000-logo.png")}
          color="#ED1C24"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta
          name="theme-color"
          content="#F37273"
        />
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
