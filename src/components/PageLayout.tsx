'use client';

import {useTranslations} from 'next-intl';

async function PageLayout(params: {pageName: string}) {
  const t = useTranslations(params.pageName);
  const keys = ['one', 'two', 'three', 'four', 'five'] as const;

  return (<>
    <div>
      <p className="text-2xl mb-5">{t('title')}</p>
      {keys.map((key) => (
        <p className="my-4" key={key}>{t(`Body.Paragrapths.${key}`)}</p>
      ))}
    </div>
  </>);
}

export default PageLayout;