import React, { useState } from 'react';
import UserContext from './components/context/UserContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import BusinessPortal from './pages/BusinessPortal';
import HomePage from './pages/HomePage';

export default function App() {
  // Define global vars + setter functions as needed here (Keep setters below their vars)
  // Theme and Toggle
  const [ userTheme, setUserTheme ] = useState('light');
  const toggleUserTheme = () => {
    const currentTheme = userTheme
     currentTheme === 'light' ? setUserTheme('dark') : setUserTheme('light');
  };

  // User Settings and Update Methods (dont think we want/need password in state...)
  const [ username, setUsername ] = useState('Testing User');
  const updateUserName = (newUsername) => {
    setUsername(newUsername);
  };
  const [ email, setEmail ] = useState('test@test.test');
  const updateEmail = (newEmail) => {
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-z]$');
    validEmail.test(newEmail) ? setEmail(newEmail) : console.error('Invalid Email Address')
  };

  // Creating global obj of vars
  // Is user already logged in?
  // session ? user = { user } : user ={ user }

  const user = {
    admin: true,
    username: username,
    updateUserName,
    email: email,
    updateEmail,
    // Putting in dummy data for testing, maybe good layout for data structure?
    savedDrinks: [
        {
            userDrinkName: 'Morning Mocha',
            saveDate: Date.now(),
            ingredients: [
              { 
                // Unit determined by type?
                ingredient:'Espresso',
                type: 'Espresso',
                units: 'shots',
                amount: 2,
              },
              {
                ingredient: 'Whole Milk',
                type: 'liquid',
                units: 'ounces',
                amount: 4,
                steamed: true,
              },
              {
                // So flavor ingredients could either be syrup, powder, etc and could then have units defined by type (pumps for syrup, scoops for powder?)
                ingredient: 'Chocolate Syrup',
                type: 'flavor-syrup',
                units: 'pumps',
                amount: 2,
              }
            ],
          },
    ],
    settings: {
      theme: userTheme,
      toggleUserTheme,
    }
  }

  return (
    // TODO: Set usercontext value equal to user data from login/session
    <UserContext.Provider value={user}>
      <Router>
        <div>
          <nav style={{backgroundColor:'whitesmoke', height: 'fit-content'}}>
            <ul style={{display: 'flex', flexDirection: 'row'}}>
              <li style={{margin: 10}}>
                <Link style={{textDecoration: 'none'}} to="/">Home</Link>
              </li>
              <li style={{margin: 10}}>
                <Link style={{textDecoration: 'none'}} to="/profile">Profile</Link>
              </li>
              <li style={{margin: 10}}>
                <Link style={{textDecoration: 'none'}} to="/supersecretbusinessportal">Business</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/supersecretbusinessportal">
              {/* TODO: Feed Business Portal Session Data */}
              <BusinessPortal user={user}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  )
};