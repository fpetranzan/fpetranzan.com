import ExperiencesPage from '@/components/pages/ExperiencesPage';
import { getTranslations } from 'next-intl/server';

interface Params {
  params: {
    locale: string
  }
};

export async function generateMetadata({ params }: Params) {
  const t = await getTranslations('metadata.experiences');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${t('url')}`,
      languages: {
        en: '/en/experiences',
        it: '/it/lavori'
      }
    },
    openGraph: {
      title: `${t('title')} | Francesco Petranzan`,
      locale: `${params.locale}`,
      url: `/${params.locale}/${t('url')}`,
    },
  }
}

async function Experiences() {

  return (<>
    <ExperiencesPage />
  </>);
}

export default Experiences;