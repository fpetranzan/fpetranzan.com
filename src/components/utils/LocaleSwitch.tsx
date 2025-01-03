'use client';

import { Locale, localeNames, usePathname, useRouter } from '@/i18n';
import { locales } from '@/config';
import { ChangeEvent } from 'react';

export default function LocaleSwitcher({ locale }: { locale: Locale; }) {
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div>
      <select
        value={locale}
        onChange={changeLocale}
        className="bg-transparent"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc} className='dark:text-black'>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}