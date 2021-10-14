// import logo from './logo.svg';
import ApiFetch from './ApiFetch';
import ApiFetchAssignment from './ApiFetchAssignment';
import './App.css';
import Form from './Form';
// import Button from './Button.js';
import ParentComponent from './ParentComponent'
// import BackColor from './BackColor';
// import Student from './Student';

function App(props) {
  return (
    <div  className="App">
    {/* <BackColor color="#1FAA59" name="#1FAA59"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi There!!!&nbsp;
          Anshuman
          <Student/>
          <Button color="#FF6263" name="CLick Me" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ParentComponent/>
      <Form/>
      {/* <ApiFetch/> */}
      <ApiFetchAssignment/>
    </div>
  );
}

export default App;
