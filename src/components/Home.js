import React from "react";
import "../App.css";
import me from "./me.jpg";
import Nav from "./Nav";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              fuga in consequuntur tempora. Rerum, deleniti quaerat? Provident
              consequuntur perferendis recusandae quisquam saepe cum, inventore,
              maxime eveniet temporibus ut, nemo minus!
            </p>
          </div>
        </div>
        <img className="element" src={me} alt="name" />
      </div>
    </div>
  );
}

export default Home;
