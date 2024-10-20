import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import AppNav from "./GlobalComponent/AppNav";
import "bootstrap/dist/css/bootstrap.min.css";
import AppFooter from "./GlobalComponent/AppFooter";
import Cursor from "./GlobalComponent/Cursor";
import AppUpArrowKey from "./GlobalComponent/AppUpArrowKey";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bit By Bit",
  description: "A blogging website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Cursor/>
          <AppNav />
          <AppUpArrowKey/>
          {children}
          <AppFooter />
        
      </body>
    </html>
  );
}
