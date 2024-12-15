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
              src="/FP_logo.png"
              alt="fpetranzan.com Logo"
              width={42}
              height={42}
            />
            <Image
              className="block dark:hidden"
              src="/FP_logo.png"
              alt="fpetranzan.com Logo"
              width={42}
              height={42}
            />
          </picture>
        </div>
    </>
  );
};