import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


export const metadata: Metadata = {
  title: "Travel",
  description: "A Travel App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
