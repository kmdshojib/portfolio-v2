import React from "react";
import Badge from "../Badge";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className=" rounded-lg border border-transparent px-5 py-4  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <div className="flex flex-col md:flex-row">
        <Image
          className="w-full object-cover mr-0 md:mr-2 md:w-1/4"
          width={100}
          height={100}
          alt="peoject-image"
          src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
        />
        <div>
          <div className="flex justify-between mb-1">
            <p className="text-sm  md:text-lg font-semibold font-mono">
              Gadget Galaxy
            </p>
            <div>
              <Link href="https://galaxy-gadget.vercel.app/" target="_blank">
                <Badge  item="Live" />
              </Link>
              <Link
                href="https://github.com/kmdshojib/gadget-galaxy"
                target="_blank"
              >
                <Badge  item="Cilent-Code" />
              </Link>
              <Link
                href="https://github.com/kmdshojib/gadget-galaxy-backend"
                target="_blank"
              >
                <Badge item="Server-Code" />
              </Link>
            </div>
          </div>
          <p className="text-xs sm:text-sm md:text-base font-mono">
            This is a Full Stack Tech E-commerce Web app. Which is dynamic and
            feature-rich application redefines the online shopping experience
          </p>
          <div>
            <p className="font-semibold font-mono text-xs sm:text-sm md:text-base">Features:</p>
            <ul>
              <li className="font-mono text-xs sm:text-sm md:text-base">Shopping Cart</li>
              <li className="font-mono text-xs sm:text-sm md:text-base">
                Advance Search & Sort Product according to Category
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold font-mono text-xs sm:text-sm md:text-base">Technology:</p>
            <div className="">
              <Badge item="React" />
              <Badge item="Tailwind" />
              <Badge item="TypeScript" />
              <Badge item="NextJs" />
              <Badge item="Redux-Toolkit" />
              <Badge item="NodeJs" />
              <Badge item="Mongoose" />
              <Badge item="Axios" />
              <Badge item="Stripe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
