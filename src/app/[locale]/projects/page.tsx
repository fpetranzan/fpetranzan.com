import ExperiencesPage from "@/components/pages/ExperiencesPage";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string,
    section: string
  }
};

export async function generateMetadata({ params }: Params) {
  const t = await getTranslations('metadata.projects');
  
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${t('url')}`,
      languages: {
        en: '/en/projects',
        it: '/it/progetti'
      }
    },
    openGraph: {
      title: `${t('title')} | Francesco Petranzan`,
      locale: `${params.locale}`,
      url: `/${params.locale}/${t('url')}`,
    },
  }
}

async function Projects({params}: Params) {

  return (<>
    <ExperiencesPage />
  </>);
}

export default Projects;