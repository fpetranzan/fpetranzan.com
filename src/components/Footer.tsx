import Image from "next/image";
import Social from "./Social";


const Footer = () => {
  
  return (<>
        <Social />
        <div className="flex items-end gap-4 mb-16">
          <p>fpetranzan.com - My personal Portfolio © 2024 Francesco Petranzan.</p>
          <Image
            src="/logo.jpeg"
            width={50}
            height={50}
            alt="fpetranzan.com Logo"
            className="ml-auto mr-0 border-2 border-slate-400"
          />
        </div>
    </>
  );
};

export default Footer;
