import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { AppContext } from './components/AppContext';
import {petInfo} from "./data/petInfo";
import {requestInfo} from "./data/requestInfo"
import { userInfo} from "./data/userInfo"
const App = () => {
  const [listPet, setListPet] = useState(petInfo);
  const [listRequest, setListRequest] = useState(requestInfo);
  const [listUser, setListUser] = useState(userInfo);
  return ( 
    <>
      <AppContext.Provider value={{
        listPet, setListPet, listRequest, setListRequest, listUser, setListUser
      }}>
          <NavigationBar/>
      </AppContext.Provider>
        <Footer/>
      </>
   );
}
 
export default App;
