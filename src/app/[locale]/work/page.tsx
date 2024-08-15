'use client';
import {useTranslations} from 'next-intl';

async function Home({ params }: any) {
  const t = useTranslations('AboutMe');

  return (<>
    <div>
      <p>{t('title')}</p>
    </div>
  </>);
}

export default Home;