import HeroCard from "../components/HeroCard";
import ProjectCard from "../ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col lg:flex-row gap-8 max-w-[1300px] px-5 mx-auto  flex-grow-0">
      <div className="lg:flex hidden lg:min-h-[548px] max-h-[700px]  lg:h-fit w-full lg:w-fit lg:min-w-[344px]  sticky top-[136px]">
        <HeroCard />
      </div>

      <div className="w-full flex flex-col  overflow-scroll snap-y snap-mandatory h-full max-h-full  pb-11  items-start gap-12 lg:gap-24">
        <div className="flex lg:hidden w-full   snap-start ">
          <HeroCard />
        </div>

        <ProjectCard />
      </div>
    </main>
  );
}
