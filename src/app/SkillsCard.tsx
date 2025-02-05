export default function SkillsCard() {
  return (
    <div className="flex flex-col  h-full  snap-start justify-start  mt-[10vh] gap-6">
      <h1 className=" text-[52px] lg:text-9xl text-foreground font-bold lg:leading-[90%] leading-[90%] uppercase ">
        Skills <br></br>
        <span className="text-mygray-200">Acquired</span>
      </h1>
      <div className="flex flex-wrap  h-full  snap-start justify-start gap-5 ">
        {["http", "gradle", "rest api"].map((li, i) => {
          return (
            <div
              className="flex flex-col gap-3 max-w-[60px] lg:max-w-[100px]"
              key={i}
            >
              <div className=" min-w-[60px] lg:min-w-[100px] lg:min-h-[100px] w-full min-h-[60px] bg-mygray-200 "></div>
              <p className="text-mygray-300">{li}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
