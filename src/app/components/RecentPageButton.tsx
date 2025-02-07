"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RecentPageButton({ size = "48px" }: { size: string }) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <ChevronLeft size={size} />
    </button>
  );
}
