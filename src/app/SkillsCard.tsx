export default function SkillsCard() {
  return (
    <div className="flex flex-col  h-full  snap-start justify-start   gap-6">
      <h1 className=" text-[52px] lg:text-9xl text-foreground font-bold lg:leading-[90%] leading-[90%] uppercase ">
        Skills <br></br>
        <span className="text-mygray-200">Acquired</span>
      </h1>
      <div className="flex flex-wrap  h-full  snap-start justify-start gap-4 lg:gap-10 ">
        {[
          "http",
          "gradle",
          "rest api",
          "redis",
          "node",
          "typescript",
          "Design system",
          "LLD",
          "gradle",
          "rest api",
          "redis",
          "node",
          "typescript",
        ].map((li, i) => {
          return (
            <div className="flex flex-col gap-3  items-center" key={i}>
              <div className=" w-full  bg-mygray-200  aspect-square min-w-[100px] h-auto rounded-lg"></div>
              <p className="text-mygray-300 max-w-[100px] text-center">{li}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
