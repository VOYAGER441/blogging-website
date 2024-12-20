/* eslint-disable @next/next/no-sync-scripts */
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import AppFooter from "./GlobalComponent/AppFooter";
import AppNav from "./GlobalComponent/AppNav";
import AppUpArrowKey from "./GlobalComponent/AppUpArrowKey";
import Cursor from "./GlobalComponent/Cursor";
import "./globals.scss";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
  title: "Bit By Bits",
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
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        />
     
          <Cursor />
          <AppNav />
          <AppUpArrowKey />
          {children}
          <AppFooter />
     
      </body>
    </html>
  );
}
