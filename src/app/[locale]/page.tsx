import PageLayout from "@/components/PageLayout";

interface Params {
  params: {
    locale: string
  }
};

export async function generateMetadata({ params }: Params) {
  return {
    openGraph: {
      title: "Francesco Petranzan",
      locale: `${params.locale}`,
      url: `http://fpetranzan.com/${params.locale}`, //capire con gli env
    },
  }
}

async function HomePage({params}: Params) {
  return (<>
    <PageLayout pageName="AboutMe" />
  </>);
}

export default HomePage;