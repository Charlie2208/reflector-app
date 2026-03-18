import type { Metadata } from "next";
import Script from 'next/script'
import { Geist, Geist_Mono, Anton, Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});


export const metadata: Metadata = {
  title: "Reflector | Agencia de Marketing Digital en Santiago, Chile",
  description: "Agencia de marketing digital en Santiago. Especialistas en Meta Ads, Google Ads, gestión de redes sociales, branding y estrategia digital. Hacemos crecer tu marca.",
  verification: {
    google: "0bTKYWOcooTbc4kCj6LgXuQbXpJwv6SLEicI5OA4Uis",
  },
  openGraph: {
    title: "Reflector | Agencia de Marketing Digital en Santiago, Chile",
    description: "Agencia de marketing digital en Santiago. Especialistas en Meta Ads, Google Ads, gestión de redes sociales, branding y estrategia digital. Hacemos crecer tu marca.",
    url: "https://https://reflector.cl/",
    siteName: "Reflector",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reflector Agencia de Marketing Digital",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${anton.variable} ${openSans.variable}`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QHN0Y7JVW0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QHN0Y7JVW0');
          `}
        </Script>
      </body>
    </html>
  );
}