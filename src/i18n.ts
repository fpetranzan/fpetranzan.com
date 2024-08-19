import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales} from './config';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export type Locale = (typeof locales)[number];

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

export const localeNames: Record<Locale, string> = {
  "en": "EN",
  "it": "IT",
};

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === 'en'
        ?
          import('../messages/en.json')
        : import(`../messages/${locale}.json`))
    ).default
  };
});