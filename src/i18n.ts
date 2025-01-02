import { getRequestConfig } from 'next-intl/server';
import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export type Locale = (typeof locales)[number];

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

export const localeNames: Record<Locale, string> = {
  "en": "EN",
  "it": "IT",
};

const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale
});

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
 
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});