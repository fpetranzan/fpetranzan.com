'use client';

import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {useRouter, usePathname} from '@/navigation';
import {Locale} from '@/types';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        {
          pathname,
          params
        },
        {locale: nextLocale}
      );
    });
  }

  return (
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
        className='bg-transparent'
      >
        {children}
      </select>
  );
}