import { useMessages, useTranslations } from "next-intl";

export default function Experience({ experience }: { experience: string }) {
    const t = useTranslations('experiences');
    const messages = useMessages() as { experiences: { [key: string]: { activities: { [key: string]: any }, tecnologies: { [key: string]: any } } } };
    const tecnologies = Object.keys(messages.experiences[experience].tecnologies);
    const activities = Object.keys(messages.experiences[experience].activities);

    return (<>
        <div className="my-5">
            <p className="text-2xl">{t(`${experience}.name`)}</p>
            <hr />
            <div className="flex mt-3">
                <p className="mr-auto text-lg">{t(`${experience}.role`)}</p>
                <p className="text-base font-light">{t(`${experience}.start`)} - {t(`${experience}.end`)}</p>
            </div>
            <div className="flex gap-1 my-3">
                {
                    tecnologies.map((tecnology) => (
                        <div key={tecnology} className="border border-slate-400 rounded w-fit px-1 py-0.5">
                            <span className="text-sm tracking-wide">
                                {t(`${experience}.tecnologies.${tecnology}`)}
                            </span>
                        </div>
                    ))
                }
            </div>
            <p className="mb-3">{t(`${experience}.description`)}</p>
            {
                activities.map((activity) => (
                    <li key={activity}>
                        {t(`${experience}.activities.${activity}`)}
                    </li>
                ))
            }
        </div>
    </>);
}