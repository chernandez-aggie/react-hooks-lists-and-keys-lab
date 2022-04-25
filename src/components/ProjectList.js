import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectObjects = projects.map(object => <ProjectItem key = {object.id} {...object}/>)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">      
      {projectObjects}
      </div>
    </div>
  );
}

export default ProjectList;
