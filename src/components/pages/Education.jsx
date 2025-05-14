import { EDUCATION } from "@/constants/constants.js";
import EducationCard from "@/components/education/EducationCard.jsx";

const Education = () => {
    return (
      <div className="mt-10 px-5 w-full">
      <h1 className="mb-4 text-lg sm:text-1xl md:text-2xl lg:text-4xl font-bold">
        Formación
      </h1>

      {Object.entries(EDUCATION).map(([name, info]) => (
        <EducationCard
          key={name}
          name={name}
          where={info.where}
          image={info.image}
          from={info.from}
          to={info.to}
          url={info.url}
        />
      ))}
    </div>
    );
  };
  
  export default Education;