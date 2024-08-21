import PageLayout from "@/components/PageLayout";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string,
    section: string
  }
};

export async function generateMetadata({ params }: Params) {
  const t = await getTranslations('Locale.Metadata.Projects');
  const pageName = t('title');
  
  return {
    title: pageName.charAt(0).toUpperCase() + pageName.slice(1),
    description: t('description'),
    openGraph: {
      title: `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} | Francesco Petranzan`,
      locale: `${params.locale}`,
      url: `/${params.locale}/${pageName}`,
    },
  }
}

async function Projects({params}: Params) {

  return (<>
    <PageLayout pageName="AboutMe" />
  </>);
}

export default Projects;