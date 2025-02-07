export default function OverViewCard() {
  return (
    <div className="flex flex-col gap-11">
      <div className="flex flex-col gap-3">
        <h1 className=" text-[52px] lg:text-9xl text-foreground font-bold lg:leading-[90%] leading-[90%] uppercase ">
          Overview <br></br>
          {/* <span className="text-mygray-200">engineer</span> */}
        </h1>
        <p className=" text-sm lg:text-lg text-mygray-300 max-w-[80%]">
          This project aims to obtain basic skills in Java and OOPs principles
          by building a subset of features seen in calculators.. During the
          course of this Micro-Experience, the developer
        </p>
      </div>
      <ol className="ml-11 gap-2 flex flex-col list-disc  text-mygray-300 text-sm lg:text-lg">
        {[
          "Implemented the core logic of the portfolio manager and published it as a library.",
          "Implemented the core logic of the portfolio manager and published it as a library.",
          "Implemented the core logic of the portfolio manager and published it as a library.",
          "Implemented the core logic of the portfolio manager and published it as a library.",
          // "Implemented the core logic of the portfolio manager and published it as a library.",
          // "Implemented the core logic of the portfolio manager and published it as a library.",
        ].map((hi, i) => {
          return (
            <li key={i} className="">
              {hi}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
