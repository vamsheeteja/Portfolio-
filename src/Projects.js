import React, { Component } from "react";
import PROJECTS from "./data/projects";

class Project extends Component {
  render() {
    // console.log("this.props", this.props);
    // return <div>{this.props.project.title}</div>;

    // Rather than reaching into this.props that project to access each value every time we can make local conostants foro each of these values in the render method by using JavaScript destructuring Syntax.
    const { title, image, description, link } = this.props.project;

    return (
      <div style={{ display: "inline-block", width: 300, margin: 10 }}>
        <h3>{title}</h3>
        <img src={image} alt="image" style={{ width: 200, height: 120 }} />
        <p>{description}</p>
        <a href={link}>link</a>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {/* <div>{PROJECTS[0].title}</div>
          <div>{PROJECTS[1].title}</div>
          <div>{PROJECTS[2].title}</div> */}
          {/* more efficient code */}
          {PROJECTS.map((PROJECT) => {
            return <Project key={PROJECT.id} project={PROJECT} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
