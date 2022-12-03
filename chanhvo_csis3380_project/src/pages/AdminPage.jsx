import React, { useContext } from "react";
import ListPostingTab from "./ListPostingTab";
import ListUserTab from "./ListUserTab";
// import { userInfo } from "../data/userInfo";
// import { petInfo } from "../data/petInfo";
import { AppContext } from "../components/AppContext";
const AdminPage = () => {
  const {listUser, setListUser} = useContext(AppContext);
  const {listPet, setListPet} = useContext(AppContext);
  return (
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
  );
};

export default AdminPage;