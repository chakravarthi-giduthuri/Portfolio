import React, { useState } from "react";
import Nav from "./Nav";
import "../App.css";
import projects from "./Data";
import Project from "./Project";
function Projects() {
  // eslint-disable-next-line
  const [Projects, setProjects] = useState(projects);
  return (
    <div>
      <Nav />
      <Project Projects={Projects} />
    </div>
  );
}

export default Projects;
