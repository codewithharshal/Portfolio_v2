import React from "react";
import Tools from "../Components/Tools";
import toolsicon from "../assets/ToolsIcon/toolsicon";

const Tool = (props) => {
  return (
    <div>
      <Tools
        BoxClass="max-w-md min-h-[290px]  bg-[#121112] border border-[#28282B] rounded-2xl p-5 md:px-10 md:py-10"
        className="w-15 h-15 bg-[#141314] border rounded-xl border-[#26252C] text-white flex items-center justify-center p-4"
        Section="Tools"
        Icon={{
          figma: toolsicon.figma,
          postman: toolsicon.postman,
          render: toolsicon.render,
          vite: toolsicon.vite,
          vscode: toolsicon.vscode,
        }}
      />
    </div>
  );
};

export default Tool;
