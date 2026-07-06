import MyButton from './button';

const user = {
  name: 'John Doe',
  imageUrl: 'https://pbs.twimg.com/profile_images/1628745099092889606/03VK9ZTn_400x400.jpg',
  imageSize: 40,
};

function Profile() {
  return (
    <>
      <h1>
        <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}/>
        {user.name}
      </h1>
    </>
  );
}

function AboutPage() {
  return (
    <>
    <div>
      <h1>About Me</h1>
      <p>Hi, I'm a software developer with a passion for creating web applications. I enjoy learning new technologies and improving my skills.</p>
    </div>
    </>
  );
}

function ProjectPage() {
  return (
    <>
    <div>
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on:</p>
      <ul>
        <li>Project 1: A web application for managing tasks.</li>
        <li>Project 2: A mobile app for tracking fitness activities.</li>
        <li>Project 3: A personal portfolio website.</li>
      </ul>
    </div>
    </>
  );
}

function ContactPage() {
  return (
    <>
    <div>
      <h1>Contact Me</h1>
      <p>You can reach me at:</p>
      <ul>
        <li>Email: john.doe@example.com</li>
        <li>Phone: (123) 456-7890</li>
      </ul>
    </div>
    </>
  );
}

export default function App() {
  return (
    <div>
      <Profile />
      <hr />
      <AboutPage />
      <MyButton />
      <hr />
      <ProjectPage />
      <hr />
      <ContactPage />
    </div>
  );
}