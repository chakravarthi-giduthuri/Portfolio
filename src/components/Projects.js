import React from "react";
import Nav from "./Nav";
import "../App.css";
import python from "./Python.jpg";
import django from "./django.jpeg";
import js from "./js.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <Nav />
      <div>
        <div>
          <div class="head">
            <h2 class="title">Python</h2>
            <div class="under">
              <div class="underline"></div>
              <div class="dot"></div>
              <div class="underline"></div>
            </div>
          </div>
          <div className="project-card">
            <article className="art">
              <img className="photo" src={python} alt="python" />
              <Link>
                <button>link</button>
              </Link>
            </article>
            <article className="art">
              <img className="photo" src={django} alt="django" />
              <button>link</button>
            </article>
            <article className="art">
              <img className="photo" src={js} alt="js" />
              <button>link</button>
            </article>
            <article className="art">
              <img className="photo" src={js} alt="js" />
              <button>link</button>
            </article>
          </div>
        </div>
        <div>
          <div class="head">
            <h2 class="title">Python</h2>
            <div class="under">
              <div class="underline"></div>
              <div class="dot"></div>
              <div class="underline"></div>
            </div>
          </div>
          <div className="project-card">
            <article className="art">
              <img className="photo" src={python} alt="python" />
              <button>link</button>
            </article>
            <article className="art">
              <img className="photo" src={django} alt="python" />
              <button>link</button>
            </article>
            <article className="art">
              <img className="photo" src={js} alt="python" />
              <button>link</button>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
