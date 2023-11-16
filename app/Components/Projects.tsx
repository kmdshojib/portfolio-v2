import React from "react";
import Card from "./Card";
import Badge from "./Badge";

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
          <div className="flex">
            <Badge item="React" />
            <Badge item="Tailwind" />
            <Badge item="TypeScript" />
            <Badge item="NextJs" />
            <Badge item="Redux-Toolkit" />
          </div>
        </div>
        <Badge item="Live" />
        <Badge item="Cilent Code" />
        <Badge item="Server" />
      </Card>
    </div>
  );
};

export default Projects;
