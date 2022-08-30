import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="purple">Adefeyitimi Gbolahan Adeyeloja </span>
            from <span className="purple"> Nigeria.</span>
            <br />Since beginning my journey as a Web <span className="purple">Developer</span>, 
            I've done remote jobs for <span className="purple">agencies</span>, consulted for <span className="purple">startups</span>, and collaborated with the most talented people to create digital products for both business and customer use. In my free time, I write on <span className="purple">Medium</span> , I'm always looking to improve my <span className="purple">skills</span> having one tech problem solved at a time.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul> 
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "The way to get started is to quit talking and begin doing."{" "}
          </p>
          <footer className="blockquote-footer">Walt Disney</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
