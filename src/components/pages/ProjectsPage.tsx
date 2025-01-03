'use client';

import {useTranslations} from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations('projects');

  return (<>
    <div>
      <p className="text-2xl mb-5">{t('title')}</p>
      {t.rich('content', {
        p: (chunks) => <p className='my-5'>{chunks}</p>
      })}
    </div>
  </>);
}