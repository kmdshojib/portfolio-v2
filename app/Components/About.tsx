const About: React.FC = () => {
  const frontEndSkills: string[] = [
    "HTML",
    "CSS",
    "BootStrap",
    "TailwindCSS",
    "JavaScript",
    "React",
    "Redux-Tollkit",
    "RTK-Query",
  ];
  return (
    <div className="flex flex-col mx-20">
      <h1 className=" text-3xl md:text-5xl font-mono font-black mb-3">
        Kamruzamn Shojib
      </h1>
      <p className="font-mono text-lg">
        <span className="underline decoration-[#02aab0]">Full Stack</span>
        <> </> Developer
      </p>
      <br />
      {/* description */}
      <p className="font-mono text-justify ">
        Enthusiastic about crafting digital experiences, I embarked on my web
        development journey in 2021 with the humble{"  "}
        <span className="font-bold text-neutral-500">
          &quot;Hello World&quot;
        </span>{" "}
        greeting in the console of my first application. This initial spark
        ignited a fervor within me for the intricacies of software development.
        As a{" "}
        <span className="font-bold text-neutral-500">Full Stack Developer</span>
        , I thrive on the dynamic challenges that come with creating and
        enhancing online environments. Beyond being a profession, software
        development is my constant muse, propelling me to embrace the
        ever-evolving landscape and consistently push the boundaries of my
        knowledge.
        <br />
        Join me on this exciting expedition where each line of code is a
        brushstroke on the canvas of innovation, and every project is an
        opportunity for growth and refinement.
      </p>
      <br />
      {/* skills */}
      <div>
        <p className="font-bold text-lg font-mono">Recent Technologies:</p>
        <br />
        <div className="flex">
          <p className="font-semibold font-mono">Front-End:</p>
          {frontEndSkills.map((item: string, index: number) => {
            return (
              <p
                key={index++}
                className=" mt-1 ml-1 badge badge-sm text-[14px] font-mono text-[#02aab0] font-bold"
              >
                {item}
              </p>
            );
          })}
        </div>
        <div>Backend:</div>
        <div>Familiar</div>
        <div>Other:</div>
      </div>
    </div>
  );
};

export default About;
