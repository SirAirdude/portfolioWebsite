import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div>
        <h2>These are the projects I have worked on</h2>
        <ul>
          <li>
            Simon Says
            <br />
            Play the game{" "}
            <a href="https://sirairdude.github.io/ga-project1-simon/">here</a>
            <br />
            Repo is hosted
            <a href="https://github.com/SirAirdude/ga-project1-simon"> here</a>
          </li>
          <br />
          <li>
            Database API for Digimon Cyber Sleuth <br />
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
          </li>
          <li>
            AnimeMe: a website for anime synopsis and tracking user favorites{" "}
            <br />
            API is hosted <a href="https://animeme-api.herokuapp.com/">here</a>
            <br />
            Repo is hosted{" "}
            <a href="https://github.com/SirAirdude/ga-project-3-animeDB-api">
              here
            </a>
            Website is hosted <a href="http://animeme.surge.sh/">here</a>
            <br />
            <a href="https://github.com/KeeneWong/Animeme">here</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Project;
