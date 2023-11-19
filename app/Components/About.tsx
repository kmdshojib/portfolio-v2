import Badge from "./Badge";
import Card from "./Card";
import Link from "next/link";
// import Resume from "../Kamruzaman_Shojib_Full-Stack _Resume.pdf"
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
    <div data-name="about" id="about" className="flex flex-col mt-5">
      <h1 className="text-xl md:text-5xl font-mono font-black mb-3">
        Kamruzamn Shojib
      </h1>
      <p className="font-mono text-sm md:text-lg">
        <span className="underline decoration-[#02aab0] font-bold">
          Full Stack
        </span>
        <> </> Developer
      </p>
      <Link href="https://drive.google.com/file/d/1q_hljFoCgs8V5D2gBarUD3x6Mcsz75yV/view?usp=sharing" target="_blank" className="font-mono text-sm md:text-lg mt-4">
        See{" "}
        <span className="underline decoration-[#02aab0] font-bold">Resume</span>
      </Link>

      <br />
      {/* description */}
      <p className="font-mono text-justify text-sm md:text-base">
        Enthusiastic{" "}
        <span className="font-bold text-neutral-500">Full Stack Developer</span>{" "}
        Developer since 2021, passionate about pushing the boundaries of web
        development. Embracing innovation, I view each line of code as a
        brushstroke on the canvas of digital experiences.
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
