import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HSBI Energieportal',
  description: 'Website der HSBI Energiegenossenschaft Studienwerke',
  keywords: ['HSBI', 'Energiegenossenschaft', 'Solarenergie', 'Studenten', 'Engeno', 'Nachhaltigkeit'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={cn(
        geistSans.variable,
        geistMono.variable,
        "antialiased font-sans flex flex-col min-h-screen"
        )}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
       <Toaster />
      </body>
    </html>
  );
}
