// import { BrowserRouter as Router } from "react-router-dom";

import React from "react";

const projectList: Project[] = [
  { id: 1, name: "Project A", description: "Description for Project A" },
  { id: 2, name: "Project B", description: "Description for Project B" },
  { id: 3, name: "Project C", description: "Description for Project C" },
  { id: 4, name: "Project D", description: "Description for Project D" },
  { id: 5, name: "Project E", description: "Description for Project E" },
  { id: 6, name: "Project F", description: "Description for Project F" },
  { id: 7, name: "Project A", description: "Description for Project A" },
  { id: 8, name: "Project B", description: "Description for Project B" },
  { id: 9, name: "Project C", description: "Description for Project C" },
  { id: 10, name: "Project D", description: "Description for Project D" },
  { id: 11, name: "Project E", description: "Description for Project E" },
  { id: 12, name: "Project F", description: "Description for Project F" },
  // Add more projects as needed
];

import ProjectsList, { Project } from "../src/components/Projects"; // Assuming both files are in the same directory

const HomePage = () => {
  return (
    <div className="homePage">
      <ProjectsList projects={projectList} />
    </div>
  );
};

export default HomePage;
