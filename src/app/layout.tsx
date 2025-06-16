import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import NavBar from "./components/NavBar";
import Universe from "./components/Universe";
import Footer from "./components/Footer";

const inter = Source_Code_Pro({ 
  subsets: ["latin"],
  preload: false
});

export const metadata: Metadata = {
  title: "filliplampe.com",
  description: "A personal website for Fillip Lampe.",
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <div className = "flex min-h-screen flex-col">
          <NavBar />
          <Universe />
          {children}
          <Footer />
        </div>
      
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
