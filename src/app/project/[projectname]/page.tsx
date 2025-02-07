import OverViewCard from "./OverView";
import Highlight from "./Highlight";
import RecentPageButton from "@/app/components/RecentPageButton";
import CtaSection from "./CtaButtonSection";

export default function BlogPost({
  params,
}: {
  params: { projectname: string };
}) {
  return (
    <main className="flex flex-col lg:flex-row gap-8 max-w-[1300px] px-5 mx-auto  flex-grow-0 pb-16">
      <div className="lg:hidden">
        <CtaSection isMobile />
      </div>
      <div className="lg:flex hidden lg:min-h-[548px] max-h-[700px]  lg:h-fit w-full lg:w-fit lg:min-w-[344px]  sticky top-[136px]   flex-col gap-11">
        <div className="flex gap-3 items-start justify-start">
          <RecentPageButton size={"48px"} />
          <div className="max-w-[256px] w-full">
            <p className="text-foreground font-bold text-[2.5rem] uppercase h-auto break-words leading-none pt-1">
              {params.projectname}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 px-6">
          {[
            "Fetch stock quotes and compute annualized stock returns(Highlight)",
            "Refactor using Java interfaces and publish a JAR file",
            "Improve application availability and stability",
          ].map((t, i) => {
            return (
              <p className="font-medium text-mygray-300" key={i}>
                {t}
              </p>
            );
          })}
        </div>
        <CtaSection isMobile={false} />
      </div>

      <div className="w-full flex flex-col  overflow-scroll snap-y snap-mandatory h-full max-h-full  pb-11  items-start gap-12 lg:gap-24">
        <OverViewCard />
        {[1, 2, 3, 4].map((t, i) => {
          return <Highlight key={i} />;
        })}
      </div>
    </main>
  );
}
