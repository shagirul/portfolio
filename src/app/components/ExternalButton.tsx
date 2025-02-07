"use client";

import { useRouter } from "next/navigation";
import { JSX } from "react";

interface ExternalButtonProps {
  href: string;
  icon: JSX.Element;
  text: string;
  variant?: "orange" | "green" | "default"; // Optional variant
}

export default function ExternalButton({
  href,
  icon,
  text,
  variant = "default", // Default variant
}: ExternalButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(href);
  };

  let buttonClasses =
    "w-full h-full rounded flex gap-2 items-center justify-center px-4 py-2";
  let textColorClass = "text-white"; // Default text color

  switch (variant) {
    case "orange":
      buttonClasses += " bg-orange-accent";
      break;
    case "green":
      buttonClasses += " bg-green-accent";
      textColorClass = "text-black"; // Change text color for green variant
      break;
    default:
      buttonClasses += " bg-mygray-300/20 ";
      textColorClass = "text-white/60";
      break;
  }

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {icon}
      <p className={`font-semibold text-lg text-opacity-80  ${textColorClass}`}>
        {text}
      </p>
    </button>
  );
}
