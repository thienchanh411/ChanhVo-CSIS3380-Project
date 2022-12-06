import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";
import axios from "axios";

function MyProfilePage() {
    const {loggedInID, isLoggedIn} = useContext(AppContext)
    
    // const { loggedInID,isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    //const {firstname, lastname,email, phone, street, city, provice, postcode, password}

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [postcode, setPostcode] = useState("")
    const [password, setPassword] = useState("")
    const [retypepassword, setRetypePassword] = useState("")

   
    useEffect(() =>{
        if(loggedInID === "") return;
        const urlAPI = `http://localhost:5000/api/profile/${loggedInID}`
        axios.get(urlAPI)
        .then((res) => {
            if(typeof res === "object"){
                // console.log("Get result",res.data);
                setFirstname(res.data.firstname);
                setLastname(res.data.lastname);
                setEmail(res.data.email);
                setPhone(res.data.phone);
                setStreet(res.data.street);
                setCity(res.data.city);
                setProvince(res.data.province);
                setPostcode(res.data.postcode);
                // setFirstname(res.data.firstname);
                // setFirstname(res.data.firstname);

            }
        })
        .catch((err) => {
            console.log("Error when update profile", err);
        })
    }, [loggedInID]);

    const handleEditProfile = async (event) => {
        const showNotification = document.getElementById("showResultProfile");

        const urlAPI = `http://localhost:5000/api/profile/${loggedInID}`
        console.log(urlAPI);
        event.preventDefault();
        console.log("Click submit form",firstname, lastname,email, phone, street, city, province, postcode, 
            password, retypepassword);

        const {data} = await axios.put(urlAPI, {
            firstname, lastname,email, phone, street, city, province, postcode, 
            password, retypepassword
        });
        console.log("Get data: ", data);
        if(data === 1){
            showNotification.innerHTML = "Your profile has been updated successfully!";
            showNotification.style.color = "green";
        }else{
            showNotification.innerHTML = data;
            showNotification.style.color = "red";
        }

    }

    // CHECK IF USER LOGGED IN, SHOW ALL CONTENT, ELSE, SHOW REQUIRE LOGIN
    if(isLoggedIn === false){
        return(
          <div className="row text-center align-items-center m-5 rounded-4" style={{minHeight: "20vh", background: "#EEF3F3"}}>
            <h2 className="text-info">Sorry! You have to login before using the service</h2>
          </div>
        )
      } else if (isLoggedIn === true)
   { return (
        <>
            <div >
            <div className="row justify-content-center text-center m-5"><h1><strong>EDIT INFORMATION</strong></h1></div>
                <form id="editProfile" method="post" className=" fs-5"
                    onSubmit={handleEditProfile}>

                    <div className="row m-5">
                        <div id="pictureProfile" className="form-group col-lg-4 " style={{backgroundColor: "#d5e2e5", borderRadius: 1}}>
                            <div id="showImgProfile" className="col my-auto">
                                <div className="form-group row justify-content-center text-center" >
                                    <img src="../defaultUserImg.jpg" className="mt-5" style={{ height: 200, width: 200 }} alt="userImg"></img>
                                    <label htmlFor="exampleFormControlFile1" className="m-3">Example file input</label>
                                    <div className="col text-center m-3">
                                    <input type="file" id="exampleFormControlFile1" />
                                    </div>
                                    
                                </div>
                            </div>

                        </div>

                        <div id="displayProfile" className="form-group col-lg-8 d-lg-block">
                       
                            <div id="accountInfo">

                                <div>
                                    <div className="row text-center m-5">
                                        <p><strong>PERSONAL INFORMATON</strong></p>
                                    </div>
                                    
                                    <div className="container m-3">
                                        <div className="form-group row m-3">
                                            <label htmlFor="firstname" className="col-md-3 col-form-label">First Name</label>
                                            <div className="col-md">
                                                <input type="text" className="form-control fs-5" id="firstname"
                                                    required="true" placeholder="First Name" 
                                                    value={firstname}
                                                    onChange={(event)=>setFirstname(event.target.value)}/>
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-md-3 col-form-label">Last Name</label>
                                            <div className="col-md">
                                                <input type="text" className="col-9 form-control fs-5" id="lastname"
                                                    placeholder="Last Name" required
                                                    value={lastname}
                                                    onChange={(event)=>setLastname(event.target.value)}/>
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-md-3 col-form-label">Email</label>
                                            <div className="col-md">
                                                <input type="email" className="form-control fs-5" id="email"
                                                    placeholder="Email" required
                                                    value={email}
                                                    onChange={(event)=>setEmail(event.target.value)}/>
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-md-3 col-form-label">Phone Number</label>
                                            <div className="col-md">
                                                <input type="phone" className="form-control fs-5" id="phone"
                                                    placeholder="Phone Number" required
                                                    value={phone}
                                                    onChange={(event)=>setPhone(event.target.value)}/>
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-md-3 col-form-label">Street</label>
                                            <div className="col-md">
                                                <input type="text" className="form-control fs-5" id="street"
                                                    placeholder="Street" required
                                                    value={street}
                                                    onChange={(event)=>setStreet(event.target.value)}/>
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-md-3 col-form-label">City</label>
                                            <div className="col-md">
                                                <input type="text" className="form-control fs-5" id="city"
                                                    placeholder="City" required
                                                    value={city}
                                                    onChange={(event)=>setCity(event.target.value)}/>
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-sm-3 col-form-label">Province</label>
                                            <div className="col-md">
                                                <input type="text" className="form-control fs-5" id="province"
                                                    placeholder="Province" required
                                                    value={province}
                                                    onChange={(event)=>setProvince(event.target.value)}/>
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-sm-3 col-form-label">Postal Code</label>
                                            <div className="col-md">
                                                <input type="text" className="form-control fs-5" id="postcode"
                                                    placeholder="PostalCode" required
                                                    value={postcode}
                                                    onChange={(event)=>setPostcode(event.target.value)}/>
                                            </div>

                                        </div>
                                    </div>


                                </div>

                                <div id="changePassword" className="container m-3">
                                    <div>
                                        <div className="row text-center">
                                            <strong><p>CHANGE PASSWORD</p></strong>
                                        </div>
                                    
                                    <div className="form-group row m-3">
                                        <label htmlFor="inputNewPassword" className="col-sm-3 col-form-label">New Password</label>
                                        <div className="col-md">
                                            <input type="password" className="form-control fs-5" id="profilePostalCode"
                                                placeholder="New Password" required
                                                value={password}
                                                onChange={(event)=>setPassword(event.target.value)}/>
                                        </div>

                                    </div>
                                    <div className="form-group row m-3">
                                        <label htmlFor="inputRetypeNewPassword" className="col-sm-3 col-form-label">ReType New Password</label>
                                        <div className="col-md">
                                            <input type="password" className="form-control fs-5" id="profilePostalCode"
                                                placeholder="Confirm New Password" required
                                                value={retypepassword}
                                                onChange={(event)=>setRetypePassword(event.target.value)}/>
                                        </div>

                                    </div>
                                    </div>
                                    
                                </div>

                                <div id="submitEditProfile">
                                <div className="row text-center">
                                    <strong><p >SUBMIT EDIT FORM</p></strong>
                                </div>
                                    
                                    <div className="row justify-content-center text-center">

                                        <button type="submit"
                                         id="submitEditProfile" className="btn btn-primary col-4 fs-4">
                                            Edit Profile</button>
                                    </div>
                                    <div className="row text-center mt-4 " style={{fontWeight: "bold"}}>
                                        <p id="showResultProfile"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )};
}

export default MyProfilePage;