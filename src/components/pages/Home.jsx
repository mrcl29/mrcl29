import ToolList from "../tools/ToolList";
import ToolBox from "../tools/ToolBox"; // Importar ToolBox
import { TOOLS } from "@/constants/constants.js";

const Home = () => {
  return (
    <div className="w-full h-full">
      {Object.entries(TOOLS).map(([category, tools]) => (
        <ToolBox key={category} category={category} tools={tools} />
      ))}
    </div>
  );
};

export default Home;

// function ToolList() {
//   return (
//     <div className="flex flex-col justify-between h-full pb-8 px-5 overflow-scroll">
//       {Object.entries(TOOLS).map(([category, tools]) => (
//         <ToolBox key={category} category={category} tools={tools} />
//       ))}
//     </div>
//   );
// }

// export default ToolList;
