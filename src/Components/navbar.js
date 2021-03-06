import React, { Component } from "react";
import "./style.css";

// import manImage from "./img/man.png";
// import guildImage from "./img/guild.png";
// import communityImage from "./img/community.png";
// import reportImage from "./img/report.png";

// import manImageInv from "./img/maninverted.png";
// import guildImageInv from "./img/guildinverted.png";
// import communityImageInv from "./img/communityinverted.png";
// import reportImageInv from "./img/reportinverted.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="navbar-button">
            <div>
              <i class="fas fa-chart-line fa-5x" />
              <div className="navText">DASH</div>
            </div>
          </div>
          <div className="navbar-button">
            <div>
              <i class="fas fa-users fa-5x" />
              <div className="navText">GUILDS</div>
            </div>
          </div>
          <div className="navbar-button">
            <div>
              <i class="fas fa-user-friends fa-5x" />
              <div className="navText">COMMUNITY</div>
            </div>
          </div>
          <div className="navbar-button">
            <i class="fas fa-poll fa-5x" />
            <div className="navText">REPORTS</div>
          </div>
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import "./style.css";
// import Navbar from "./navbar";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//       </div>
//     );
//   }
// }

// export default App;
