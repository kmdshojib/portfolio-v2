import React from "react";
import Card from "./Card";
import Badge from "./Badge";
import Link from "next/link";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div id="projects">
      <p className="font-bold text-lg font-mono mb-2">Projects</p>
      <ProjectCard />
    </div>
  );
};

export default Projects;
