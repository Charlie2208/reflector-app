import type { Metadata } from "next";
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
    <html lang="en">
     <body className={`${anton.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
