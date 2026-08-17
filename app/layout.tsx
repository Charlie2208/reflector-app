import type { Metadata } from "next";
import Script from 'next/script'
import { Geist, Geist_Mono, Anton, Open_Sans, Lora } from "next/font/google";
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

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
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
    url: "https://reflector.cl/",
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
      <body className={`${anton.variable} ${openSans.variable} ${lora.variable}`}>
        {children}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MarketingAgency",
            "name": "Reflector Agencia de Marketing Digital",
            "url": "https://reflector.cl",
            "logo": "https://reflector.cl/logo.png",
            "description": "Agencia creativa de marketing digital enfocada en estrategias de adquisición y crecimiento de pequeños negocios en Santiago, Chile.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Santiago",
              "addressRegion": "Región Metropolitana",
              "addressCountry": "CL"
            },
            "telephone": "+56956075020",
            "email": "hola@reflector.cl",
            "areaServed": "Chile",
            "serviceType": [
              "Estrategia Digital",
              "Meta Ads",
              "Google Ads",
              "Ecommerce",
              "Shopify",
              "Email-marketing",
              "Gestión de Redes Sociales",
              "Branding",
              "SEO"
            ],
            "sameAs": [
             "https://www.instagram.com/reflectoram",
             "https://www.facebook.com/profile.php?id=61585018786233",
             "https://www.tiktok.com/@reflectoram"
            ]
          })
        }}
/>
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
        <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1251398780434138');
              fbq('track', 'PageView');
            `}
        </Script>
          <noscript>
            <img height="1" width="1" style={{display:'none'}}
              src="https://www.facebook.com/tr?id=1251398780434138&ev=PageView&noscript=1"
            />
          </noscript>
      </body>
    </html>
  );
}