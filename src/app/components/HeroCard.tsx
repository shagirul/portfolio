import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export default function HeroCard() {
  return (
    <div className="min-h-full w-full flex flex-col  flex-grow-0 justify-between gap-6">
      <div className="w-full aspect-[9/12] lg:aspect-[4/3] bg-mygray-200 max-h-[50vh]"></div>
      <div className="flex flex-col gap-3">
        <p className="uppercase font-bold text-5xl leading-[90%]">
          shagirul <br></br>hassan
        </p>
        <div className="flex lg:flex-col lg:w-full w-fit gap-4">
          <div className="flex gap-3 items-end">
            <Mail className="text-orange-accent" />{" "}
            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              shagirul@gmail.com
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <Phone className="text-orange-accent" />{" "}
            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              +918860048782
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <Linkedin className="text-orange-accent" />{" "}
            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              linkedin.com/in/shagirul-hassan
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <Twitter className="text-orange-accent" />{" "}
            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              Twitter/shagirul
            </p>
          </div>
          <div className="flex gap-3 items-end">
            <Github className="text-orange-accent" />{" "}
            <p className="hidden lg:block text-base font-medium text-mygray-300 leading-tight">
              https://github.com/shagirul
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
