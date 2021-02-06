import React from "react";
import "../App.css";
import me from "./me.jpg";
import Nav from "./Nav";
// import { Link } from "react-router-dom";
import {
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
function Home() {
  return (
    <div className="section">
      <Nav />
      <div className="main">
        <div className="intro-card">
          <div>
            <h2 style={{ marginBottom: 10, lineHeight: 1 }}>
              CHAKRAVARTHI GIDUTHURI
            </h2>
            <h3>Web developer | Free Lancer | Learner</h3>
          </div>
          <br />
          <div>
            <p>
              I am a mechanical engineer. But my passion makes me learn
              Programming languages. I was developed many personal full-stack
              web applications. I am using the Django framework on the backend
              and Reactjs on the frontend
            </p>
          </div>
        </div>
        <img className="element" src={me} alt="name" />
      </div>
      <div className="footer">
        <a href="https://www.instagram.com/madcodder/">
          <InstagramOutlined />
        </a>
        <a href="https://github.com/chakravarthi-giduthuri">
          <GithubOutlined />
        </a>
        <a href="https://www.linkedin.com/in/chakravarthigiduthuri/">
          <LinkedinOutlined />
        </a>
      </div>
    </div>
  );
}

export default Home;
