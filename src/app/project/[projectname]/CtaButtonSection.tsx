import { Github, Zap } from "lucide-react";
import Link from "next/link";

export default function CtaSection({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      className={` flex gap-3   bg-background  flex-grow-0 w-full ${
        isMobile ? "fixed bottom-0 w-[90%] pt-4 pb-8" : "static px-5"
      } `}
    >
      <Link
        className="w-full h-full rounded flex gap-2 bg-orange-accent items-center justify-center px-4 py-2"
        href={"/project"}
      >
        <Zap opacity={"50%"} color="black" />
        <p className="text-white font-semibold text-lg text-opacity-80">
          Live Link
        </p>
      </Link>
      <Link
        className="w-full h-full rounded flex gap-2  bg-green-accent px-4 py-2  items-center justify-center"
        href={"/project"}
      >
        <Github opacity={"50%"} color="black" />
        <p className="text-black font-semibold text-lg text-opacity-80">
          Git Repo
        </p>
      </Link>
    </div>
  );
}
