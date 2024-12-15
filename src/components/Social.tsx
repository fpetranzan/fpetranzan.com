import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Social() {
  
  return (<>
        <div className="my-10 flex gap-4">
          <a href="https://www.linkedin.com/in/fpetranzan/" target="_blank">
            <div className="flex items-center gap-1 border border-slate-400 rounded w-fit px-1 py-0.5">
              <FaLinkedin className="text-base"/>
              <span className="text-sm tracking-wide">Linkedin</span>
            </div>
          </a>
          <a href="https://github.com/fpetranzan" target="_blank">
            <div className="flex items-center gap-1 border border-slate-400 rounded w-fit px-1 py-0.5">
              <FaGithub className="text-base"/>
              <span className="text-sm tracking-wide">Github</span>
            </div>
          </a>
        </div>
    </>
  );
};
