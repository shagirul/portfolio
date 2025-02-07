export default function Highlight() {
  return (
    <div className="w-full flex flex-col gap-6">
      <h2 className="text-2xl font-medium text-white">
        Fetch quotes and compute annualised returns
      </h2>
      <div className="flex flex-col gap-4">
        <p className="capitalize text-mygray-300">Scope of work</p>
        <ol className="ml-11 gap-2 flex flex-col list-disc  text-mygray-300 text-sm lg:text-lg">
          {[
            "Made use of different features of VSCode IDE to build the project.",
            "Built feature of a calculator by taking OOPS Principles into consideration.",
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
      <div className="flex flex-col gap-4">
        <p className="capitalize text-mygray-300">Skills Used</p>
        <div className="flex flex-wrap  gap-3 py-[10px] ">
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
                className="py-2  px-4 bg-mygray-300/20 text-white/60 rounded text-xs lg:text-base  "
                key={i}
              >
                {li}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
