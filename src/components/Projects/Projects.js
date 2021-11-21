import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import enroute from "../../Assets/Projects/Portfolio/Enroute/enrouteacademics.png";
import fet from "../../Assets/Projects/Portfolio/fet/fet.com.ng.png";
import tmh from "../../Assets/Projects/Portfolio/The Moon House/the_moon_house_pc.png";
import rhb from "../../Assets/Projects/Portfolio/Reboboth/rehoboth_pc.png";
import everys from "../../Assets/Projects/Portfolio/Everys/everys_pc.png";
import fivenet from "../../Assets/Projects/Portfolio/5net/5net.png";
import ehub from "../../Assets/Projects/Portfolio/Excelhence Hub/excelhence.png";
import myjobselfie from "../../Assets/Projects/Portfolio/MyJobSelfie/index.html.png";
import provest from "../../Assets/Projects/Portfolio/Provest/provest_lg.png";
import nomsycares from "../../Assets/Projects/Portfolio/NomsyCares/index.html.png";


import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          I have a few projects on here I've worked on <br />
          Want to see more?{" "}
          <a href="mailto:adefeyitimi@gmail.com" className="purple">
            Email Me
          </a>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enroute}
              isBlog={false}
              title="Enroute Academics"
              description="
              Your sure route to the United Kingdom.
              Enroute Academics was founded to meet the educational travel consultancy needs of the Nigerian Market to the United Kingdom.

              The organization is a visionary start-up focused on providing consultation, ease and completion of emigration of Nigerians and their families into the United Kingdom.
              "
              link="https://enrouteacademics.travel/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fet}
              isBlog={false}
              title="Fet Online"
              description="Have French language lessons shaped to
              fit your schedule with a trained French
              language teacher. 
              Do you need a community
              where you can meet French
              speakers and practise with?
              You can join here!
              "
              link="https://fet.com.ng"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tmh}
              isBlog={false}
              title="The Moon House"
              description="The Moon House is the perfect hub for crypto education and growth, They offer crypto learning services, mentorship, Building Wealth by investing in cryptocurrency is really easy and you do not even have to be an expert, So why keep your money in the bank when you can have it work for you? The Moon House is offering massive returns on investment."
              link="https://themoonhouse.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rhb}
              isBlog={false}
              title="Rehoboth ENT Hospital"
              description="Rehoboth Ear, Nose and Throat Hospital was established to provide clinical acumen and fine surgical skills to patients with ear, nose and throat challenges. The hospital aims to provide effective and holistic solutions to diseases of ear nose and throat regions of the body. The hospital also strives to promote improvement in patients care through regular upgrading of its facilities."
              link="https://rehobothenthospital.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={everys}
              isBlog={true}
              title="Everys Blog"
              description="Built the Blog using Wordpress, It is a platform that shares content about very interesting topics including DIY, Life Hacks, Lists, Reviews, ASHThursday, Events, Photography, Wildlife/Nature"
              link="https://everys.com.ng/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ehub}
              isBlog={false}
              title="Excelhence Hub"
              description="ExcelHence Hub is a growing community of global experts whose essence is global leadership and expertise that thrives on KNOWLEDGE, ATTITUDE , and SKILLS. The community is dedicated to solving the social problem of unemployment through viability trainings and the communication of perpetual cultures such as teamwork, creativity and ultimately excellence which is achieved by its accountability structure that hinges on practical systems of training and mentorship."
              link="https://provest.pro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nomsycares}
              isBlog={false}
              title="NomsyCares Foundation"
              description="Nomsy Cares Foundation is a registered non profit organisation and Non Governmental Organisation (NGO) They plan and carry out projects relating to the girl child to accomplish their objectives."
              link="https://provest.pro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myjobselfie}
              isBlog={false}
              title="MyJobSelfie"
              description="ExcelHence Hub is a growing community of global experts whose essence is global leadership and expertise that thrives on KNOWLEDGE, ATTITUDE , and SKILLS. The community is dedicated to solving the social problem of unemployment through viability trainings and the communication of perpetual cultures such as teamwork, creativity and ultimately excellence which is achieved by its accountability structure that hinges on practical systems of training and mentorship."
              link="https://provest.pro"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
