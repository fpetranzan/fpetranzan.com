import ProjectsPage from "@/components/pages/ProjectsPage";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string
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

async function Projects() {

  return (<>
    <ProjectsPage />
  </>);
}

export default Projects;