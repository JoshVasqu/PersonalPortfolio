import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Joshua Vasquez</span>{" "}
            from <span className="purple">Texas, United States of America</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Substitute Teacher</span> at{" "}
            <span className="purple">Katy ISD</span>.
            <br />I hold an Bachleor Degree in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">UTSA</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Family 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
