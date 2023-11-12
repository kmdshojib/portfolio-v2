const About: React.FC = () => {
  const frontEndSkills: string[] = [
    "HTML",
    "CSS",
    "BootStrap",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux-Tollkit",
    "RTK-Query",
  ];
  const backEndSkills: string[] = [
    "NodeJS",
    "ExpressJS",
    "MonoDB",
    "MongooseODM",
    "Firebase",
  ];
  const familiarSkills: string[] = [
    "Jquery",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "Linux",
    "Syled Components",
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl md:text-5xl font-mono font-black mb-3">
        Kamruzamn Shojib
      </h1>
      <p className="font-mono text-lg">
        <span className="underline decoration-[#02aab0] font-bold">
          Full Stack
        </span>
        <> </> Developer
      </p>
      <br />
      {/* description */}
      <p className="font-mono text-justify ">
        Passionate about digital experiences, my web development journey began
        in 2021. From the first console &quot;Hello World&quot; I delved into
        the intricacies of software development. As a{" "}
        <span className="font-bold text-neutral-500">Full Stack Developer</span>
        , I thrive on dynamic challenges in creating and enhancing online
        environments. Beyond a profession, software development is my constant
        muse, propelling me to embrace the ever-evolving landscape and
        consistently push the boundaries of my knowledge. Join me on this
        exciting expedition where each line of code is a brushstroke on the
        canvas of innovation, and every project is an opportunity for growth and
        refinement.
      </p>
      <br />
      <br />
      {/* skills */}
      <div>
        <p className="font-bold text-lg font-mono mb-2">Recent Technologies:</p>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <p className="font-semibold font-mono mb-1">Front-End:</p>
            {frontEndSkills.map((item: string, index: number) => {
              return (
                <p
                  key={index++}
                  className=" mt-1 mb-1 md:mr-1 badge badge-sm text-[14px] font-mono text-[#02aab0] font-bold hover:underline hover:cursor-pointer"
                >
                  {item}
                </p>
              );
            })}
          </div>

          <div className="md:w-1/3 mt-1 md:mt-0">
            <p className="font-semibold font-mono">Backend:</p>
            {backEndSkills.map((item: string, index: number) => {
              return (
                <p
                  key={index++}
                  className=" mt-1 mb-1 md:mr-1 badge badge-sm text-[14px] font-mono text-[#02aab0] font-bold hover:underline hover:cursor-pointer"
                >
                  {item}
                </p>
              );
            })}
          </div>

          <div className="md:w-1/3 mt-1 md:mt-0">
            <p className="font-semibold font-mono">Familiar:</p>
            {familiarSkills.map((item: string, index: number) => {
              return (
                <p
                  key={index++}
                  className=" mt-1 mb-1 md:mr-1 badge badge-sm text-[14px] font-mono text-[#02aab0] font-bold hover:underline hover:cursor-pointer"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
