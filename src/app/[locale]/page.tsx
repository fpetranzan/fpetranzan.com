'use client';

import {useTranslations} from 'next-intl';

async function HomePage() {
  const t = useTranslations('AboutMe');
  const keys = ['one', 'two', 'three', 'four', 'five'] as const;

  return (<>
    <div>
      <p className="text-2xl mb-5">{t('title')}</p>
      {keys.map((key) => (
        <p className="my-4">{t(`body.paragrapths.${key}`)}</p>
      ))}
    </div>
  </>);
}

export default HomePage;