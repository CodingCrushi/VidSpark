import "./Font.css";
import "./globals.css";
import SiteConfig from "@/app/config/site"
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang={SiteConfig.lang} dir={SiteConfig.dir}>
      <body>
      <header className="hidden">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        <h1 className="hidden">{SiteConfig.name}</h1>
        <Analytics />
        <main className="bg-black text-white">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
    </ClerkProvider>

  );
}
