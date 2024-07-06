import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react"



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hiouani Rayane - Web Developer Portfolio",
  description: "I'm a passionate web developer that codes beautiful websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}
      <Analytics />
      </body>
    </html>
  );
}
