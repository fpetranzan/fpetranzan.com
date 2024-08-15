'use client';
import {useTranslations} from 'next-intl';

async function HomePage() {
  const t = useTranslations('AboutMe');

  return (<>
    <div>
      <p className="text-2xl mb-5">{t('title')}</p>
      <p>{t('body')}</p>
    </div>
  </>);
}

export default HomePage;