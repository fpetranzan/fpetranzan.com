"use client";
import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

export default () => {
    const router = useRouter();
    const pathname = usePathname();  
    const langs = [
      { lang: "en", fullName: "English", shortName: "EN" },
      { lang: "it", fullName: "Italian", shortName: "IT" },
    ];  
    
    function handleLangChange(lang: string ) {
      const language = lang ? "/" + lang : "/en";
      router.push(`${language}`);
    }
    
    return (
      <select defaultValue={pathname.slice(1)} onChange={e => handleLangChange(e.target.value)} className="mr-0">
        {langs.map((lang) => (
          <option
            key={lang.lang}
            value={lang.lang}
          >
            {lang.shortName}
          </option>
        ))}
      </select>
    );
  };