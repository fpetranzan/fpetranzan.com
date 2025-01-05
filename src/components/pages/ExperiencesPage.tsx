import { useMessages } from 'next-intl';
import Experience from '../utils/Experience';

export default function ExperiencesPage() {
  const messages = useMessages();
  const experiences = Object.keys(messages.experiences);

  return (<>
    {
      experiences.map((experience) => (
        <Experience key={experience} experience={experience} />
      ))
    }
  </>);
}