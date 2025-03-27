import React from "react";
import ToolBox from "./ToolBox"; // Importar ToolBox
import { TOOLS } from "@/constants/constants.js";

function ToolList() {
  return (
    <div className="flex flex-col justify-between h-full py-10 px-5 overflow-scroll">
      {Object.entries(TOOLS).map(([category, tools]) => (
        <ToolBox key={category} category={category} tools={tools} />
      ))}
    </div>
  );
}

export default ToolList;
