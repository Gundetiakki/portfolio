
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SKY",
  description: "Aakash's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-primary bg-white dark:bg-[#011627]">
        <div className="flex flex-col h-screen">
          <Providers>
            <Navbar/>
            <main className="flex-grow w-full justify-center">{children}</main>
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
