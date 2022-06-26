import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import your route components too
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') // what is mode dark/light
  const [alert, setAlert] = useState(null) // alert state

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled", "success");
      document.title = 'textUtils- Dark Mode';
      // setTimeout(() => {
      //   document.title ='some important message';
      // }, 2000);
      // setTimeout(() => {
      //   document.title ='urgent message';
      // }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light  mode has been enabled", "success");
      document.title = 'textUtils- Light Mode';
    }

  }

  return (
    //  <div className="blank"> my first app</div>
    <>
    <Router>
      <Navbar title="Textutils" aboutText="About Us" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact  path="/">
            <Textform showAlert={showAlert} Heading="Enter the text to analyze" mode={mode} togglemode={togglemode} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
