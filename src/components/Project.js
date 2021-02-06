import React from "react";
import { CodeOutlined, LinkOutlined } from "@ant-design/icons";
import "../App.css";
function Project({ Projects }) {
  return (
    <div>
      <div>
        <div className="head">
          <h2 className="title">django</h2>
          <div className="under">
            <div className="underline"></div>
            <div className="dot"></div>
            <div className="underline"></div>
          </div>
        </div>
        <div className="project-card">
          {Projects.map((project) => {
            if (project.category === "django") {
              return (
                <article key={project.id} className="art">
                  <img className="photo" src={project.img} alt="python" />
                  <div className="icons">
                    <a href={project.github}>
                      <CodeOutlined style={{ fontSize: 30, marginRight: 20 }} />
                    </a>
                    <a href={project.link}>
                      <LinkOutlined style={{ fontSize: 30 }} />
                    </a>
                  </div>
                </article>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div>
        <div className="head">
          <h2 className="title">React</h2>
          <div className="under">
            <div className="underline"></div>
            <div className="dot"></div>
            <div className="underline"></div>
          </div>
        </div>
        <div className="project-card">
          {Projects.map((project) => {
            if (project.category === "react") {
              return (
                <article key={project.id} className="art">
                  <img className="photo" src={project.img} alt="python" />
                  <div className="icons">
                    <a href={project.github}>
                      <CodeOutlined style={{ fontSize: 30, marginRight: 20 }} />
                    </a>
                    <a href={project.link}>
                      <LinkOutlined style={{ fontSize: 30 }} />
                    </a>
                  </div>
                </article>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
