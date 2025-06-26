import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppContextProvider } from "@/contexts/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moovies - Tu cine online favorito",
  description: "Explorá las últimas películas, géneros y favoritos en Moovies, la plataforma ideal para amantes del cine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppContextProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
