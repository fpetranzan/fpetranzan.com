const dictionaries: any = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    it: () => import("./dictionaries/it.json").then((module) => module.default)
};

export const getDictionary = async (locale: any) => dictionaries[locale]();