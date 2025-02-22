import React from "react";
import Nav from "./Nav";

function About() {
  return (
    <div>
      <Nav />
      <div className="head">
        <h2 className="title">About Me</h2>
        <div className="under">
          <div className="underline"></div>
          <div className="dot"></div>
          <div className="underline"></div>
        </div>
      </div>
      <div className="card">
        <p>
          I am a mechanical engineer. But ever since I was a kid, software
          development was my passion. But I don't know where to start and how to
          start there is no one to help me. Because of this curiosity and
          passion, I was started learning on my own. This helps me to improve my
          self-teaching, self-learning,self-analyzing skills. After that, I was
          done some research and started learning the 'c' language by reading
          documentation. Later, I came to know that learning the programming
          language by reading the documentation was very difficult for people
          who don't have any programming background, So I quit learning the 'c'
          language. After doing some research and watching some tutorials on
          YouTube, I decided to learn python. As compared with the 'c' language
          Python syntax is very simple and easy to understand. So I started
          learning Python and all related libraries. I have enjoyed it a lot, by
          doing some crazy stuff with python. I had done projects with the help
          of python. This is the starting point of my journey towards software
          development. After that, I never stop learning cool things. Currently,
          I am learning JavaScript which, I think very require for frontend web
          development. So, now, in industry, this passion remains with me.
          There's certainly yet more to learn, yet more problems to solve, and
          yet more to build. And for this, I am very grateful.
        </p>
        <p className="lang lan">Languages: Python, JavaScript</p>
        <p className="lan">Frameworks: Django, Reactjs</p>
      </div>
    </div>
  );
}

export default About;
