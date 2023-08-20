import logo from '../logo.svg';
import './About.css';


function About() {
  return (
    <div className="About">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is About Page
        </p>
      </header>
    </div>
  );
}

export default About;
