import React, { useState } from 'react';
import UserContext from './components/context/UserContext';
import MyComponent from './components/MyComponent';

function App() {
  // Define global vars + setter functions as needed here (Keep setters below their vars)
  // Theme and Toggle
  const [ userTheme, setUserTheme ] = useState('light');
  const toggleUserTheme = () => {
    switch (userTheme) {
      case 'light':
        setUserTheme('dark');
        break;
        
        case 'dark':
          setUserTheme('light');
          break;

      default :
        break;
    }
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
  const user = {
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
    <UserContext.Provider value={user}>
      <MyComponent/>
    </UserContext.Provider>
  )
};

export default App;