import React, { useContext } from "react";
import ListPostingTab from "./ListPostingTab";
import ListUserTab from "./ListUserTab";
import { AppContext } from "../components/AppContext";

const AdminPage = () => {
  const {listUser, setListUser} = useContext(AppContext);
  const {listPet, setListPet} = useContext(AppContext);
  const{isLoggedIn} = useContext(AppContext);
  // CHECK IF USER LOGGED IN, SHOW ALL CONTENT, ELSE, SHOW REQUIRE LOGIN
  if(isLoggedIn === false){
    return(
      <div className="row text-center align-items-center m-5 rounded-4" style={{minHeight: "20vh", background: "#EEF3F3"}}>
        <h2 className="text-info">Sorry! You have to login before using the service</h2>
      </div>
    )
  } else if (isLoggedIn === true)
  {return (
    <>
      <div>
        <h1>
          This Page for admin.
        </h1>
      </div>

      <div>
        <ListUserTab
          listUser={listUser}
          adminDeleteUser={(id) => {
            const newListUser = listUser.filter((userElem) => id !== userElem.id);
            setListUser(newListUser);
          }} />
        <ListPostingTab
          listPet={listPet}
          adminDeletePost={(id) => {
            const newListPost = listPet.filter((postElem) => id !== postElem.id);
            setListPet(newListPost);
          }}
        />
      </div>
    </>
  )};
};

export default AdminPage;