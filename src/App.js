import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Nav from './components/Nav';
import FullBreach from './components/FullBreach';



function App() {
  const [darkMode,setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'))
    const userPrefersDark = getPrefColorScheme()

    if (isReturningUser) {return savedMode}
    else if ( userPrefersDark ) { return true }
    else { return false }

  }

  // Checking for the user personal colors prefrences
  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: black)").matches;
  }
  
  let mode = darkMode ? 'light' : 'dark';
  //Toggle Handler
  const darkModeHandler = () => {
    setDarkMode(prevMode => !prevMode)
    toast.info(`Switched to ${mode} mode`, {
      position: toast.POSITION.BOTTOM_LEFT,
  });
  }

  return (
    <>
    <div className={ darkMode ? 'dark-mode' : 'light-mode' }>
    <Nav 
       checked={darkMode}
       onChange={darkModeHandler}
    />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/:id?/:page?'  exact component={FullBreach} />
    </Switch>
    </div>
    <ToastContainer autoClose={2000} hideProgressBar />
    </>
  );
}

export default App;



