import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Roboto_Condensed } from 'next/font/google'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),
  title: {
    default: "Francesco Petranzan - Software Engineer",
    template: "%s | Francesco Petranzan - Software Engineer"
  },
  creator: "fpetranzan",
  publisher: "Francesco Petranzan",
  category: "Portfolio",
  keywords: ['Francesco Petranzan', 'Francesco', 'Petranzan', 'Portfolio', 'Software Engineer', 'Developer', 'Backend'],
  authors: [
    {
      name: "fpetranzan",
      url: "https://github.com/fpetranzan"
    }
  ],
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      it: '/it'
    }
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