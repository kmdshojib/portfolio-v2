import React, { ReactNode } from "react";
import Badge from "../Badge";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  projcectTitle: string;
  liveUrl: string;
  cilentCodeUrl: string;
  serverCode: string;
  description: string;
  projectFeacureA: string;
  projectFeacureB: string;
  imageURl: string | StaticImageData;
  children: ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projcectTitle,
  liveUrl,
  cilentCodeUrl,
  serverCode,
  description,
  projectFeacureA,
  projectFeacureB,
  children,
  imageURl,
}) => {
  return (
    <div className=" rounded-lg border border-transparent px-5 py-4  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <div className="flex flex-col md:flex-row">
        <Image
          className="w-full object-contain mr-0 md:mr-2 md:w-1/4"
          width={100}
          height={100}
          alt="peoject-image"
          src={imageURl}
        />
        <div>
          <div className="flex justify-between mb-1">
            <p className="text-sm  md:text-lg font-semibold font-mono">
              {projcectTitle}
            </p>
            <div>
              <Link href={liveUrl} target="_blank">
                <Badge item="Live" />
              </Link>
              <Link href={cilentCodeUrl} target="_blank">
                <Badge item="Cilent-Code" />
              </Link>
              <Link href={serverCode} target="_blank">
                <Badge item="Server-Code" />
              </Link>
            </div>
          </div>
          <p className="text-xs sm:text-sm md:text-base font-mono">
            {description}
          </p>
          <div>
            <p className="font-semibold font-mono text-xs sm:text-sm md:text-base">
              Features:
            </p>
            <ul>
              <li className="font-mono text-xs sm:text-sm md:text-base">
                {projectFeacureA}
              </li>
              <li className="font-mono text-xs sm:text-sm md:text-base">
                {projectFeacureB}
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold font-mono text-xs sm:text-sm md:text-base">
              Technology:
            </p>
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
