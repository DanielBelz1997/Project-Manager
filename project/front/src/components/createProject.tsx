import React from "react";
import { FloatingLabelInput } from "./FloatingLabelInput";

export const CreateProject = () => {
  return (
    <div className="createProject">
      <div className="projectName">
        <h5 className="parargraphProjectName">the new project name?</h5>
        <div style={{ paddingLeft: "143px" }}>
          <FloatingLabelInput />
        </div>
      </div>
      <div className="chooseTeamMembers">
        <h5>Choose Team Members:</h5>
      </div>
    </div>
  );
};
