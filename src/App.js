import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/profile_pic_icon.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <img src={profile} alt="profile-pic" className="profile" />
        <h1> Hello! </h1>
        <p> My name is Vamshee. I'm a Software Engineer.</p>
        <p> I'm always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p> I live in Hyderabad, India and I code every day.</p>
            <p>
              My Favourite language is JavaScript, and I think React.js is
              Awesome.
            </p>
            <p> Besides coding, I also love music and running. </p>
            <button onClick={this.toggleDisplayBio}> Show less </button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects /> {/* Lecture - 18 */}
        <SocialProfiles /> {/* Lecture - 20 */}
      </div>
    );
  }
}

export default App;
