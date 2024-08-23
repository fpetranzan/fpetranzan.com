import PageLayout from '@/components/PageLayout';
import { getTranslations } from 'next-intl/server';

interface Params {
  params: {
    locale: string
  }
};

export async function generateMetadata({ params }: Params) {
  const t = await getTranslations('Locale.Metadata.Experiences');
  const pageName = t('title');

  return {
    title: pageName.charAt(0).toUpperCase() + pageName.slice(1),
    description: t('description'),
    alternates: {
      canonical: `/${pageName}`,
      languages: {
        en: '/en/experiences',
        it: '/it/lavori'
      }
    },
    openGraph: {
      title: `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} | Francesco Petranzan`,
      locale: `${params.locale}`,
      url: `/${params.locale}/${pageName}`,
    },
  }
}

async function Works({params}: Params) {

  return (<>
    <PageLayout pageName="AboutMe" />
  </>);
}

export default Works;