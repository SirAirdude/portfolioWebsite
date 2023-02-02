import React, { Component } from "react";
import "./Projects.css";
class Project extends Component {
  render() {
    return (
      <div className="projects-page">
        <h2>These are the projects I have worked on</h2>
        <div className="projects-list">
          <div className="project">
            <h3 className="project-name">Who's That Pokemon</h3>
            <p className="project-description">
              A web page that uses a object detection model trained using
              TensorFlow. The model is trained to identify one of five{" "}
              <span className="digimon">Pokemon</span>
            </p>
            <p className="project-hosting">
              Website is hosted <br />{" "}
              <a href="http://whosthatpokemon.surge.sh">here</a>
              <br />
              Repo is hosted{" "}
              <a href="https://github.com/SirAirdude/ga-project-4-pkmn-image-db">
                here
              </a>
            </p>
            <div id="pokemon" className="project-image" />
          </div>
          <br />
          <div className="project">
            <h3 className="project-name">Simon Says</h3>
            <p className="project-description">
              A web page for playing a virtual version of the game{" "}
              <span className="digimon">Simon</span>
            </p>
            <p className="project-hosting">
              Play the game{" "}
              <a href="https://sirairdude.github.io/ga-project1-simon/">here</a>
              <br />
              Repo is hosted
              <a href="https://github.com/SirAirdude/ga-project1-simon">
                {" "}
                here
              </a>
            </p>
            <div id="simon" className="project-image" />
          </div>
          <br />
          <div className="project">
            <h3 className="project-name digimon">Digimon: CyberSleuth API</h3>
            <p className="project-description">
              An API that contains information on all of the Digimon that appear
              in the game <span className="digimon">Digimon: Cyber Sleuth</span>
            </p>
            <p className="project-hosting">
              API is hosted
              <a href="https://digimon-cyber-sleuth-api.herokuapp.com/api/digimon">
                here
              </a>
              <br />
              Repo is hosted
              <a href="https://github.com/SirAirdude/GA-Project-2-DSCS-API">
                {" "}
                here
              </a>
            </p>
            <div className="project-image" id="digimon" />
          </div>
          <br />
          <div className="project">
            <h3 className="project-name">AnimeMe:</h3>
            <p className="project-description">
              a website for anime synopsis and tracking user favorites{" "}
            </p>
            <p className="project-hosting">
              Website is hosted <a href="http://animeme.surge.sh/">here</a>
              <br />
              Repo hosted here
              <a href="https://github.com/KeeneWong/Animeme">here</a>
              <br />
              API is hosted{" "}
              <a href="https://animeme-api.herokuapp.com/">here</a>
              <br />
              Repo is hosted{" "}
              <a href="https://github.com/SirAirdude/ga-project-3-animeDB-api">
                here
              </a>
            </p>
            <div className="project-image" id="animeme">
              placeholder
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;
