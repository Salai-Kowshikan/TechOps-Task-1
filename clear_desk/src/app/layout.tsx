import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import Providers from "./provider";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"
import Navbar from "@/components/Landing/Navbar"
import Footer from "@/components/Landing/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clear Desk - Admin & User Dashboard",
  description: "Complaint management system for admins and users at CEG Tech Forum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Navbar />
            {children}
            <Footer />
            <Toaster expand={true} position="bottom-left" richColors />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
