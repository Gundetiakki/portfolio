"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    setNav(false);
  }, [pathname]);
  
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>SKY</title>
        <meta name="description" content={"Aakash's Portfolio"} />
      </Head>
      <body className="font-primary bg-white dark:bg-[#011627]">
        <div className="flex flex-col h-screen">
          <Providers>
            <Navbar nav={nav} openNav={openNav} closeNav={closeNav} />
          </Providers>
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
