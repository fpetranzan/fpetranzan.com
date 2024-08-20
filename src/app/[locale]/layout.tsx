import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Roboto_Condensed } from 'next/font/google'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: {
    default: "Francesco Petranzan - Software Developer",
    template: "%s | Francesco Petranzan - Software Developer"
  },
  openGraph: {
    type: "website",
    siteName: "fpetranzan"
  },
};

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`mx-auto max-w-4xl ${robotoCondensed.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}