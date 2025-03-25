import React from "react";
import ToolBox from "./ToolBox"; // Importar ToolBox
import {TOOLS} from "@/constants/constants.js"

function ToolList() {
  return (
    <div className="container mx-auto">
      {Object.entries(TOOLS).map(([category, tools]) => (
        <ToolBox key={category} category={category} tools={tools} />
      ))}
    </div>
  );
}

export default ToolList;
