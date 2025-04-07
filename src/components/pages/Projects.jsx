import { PROJECTS, CONTACT } from "@/constants/constants.js";
import ProjectCard from "@/components/projects/ProjectCard.jsx";

const Projects = () => {
  return (
    <div className="mt-10 px-4 w-full">
      <h1 className="mb-4 text-lg sm:text-1xl md:text-2xl lg:text-4xl font-bold">
        Proyectos
      </h1>
      {Object.entries(PROJECTS).map(([name, info]) => (
        <ProjectCard
          name={name}
          image={info.image}
          description={info.description}
          url={info.url}
          tools={info.tools}
        />
      ))}
      <a
        href={CONTACT.GitHub.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-left text-blue-100 inline-block font-bold underline"
      >
        Explorar más proyectos &rarr;
      </a>
    </div>
  );
};

export default Projects;
