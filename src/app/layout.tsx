import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css"
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rio Pardo Embalagens | Embalagens, Confeitaria e Descartáveis",

  description:
    "A maior variedade em artigos de festa, confeitaria, embalagens e descartáveis em São José do Rio Pardo.",

icons: {
  icon: "/favicon.png",
},
  
verification: {
  google: "DDLEgZC524VMuHUR4eLe5fo0PNL0JHwDcKfX0FrWp58",
},
  
  openGraph: {
    title: "Rio Pardo Embalagens",

    description:
      "Soluções completas em embalagens, descartáveis e confeitaria.",

    url: "https://riopardoembalagens.com.br",

    siteName: "Rio Pardo Embalagens",

    images: [
      {
        url: "/fachada.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="pt-BR" className="scroll-smooth">
  <head>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-NTVZ8XC590"
    />

    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NTVZ8XC590');
      `}
    </Script>
  </head>

  <body className={`${poppins.variable} font-(--font-poppins)`}>
    {children}
  </body>
</html>
