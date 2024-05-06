import { Inter } from "next/font/google";
import "./Font.css";
import "./globals.css";
import SiteConfig from "@/app/config/site"
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      <body>
        <h1 className="hidden">{SiteConfig.name}</h1>
        <Analytics />
        <div className="bg-black text-white">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
