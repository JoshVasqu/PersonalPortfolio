import './App.css';
import {
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function Section({title, children}) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <div>
          {children}
        </div>
      </div>
      <hr />
    </>
  )
}

export default function App() {
  return (
    <div className='App'>
      <Section title={"Hero"}>
        <p>This is the hero section</p>
      </Section>
      <Section title={"About Me"}>
        <p>This is the about section</p>
      </Section>
      <Section title={"Projects"}>
        <p>This is the projects section</p>
        <p>Project 1: A web application for managing tasks.</p>
        <p>Project 2: React API.</p>
        <p>Project 3: VR Game Demo.</p>
      </Section>
      <Section title={"Contacts"}>
        <p>This is the contacts section</p>
      </Section>
    </div>
  );
}