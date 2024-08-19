import {MetadataRoute} from 'next';
import {locales, pathnames, defaultLocale} from '@/config';
import {getPathname} from '@/navigation';
 
const host = 'http://localhost:3000';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames) as Array<keyof typeof pathnames>;
 
  function getUrl(
    key: keyof typeof pathnames,
    locale: (typeof locales)[number]
  ) {
    const pathname = getPathname({locale, href: key});
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
  }
 
  return keys.map((key) => ({
    url: getUrl(key, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(key, locale)])
      )
    }
  }));
}