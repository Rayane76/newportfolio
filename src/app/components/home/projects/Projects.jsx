import SectionTitle from "../../SectionTitle";
import Card from "../Card";
import { projects } from "../../../data/projects";

function Projects() {
  return (
    <div id="projects" className="flex justify-center w-full">
      <div
        style={{ maxWidth: "1200px", width: "1200px" }}
        className="flex flex-col text-left justify-between pt-8 relative"
      >
        <div>
          <SectionTitle title="Real-World Projects." />
        </div>
        <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start mt-5">
          {projects.map((project) => (
            <Card
              key={project.slug}
              image={project.media?.[0]?.src || ""}
              title={project.title}
              desc={project.desc}
              techs={project.techs}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
