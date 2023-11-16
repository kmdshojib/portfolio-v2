import React from "react";
import Card from "./Card";
import Badge from "./Badge";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects">
      <p className="font-bold text-lg font-mono mb-2">Projects</p>
      <Card title="Gadget Galaxy">
        <p>
          This is a Full Stack Tech E-commerce Web app. Which is dynamic and
          feature-rich application redefines the online shopping experience
        </p>
        <div>
          <p className="font-semibold font-mono">Technology:</p>
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
          <div>
            <p className="font-semibold font-mono">Features:</p>
            <ul>
              <li className="font-mono">Shopping Cart</li>
              <li className="font-mono">
                Advance Search & Sort Product according to Category
              </li>
            </ul>
          </div>
        </div>
        <Link href="https://galaxy-gadget.vercel.app/" target="_blank">
          <Badge item="Live" />
        </Link>
        <Link href="https://github.com/kmdshojib/gadget-galaxy" target="_blank">
          <Badge item="Cilent-Code" />
        </Link>
        <Link
          href="https://github.com/kmdshojib/gadget-galaxy-backend"
          target="_blank"
        >
          <Badge item="Server" />
        </Link>
      </Card>
    </div>
  );
};

export default Projects;
