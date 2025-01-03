import Image from "next/image";
import Social from "../utils/Social";

export default function Footer() {

  return (<>
        <hr/>
        <Social />
        <div className="flex items-end gap-4 mb-16">
          <p>fpetranzan.com - My personal Portfolio © 2024 Francesco Petranzan.</p>
        </div>
    </>
  );
};