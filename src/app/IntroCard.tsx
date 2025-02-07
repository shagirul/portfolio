export default function IntroCard() {
  return (
    <div className="flex flex-col gap-6 h-full min-h-[200px] snap-start justify-end  ">
      <div className="flex flex-col gap-3">
        <h1 className=" text-[52px] lg:text-9xl text-foreground font-bold lg:leading-[90%] leading-[90%] uppercase ">
          software <br></br>
          <span className="text-mygray-200">engineer</span>
        </h1>
        <p className=" text-sm lg:text-lg text-mygray-300 max-w-[500px]">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <div className="flex  gap-6 uppercase">
        <div className="flex flex-col">
          <p className="font-semibold text-white lg:text-7xl text-4xl">2+</p>
          <p className="leading-tight text-mygray-300 lg:text-xl text-xs">
            YEAR OF <br /> EXPERIENCE
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-white lg:text-7xl text-4xl">5+</p>
          <p className="leading-tight text-mygray-300 lg:text-xl text-xs">
            PROFESSIONAL <br /> projects
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-white lg:text-7xl text-4xl">5+</p>
          <p className="leading-tight text-mygray-300 lg:text-xl text-xs">
            DSA <br /> problems
          </p>
        </div>
      </div>
    </div>
  );
}
