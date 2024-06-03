import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Aayush Byanjankar. </span>
            <span className="purple"></span>
            <br />
            I am currently looking for Full time Software Developer position.
            <br />
            I have completed my undergraduate in Computer Science from Southeast 
            Missouri State University. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking Trails
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Sports (UFC, NBA, Soccer)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
