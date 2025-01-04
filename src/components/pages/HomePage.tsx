'use client';

import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (<>
    <div>
      <p className="text-2xl mb-5">{t('title')}</p>
      {t.rich('content', {
        p: (chunks) => <p className='my-3'>{chunks}</p>
      })}
    </div>
  </>);
}