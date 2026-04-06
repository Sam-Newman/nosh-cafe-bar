import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nosh Cafe Bar | Independent Café in Four Marks, Hampshire",
  description: "Great coffee, fresh food, and a warm welcome. Independent café and bar in Four Marks, Hampshire. Homemade food, freshly roasted coffee, and delicious cakes.",
  keywords: "cafe, coffee, Four Marks, Hampshire, Medstead, Alton, breakfast, lunch, homemade food",
  openGraph: {
    title: "Nosh Cafe Bar",
    description: "Great coffee, fresh food, and a warm welcome.",
    type: "website",
    locale: "en_GB",
  },
};

// Replace with actual Elfsight widget ID after setup
const ELFSIGHT_WIDGET_ID = "YOUR_WIDGET_ID";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {/* Elfsight Instagram Widget - free tier available */}
        <Script 
          src={`https://static.elfsight.com/platform/platform.js`}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
