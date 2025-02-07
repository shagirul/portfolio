import { Github, Zap } from "lucide-react";
import Link from "next/link";
import ExternalButton from "./components/ExternalButton";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-6 h-full lg:min-h-[200px] snap-start justify-end  w-full">
      <h1 className=" text-[52px] lg:text-9xl text-foreground font-bold lg:leading-[90%] leading-[90%] uppercase ">
        FEATURED <br></br>
        <span className="text-mygray-200">PROJECTS</span>
      </h1>

      {["qmoney", "xquiz", "ycalculatorycalculator", 4].map((pr, i) => {
        return (
          <Link
            href={`/project/${pr}`}
            className="w-full bg-mygray-200/60 lg:min-h-44 lg:rounded-xl rounded-md lg:p-8 p-4 flex lg:flex-row-reverse  items-start gap-5 cursor-pointer"
            key={i}
          >
            <div className="flex flex-col h-full justify-between lg:min-h-96 ">
              <div className="aspect-square min-w-12 lg:min-w-[230px] h-auto bg-mygray-200 "></div>
              <div className="hidden lg:flex flex-col gap-3">
                <ExternalButton
                  href="/"
                  variant="orange"
                  text="Live Link"
                  icon={<Zap opacity={"50%"} color="white" />}
                ></ExternalButton>
                <ExternalButton
                  href="/"
                  variant="green"
                  text="Git Repo"
                  icon={<Github opacity={"50%"} color="black" />}
                ></ExternalButton>
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:gap-4 w-full text-mygray-300">
              <p className="uppercase text-xl  lg:text-2xl text-white font-bold ">
                Qmoney
              </p>
              <p className="text-mygray-300 text-sm lg:text-base">Jan 2025</p>
              <div className="flex flex-col leading-tight gap-3 ">
                <p className=" text-xs lg:text-sm line-clamp-2 md:line-clamp-3 lg:line-clamp-6">
                  QMoney is a visual stock portfolio analyzer. It helps
                  portfolio managers make trade recommendations for their
                  clients. During the course of this project,
                </p>
                <ol className="ml-11 gap-3 lg:flex flex-col list-disc hidden">
                  {[
                    "Implemented the core logic of the portfolio manager and published it as a library.",
                  ].map((hi, i) => {
                    return (
                      <li key={i} className="">
                        {hi}
                      </li>
                    );
                  })}
                </ol>
                <div className="lg:flex flex-wrap  gap-3 p-[10px] hidden">
                  {[
                    "unit test",
                    "unit test",
                    "unit test",
                    "unit test",
                    "unit test",
                    "unit test",
                  ].map((li, i) => {
                    return (
                      <div
                        className="py-2 px-4 bg-mygray-300/20 text-white/60 rounded "
                        key={i}
                      >
                        {li}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
