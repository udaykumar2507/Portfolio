import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images
import chatify from "../../Assets/Projects/chatify.jpg";
import mediconnect from "../../Assets/Projects/mediconnect.jpg";
import textutils from "../../Assets/Projects/textutils.jpg";
import expensetracker from "../../Assets/Projects/expensetracker.jpg";
import githunt from "../../Assets/Projects/Githunt.jpg";
import quizapp from "../../Assets/Projects/marvelquiz.jpg";
import weatherapp from "../../Assets/Projects/weatherapp.jpg";
import todolist from "../../Assets/Projects/todolist.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="A real-time chat app built using the MERN stack and Socket.IO. Supports authentication, typing indicators, and secure messaging."
              ghLink="https://github.com/udaykumar2507/Chatify"
              demoLink="https://chatify-3n92.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediconnect}
              isBlog={false}
              title="MediConnect"
              description="A doctor appointment booking app with role-based access for doctors and patients. Built using the MERN stack."
              ghLink="https://github.com/udaykumar2507/MediConnect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isBlog={false}
              title="TextUtils"
              description="A tool to transform and clean text. Includes features like word count, preview, and dark mode."
              ghLink="https://github.com/udaykumar2507/TextUtils"
              demoLink="https://nimble-salamander-278909.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expensetracker}
              isBlog={false}
              title="Expense Tracker"
              description="A simple expense tracker to manage personal finance. Tracks income and expenses with visualization."
              ghLink="https://github.com/udaykumar2507/Expense-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githunt}
              isBlog={false}
              title="GitHunt"
              description="A GitHub account finder app to search and view GitHub user profiles using GitHub API."
              ghLink="https://github.com/udaykumar2507/Github_Account_Finder"
              demoLink="https://65f2fe2ea7ffb3d939c2ec7b--willowy-peony-e76d79.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizapp}
              isBlog={false}
              title="Quiz App"
              description="A JavaScript-based quiz application featuring multiple questions and scoring."
              ghLink="https://github.com/udaykumar2507/JavaScript_Practice_Projects/tree/main/Quiz-App"
              demoLink="https://65e38436ffad92f80618015c--dreamy-bombolone-c554a0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="A weather information app using OpenWeatherMap API. Displays temperature, condition, and location-based weather."
              ghLink="https://github.com/udaykumar2507/JavaScript_Practice_Projects/tree/main/Weather%20App"
              demoLink="https://65e0b79003b95527105ae196--gleaming-taiyaki-3a2a01.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-Do List"
              description="A simple task management app to add and delete tasks. Built using vanilla JavaScript."
              ghLink="https://github.com/udaykumar2507/JavaScript_Practice_Projects/tree/main/To-Do-List"
              demoLink="https://65dcd557ffbd6f0dd495e82b--luxury-praline-e251c2.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
