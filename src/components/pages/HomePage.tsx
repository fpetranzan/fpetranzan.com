'use client';

import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (<>
    <div>
      <p className="text-xl mb-3 sm:mb-5 sm:text-2xl">{t('title')}</p>
      {t.rich('content', {
        p: (chunks) => <p className='my-2 text-sm sm:my-3 sm:text-base'>{chunks}</p>
      })}
    </div>
  </>);
}