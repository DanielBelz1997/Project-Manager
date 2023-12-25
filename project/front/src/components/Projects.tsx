import React from "react";

export interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectButtonProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ project, onClick }) => {
  return (
    <button
      className="project-button" // Add a custom class for the button
      onClick={() => onClick(project)}
    >
      {project.name}
    </button>
  );
};

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  const handleButtonClick = (project: Project) => {
    console.log(`Clicked on project: ${project.name}`);
  };

  return (
    <div className="projects-list">
      {" "}
      {/* Add a custom class for the ProjectsList component */}
      <h1 className="projects-list-heading">Projects</h1>{" "}
      {/* Add a custom class for the heading */}
      {projects.map((project) => (
        <ProjectButton
          key={project.id}
          project={project}
          onClick={handleButtonClick}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
