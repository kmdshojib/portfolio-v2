import React from "react";
import Card from "./Card";
import Badge from "./Badge";
import Link from "next/link";
import ProjectCard from "./ProjectCard/ProjectCard";
import gadgetGalaxyImage from "../asset/galaxygadget.png";
import laptopSourceImage from "../asset/laptopSource.png";

const Projects = () => {
  return (
    <div name="peojects" id="projects">
      <p className="font-bold text-lg font-mono mb-2">Projects</p>
      <ProjectCard
        imageURl={gadgetGalaxyImage}
        projcectTitle="Gadget Galaxy"
        projectFeacureA=" Shopping Cart"
        projectFeacureB="Advance Search & Sort Product according to Category"
        description="This is a Full Stack Tech E-commerce Web app. Which is dynamic and feature-rich 
      application redefines the online shopping experience."
        liveUrl="https://galaxy-gadget.vercel.app/"
        cilentCodeUrl="https://github.com/kmdshojib/gadget-galaxy"
        serverCode="https://github.com/kmdshojib/gadget-galaxy-backend"
      >
        <Badge item="React" />
        <Badge item="Tailwind" />
        <Badge item="TypeScript" />
        <Badge item="NextJs" />
        <Badge item="Redux-Toolkit" />
        <Badge item="NodeJs" />
        <Badge item="Mongoose" />
        <Badge item="Axios" />
        <Badge item="Stripe" />
      </ProjectCard>

      <ProjectCard
        imageURl={laptopSourceImage}
        projcectTitle="Laptop Source"
        projectFeacureA="Seller Can add Product, Advertise Product on Home"
        projectFeacureB="Stripe Payment System & Admin Dashboard"
        description="Worked on a full-stack laptop resell website that is able to handle and integrat"
        liveUrl="https://laptop-source-c2c00.web.app/"
        cilentCodeUrl="https://github.com/kmdshojib/Laptop-source-client"
        serverCode="https://github.com/kmdshojib/laptop-source-server"
      >
        <Badge item="React" />
        <Badge item="React-Router Dom" />
        <Badge item="Firebase" />
        <Badge item="React-query" />
        <Badge item="Node JS" />
      </ProjectCard>
    </div>
  );
};

export default Projects;
