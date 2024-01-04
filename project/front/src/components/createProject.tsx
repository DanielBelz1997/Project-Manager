import React from "react";

export const CreateProject = () => {
  return (
    <div className="createProject">
      <div className="projectName">
        <h5 className="parargraphProjectName">the new project name?</h5>
        <input
          placeholder="example: Chat"
          className={"inputCreateProjectBox"}
        />
      </div>
      <div className="chooseTeamMembers">
        <h5>Choose Team Members:</h5>
      </div>
    </div>
  );
};
