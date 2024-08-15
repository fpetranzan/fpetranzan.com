"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitch";
import {useTranslations} from 'next-intl';

const Header = () => {
  const t = useTranslations('Menu');
  
  return (<>
        <div className="my-20 flex gap-8">
            <Link href={"/"}>{t('home')}</Link>
            <Link href={"/project"}>{t('project')}</Link>
            <Link href={"/work"}>{t('work')}</Link>
            <ThemeToggle />
            <LocaleSwitcher />
        </div>
    </>
  );
};

export default Header;
