import { Briefcase, FilePenLine, Folder, House, Newspaper } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed  w-screen  h-fit  p-4 pb-8 lg:p-8 lg:pb-16  flex items-center justify-center">
      <div className=" lg:w-fit flex justify-between items-center px-6 py-3 bg-mygray-100 rounded-lg gap-8">
        <Link href={"/"}>
          <House />
        </Link>
        <Link href={"/project"}>
          <Folder />
        </Link>
        <Link href={"/work"}>
          <Briefcase />
        </Link>
        <Link href={"/blog"}>
          <Newspaper />
        </Link>
      </div>
    </div>
  );
}
