import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (<>
        <div className="my-20 flex gap-8">
            <Link href={""}>Home</Link>
            <Link href={""}>Project</Link>
            <Link href={""}>Work</Link>
            <ThemeToggle />
            <LanguageSelector />
        </div>
    </>
  );
};

export default Header;
