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

function SiteInformation() {
  return (
    <>
    <div>
      <h1>Site Information</h1>
      <p>This site was created using React and showcases my portfolio, projects, and contact information.</p>
      <p>Hosting for this site was handled through Netlify. Through it I am able to handle automated deployments.</p>
      <p>With each push to GitHub Netlify handles the rest.</p>
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
      <SiteInformation />
      <hr />
      <ProjectPage />
      <hr />
      <ContactPage />
    </div>
  );
}