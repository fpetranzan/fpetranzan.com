import Image from "next/image";
import Social from "./Social";

export default function Footer() {

  return (<>
        <Social />
        <div className="flex items-end gap-4 mb-16">
          <p>fpetranzan.com - My personal Portfolio © 2024 Francesco Petranzan.</p>


          <picture className="ml-auto mr-6">
            <Image
              className="hidden dark:block"
              src="/F-logo-dark.jpg"
              alt="fpetranzan.com Logo"
              width={40}
              height={40}
            />
            <Image
              className="block dark:hidden"
              src="/F-logo-light.jpg"
              alt="fpetranzan.com Logo"
              width={40}
              height={40}
            />
          </picture>
        </div>
    </>
  );
};