import './App.css';
import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import {Section} from './Functions';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarExample() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Joshua Vasquez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function ProjectNav() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Projects</Navbar.Brand>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Projct 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Project 2
              </NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default function App() {
  return (
    <div className='App'>
      <NavbarExample />
      <Section title={"Hero"} id="home">
        <p>This is the hero section.</p>
      </Section>
      <Section id="about">
        <p>Site made with React. Framework used was React Bootstrap. Then it is being hosted on netlify.</p>
        <p>Framework used was React Bootstrap.</p>
        <p>Then it is being hosted on netlify.</p>
        <hr></hr>
      </Section>
      <Section title={""} id="projects">
        <ProjectNav />
        <p>This is the projects section. Site is WIP.</p>
        <p>Project 1: A web application for managing tasks.</p>
      </Section>
      <Section title={"Contacts"} id="contacts">
        <p>This is the contacts section</p>
        <p>832-493-1021</p>
        <p>vasquezjoshua2020@gmail.com</p>
      </Section>
    </div>
  );
}