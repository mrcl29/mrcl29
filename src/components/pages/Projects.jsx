import { PROJECTS, ALCORT } from "@/constants/constants.js"
import ProjectCard from "@/components/projects/ProjectCard.jsx";

const Projects = () => {
    return (
      <div className="mt-10 px-4 w-full">
        <h1 className="mb-5 text-lg sm:text-1xl md:text-2xl lg:text-4xl font-bold">Proyectos</h1>
        <ProjectCard name="hola" image={ALCORT} description="hola como estás" url="youtube.com" />
      </div>
    );
  };
  
  export default Projects;