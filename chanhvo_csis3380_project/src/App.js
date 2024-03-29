import React, { useEffect, useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { AppContext } from './components/AppContext';
// import {petInfo} from "./data/petInfo";
// import {requestInfo} from "./data/requestInfo"
import { userInfo } from "./data/userInfo"

import axios from 'axios';

const App = () => {
  const [listPet, setListPet] = useState([]);
  const [listAvailablePet, setListAvailablePet] = useState([]);
  const [listRequest, setListRequest] = useState([]);
  const [listUser, setListUser] = useState(userInfo);
  const [loggedInID, setLoggedInID] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [roleAdmin, setRoleAdmin] = useState(false)

  console.log("Logged in ID on Mainpage Client:", loggedInID);

  useEffect(() => {
    const urlAPI = `http://localhost:5000/api/pet/toowner/${loggedInID}`;
    console.log("Api pet",urlAPI)
    if(loggedInID === ""){
      return
    }
     axios.get(urlAPI)
      .then((res) => {
        console.log("get data after axios", res.data)
        setListPet(res.data);
      })
      .catch((err) => {
        console.log("ERROR at Catch", err);
      })
  }, [loggedInID])

  // useEffect(() => {
  //   const urlAPI = `http://localhost:5000/api/request/toowner/${loggedInID}`;
  //   console.log("Api request",urlAPI)
  //   // if(loggedInID === ""){
  //   //   return
  //   // }

  //     await axios.get(urlAPI)
  //     .then((res) => {
  //       setListRequest(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("User has not logged in");
  //     })

    
  // }, [loggedInID])

  console.log("List pet at APP.js", listPet);
  // console.log("List request at APP.js", listRequest);

  return (
    <>
      <AppContext.Provider value={{
        listPet, setListPet, 
        listAvailablePet, setListAvailablePet,
        listRequest, setListRequest,
        listUser, setListUser,
        roleAdmin, setRoleAdmin,
        loggedInID, setLoggedInID, isLoggedIn, setIsLoggedIn
      }}>
        <NavigationBar />
      </AppContext.Provider>
      <Footer />
    </>
  );
}

export default App;
