// import React, { useState } from "react";
// import { userInfo } from "../data/userInfo";

const ListUserTab = ({listUser = [], adminDeleteUser}) => {
    // const [userList, setUserList] = useState(userInfo);

    // const adminDeleteUser = (id) => {
    //     const newListUser = userList.filter((userElem) => id !== userElem.id);
    //     setUserList(newListUser);
    // }
    console.log(listUser);
    return (
        <>
            <div className="row text-center">
                <h3>User List</h3>
            </div>
            <div className="m-5">
                <table className="table table-hover fs-4 m-4">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser.length === 0 ? ((<p>There is no user in database</p>)): ""}
                        {
                            listUser.filter((user) => user.status === "Active")
                            .map((user, index) => {                               
                                    return (
                                        <tr className="m-4" key={index}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                                <button className="btn btn-danger"
                                                    onClick={() => adminDeleteUser(user.id)}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </>
    );
}

export default ListUserTab;