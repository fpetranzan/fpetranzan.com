import ThemeToggle from "../../components/ThemeToggle";
import LanguageSelector from "../../components/LanguageSelector";
import { getDictionary } from "../Dictionaries";

async function Home({ params }: any) {
  const { test } = await getDictionary(params.lang);

  return (<>
    <ThemeToggle />
    <LanguageSelector />

    <h1>{test}</h1>
  </>);
}

export default Home;