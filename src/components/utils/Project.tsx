import { useMessages, useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

export default function Project({ project }: { project: string }) {
    const t = useTranslations('projects');
    const messages = useMessages() as { projects: { [key: string]: { tecnologies: { [key: string]: any } } } };
    const tecnologies = Object.keys(messages.projects[project].tecnologies);

    return (<>
        <div className="my-5">
            <div className="flex mt-3">
                <p className="text-2xl mr-auto">{t(`${project}.name`)}</p>
                <p className="text-base font-light">{t(`${project}.year`)}</p>
            </div>
            <hr />
            <div className="flex gap-1 my-3">
                {
                    tecnologies.map((tecnology) => (
                        <div key={tecnology} className="border border-slate-400 rounded w-fit px-1 py-0.5">
                            <span className="text-sm tracking-wide">
                                {t(`${project}.tecnologies.${tecnology}`)}
                            </span>
                        </div>
                    ))
                }
            </div>
            <div className="mb-3">
                {t.rich(`${project}.description`, {
                    p: (chunks) => <p>{chunks}</p>,
                    table: (chunks) => <table className="w-full my-3">{chunks}</table>,
                    td: (chunks) => <td>{chunks}</td>,
                    tr: (chunks) => <tr>{chunks}</tr>
                })}
            </div>
            <a href={t(`${project}.link`)} target="_blank">
                <div className="flex items-center gap-1 border border-slate-400 rounded w-fit px-1 py-0.5">
                    <FaGithub className="text-base"/>
                    <span className="text-sm tracking-wide">Github</span>
                </div>
            </a>
        </div>
    </>);
}