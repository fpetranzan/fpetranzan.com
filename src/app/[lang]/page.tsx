import { getDictionary } from "../Dictionaries";

async function Home({ params }: any) {
  const { aboutMe } = await getDictionary(params.lang);

  return (<>
    <div>
      <p className="text-2xl mb-5">{aboutMe.title}</p>
      <p>{aboutMe.body}</p>
    </div>
  </>);
}

export default Home;