'use client';
import {useTranslations} from 'next-intl';

async function Home({ params }: any) {
  const t = useTranslations('AboutMe');

  return (<>
    <div>
      <p className="text-2xl mb-5">{t('body')}</p>
    </div>
  </>);
}

export default Home;