import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
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
      </body>
    </html>
  );
}
