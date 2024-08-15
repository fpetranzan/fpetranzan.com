import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import '../globals.css';

export const metadata: Metadata = {
  title: "Home | fpetranzan.com",
  description: "Francesco Petranzan Portfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body className="mx-auto max-w-4xl">
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