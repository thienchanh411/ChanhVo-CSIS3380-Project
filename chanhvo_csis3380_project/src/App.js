import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { AppContext } from './components/AppContext';
import {petInfo} from "./data/petInfo";
import {requestInfo} from "./data/requestInfo"
import { userInfo} from "./data/userInfo"

// import axios from 'axios';

const App = () => {
  const [listPet, setListPet] = useState(petInfo);
  const [listRequest, setListRequest] = useState(requestInfo);
  const [listUser, setListUser] = useState(userInfo);
  const [loggedInID, setLoggedInID] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("Logged in ID on Mainpage Client:", loggedInID);
  console.log("Logged in status on Mainpage Client:", isLoggedIn);
  return ( 
    <>
      <AppContext.Provider value={{
        listPet, setListPet, listRequest, setListRequest, listUser, setListUser,
        loggedInID, setLoggedInID, isLoggedIn, setIsLoggedIn
      }}>
          <NavigationBar/>
      </AppContext.Provider>
        <Footer/>
      </>
   );
}
 
export default App;
