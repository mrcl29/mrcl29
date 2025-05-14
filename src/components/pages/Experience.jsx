import { EXPERIENCES } from "@/constants/constants.js";
import ExperienceCard from "@/components/experiences/ExperienceCard.jsx";

const Experience = () => {
  return (
    <div className="mt-10 px-5 w-full">
      <h1 className="mb-4 text-lg sm:text-1xl md:text-2xl lg:text-4xl font-bold">
        Experiencias
      </h1>
      
      {Object.entries(EXPERIENCES).map(([name, info]) => (
        <ExperienceCard
          key={name}
          name={name}
          where={info.where}
          image={info.image}
          from={info.from}
          to={info.to}
          description={info.description}
          url={info.url}
        />
      ))}
    </div>
  );
};

export default Experience;
