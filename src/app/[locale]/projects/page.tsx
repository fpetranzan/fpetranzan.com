import PageLayout from "@/components/PageLayout";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string,
    section: string
  }
};

export async function generateMetadata({ params }: Params) {
  const t = await getTranslations('Locale.Metadata');
  const pageName = t('projects');
  
  return {
    title: pageName.charAt(0).toUpperCase() + pageName.slice(1),
    description: "All about my work and my experinces.",
    openGraph: {
      title: `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} | Francesco Petranzan`,
      locale: `${params.locale}`,
      url: `http://fpetranzan.com/${params.locale}/${pageName}`,
    },
  }
}

async function Projects({params}: Params) {

  return (<>
    <PageLayout pageName="AboutMe" />
  </>);
}

export default Projects;