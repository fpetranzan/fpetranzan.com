import { useMessages, useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

export default function Project({ project }: { project: string }) {
    const t = useTranslations('projects');
    const messages = useMessages() as { projects: { [key: string]: { tecnologies: { [key: string]: any } } } };
    const tecnologies = Object.keys(messages.projects[project].tecnologies);

    return (<>
        <div className="my-5">
            <div className="flex items-end mt-3">
                <p className="text-xl mr-auto sm:text-2xl">{t(`${project}.name`)}</p>
                <p className="text-sm font-light sm:text-base">{t(`${project}.year`)}</p>
            </div>
            <hr />
            <div className="flex gap-1 my-2 sm:my-3">
                {
                    tecnologies.map((tecnology) => (
                        <div key={tecnology} className="border border-slate-400 rounded w-fit px-1">
                            <span className="text-xs tracking-wide sm:text-sm">
                                {t(`${project}.tecnologies.${tecnology}`)}
                            </span>
                        </div>
                    ))
                }
            </div>
            <div className="my-2 text-sm sm:my-3 sm:text-base">
                {t.rich(`${project}.description`, {
                    p: (chunks) => <p>{chunks}</p>
                })}
            </div>
            <a href={t(`${project}.link`)} target="_blank">
                <div className="flex items-center gap-1 border border-slate-400 rounded w-fit px-1 py-0.5">
                    <FaGithub className="text-base"/>
                    <span className="text-xs tracking-wide sm:text-sm">Github</span>
                </div>
            </a>
        </div>
    </>);
}