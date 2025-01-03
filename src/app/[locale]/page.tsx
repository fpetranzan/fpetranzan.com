import HomePage from "@/components/pages/HomePage";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    locale: string
  }
};

export async function generateMetadata({ params }: Params) {
  const t = await getTranslations('metadata.home');

  return {
    description: t('description'),
    openGraph: {
      title: "Francesco Petranzan",
      locale: `${params.locale}`,
      url: `/${params.locale}`,
    },
  }
}

async function Home({params}: Params) {
  return (<>
    <HomePage />
  </>);
}

export default Home;