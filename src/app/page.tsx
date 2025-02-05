import HeroCard from "./components/HeroCard";
import IntroCard from "./IntroCard";
import SkillsCard from "./SkillsCard";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row gap-8 max-w-[1300px] px-5 mx-auto lg:pt-40 pt-[102px]">
      <div className="lg:flex hidden lg:min-h-[548px] max-h-[700px] h-[82vh] lg:h-fit w-full lg:w-fit lg:min-w-[344px]  ">
        <HeroCard />
      </div>

      {/* Wrapper that scrolls (not the sticky div itself) */}
      <div className="w-full  overflow-scroll snap-y snap-mandatory h-full max-h-[88vh] lg:max-h-[80vh] gap-5 pb-11 lg:pb-0 items-start">
        <div className="flex lg:hidden w-full min-h-[80vh]  snap-start ">
          <HeroCard />
        </div>
        <IntroCard />
        <SkillsCard />
      </div>
    </main>
  );
}
