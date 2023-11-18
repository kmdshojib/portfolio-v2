import React from "react";

interface BadgeProps {
  item: string;
  customKey?: number;
}
const Badge: React.FC<BadgeProps> = ({ item, customKey }) => {
  return (
    <p
      key={customKey}
      className="mt-1 mb-1 md:mr-1 badge badge-sm md:badge-lg text-[14px] font-mono text-[#02aab0] font-bold hover:underline hover:cursor-pointer text-xs sm:text-sm md:text-base"
    >
      {item}
    </p>
  );
};

export default Badge;
