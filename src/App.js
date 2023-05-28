import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Routes
} from "react-router-dom";   //To access it write in terminal-  npm i react-router-dom

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route  path="/places/new" element={<NewPlace />} />
          <Route  path="/places/:placeId" element={<UpdatePlace />} />
          <Route path="/*" element={<Users />} />     {/*  /*Matches any wrong url you type in browser */}

      </Routes>
    );
  } else {
    routes = (
      <Routes>       {/*All the routes outside this 'Routes' are executed from top to bottom */}
         <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
         <Route  path="/auth" element={<Auth />} />
       <Route path="/*" element={<Auth />} />     {/*  /*Matches any wrong url you type in browser */}
      </Routes>

      );
    }




  return (
    <AuthContext.Provider
    value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
  >
    <Router>
      <MainNavigation/>
      <main>{routes}</main>
    </Router>
    </AuthContext.Provider>
  );
};

export default App;



