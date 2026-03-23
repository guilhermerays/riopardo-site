import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rio Pardo Embalagens | Soluções Completas",
  description:
    "Artigos de festa, confeitaria, embalagens e descartáveis. Varejo e Atacado em São José do Rio Pardo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${poppins.variable} font-(--font-poppins)`}>
        {children}
      </body>
    </html>
  );
}
