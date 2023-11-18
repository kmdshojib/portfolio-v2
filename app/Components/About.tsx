import Badge from "./Badge";
import Card from "./Card";

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
    <div className="flex flex-col mt-5">
      <h1 className="text-xl md:text-5xl font-mono font-black mb-3">
        Kamruzamn Shojib
      </h1>
      <p className="font-mono text-sm md:text-lg">
        <span className="underline decoration-[#02aab0] font-bold">
          Full Stack
        </span>
        <> </> Developer
      </p>
      
      <br />
      {/* description */}
      <p className="font-mono text-justify text-sm md:text-base">
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
          <Card title="Front-End:">
            {frontEndSkills.map((item: string, index: number) => {
              return <Badge key={index++} item={item} />;
            })}
          </Card>
          <Card title="Backend:">
            {backEndSkills.map((item: string, index: number) => {
              return <Badge key={index++} item={item} />;
            })}
          </Card>
          <Card title="Familiar:">
            {familiarSkills.map((item: string, index: number) => {
              return <Badge key={index++} item={item} />;
            })}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
