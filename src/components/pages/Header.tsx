import ThemeToggle from "../utils/ThemeToggle";
import LocaleSwitcher from "../utils/LocaleSwitch";
import {useLocale, useTranslations} from 'next-intl';
import { Link, Locale } from "@/i18n";

export default function Header() {
  const t = useTranslations('menu');
  const locale = useLocale() as Locale;
  
  return (<>
        <div className="my-20 flex gap-8">
            <Link href={"/"}>{t('home')}</Link>
            <Link href={"/experiences"}>{t('experiences')}</Link>
            <Link href={"/projects"}>{t('projects')}</Link>
            <ThemeToggle />
            <LocaleSwitcher locale={locale}/>
        </div>
    </>
  );
};