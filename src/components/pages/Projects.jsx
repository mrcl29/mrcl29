import { PROJECTS, CONTACT } from "@/constants/constants.js";
import ProjectCard from "@/components/projects/ProjectCard.jsx";

const Projects = () => {
  return (
    <div className="mt-10 px-5 w-full">
      <h1 className="mb-4 text-lg sm:text-1xl md:text-2xl lg:text-4xl font-bold">
        Proyectos
      </h1>

      {Object.entries(PROJECTS).map(([name, info]) => (
        <ProjectCard
          key={name}
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
        className="group w-min h-min"
      >
        <div className="w-min h-min bg-gray-900 p-4 m-0 flex items-center rounded-3xl my-5 border-2 border-white">
          {/* Botón "Explorar más proyectos" */}
          <p className="text-left text-gray-200 font-extrabold whitespace-nowrap overflow-hidden text-ellipsis relative italic">
            Explorar más proyectos &rarr;
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default Projects;
