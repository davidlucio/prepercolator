import React from 'react';
import { UserContext } from './components/context/UserContext';

export default HomePage = () => {

    const user = useContext(UserContext);

    return (
      <div>
        { user ? 
          <div>
            {/* RENDER WELCOME USER VIEW */}
            <h1>Welcome back, {user.username}</h1>
          </div>
          :
          <div>
            {/* RENDER WELCOME LOGIN/SINGUP */}
          </div> 
        }
      </div>
    )
}