import PageLayout from "@/components/PageLayout";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string
  }
};

export async function generateMetadata({ params }: Params) {
  const t = await getTranslations('Locale.Metadata.Home');

  return {
    description: t('description'),
    openGraph: {
      title: "Francesco Petranzan",
      locale: `${params.locale}`,
      url: `/${params.locale}`,
    },
  }
}

async function HomePage({params}: Params) {
  return (<>
    <PageLayout pageName="AboutMe" />
  </>);
}

export default HomePage;