import logo from '../logo.svg';
import './Home.css';


function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Home Page
        </p>
      </header>
    </div>
  );
}

export default Home;
