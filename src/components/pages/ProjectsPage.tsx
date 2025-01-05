import { useMessages } from 'next-intl';
import Project from '../utils/Project';

export default function ProjectsPage() {
  const messages = useMessages();
  const projects = Object.keys(messages.projects);

  return (<>
    {
      projects.map((project) => (
        <Project key={project} project={project} />
      ))
    }
  </>);
}