import React from "react";

const Card = ({ children, title }: any) => {
  return (
    <div className="md:w-1/3 rounded-lg border border-transparent px-5 py-4  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <p className="font-semibold font-mono mb-1">{title}</p>
      {children}
    </div>
  );
};

export default Card;
