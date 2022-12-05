import React, { useContext, useState } from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postcode, setPostCode] = useState("");
    // const [avatar, setAvatar] = useState("");

    // const { listUser, setListUser } = useContext(AppContext);
    const [showSuccessConfirm, setShowSuccessConfirm] = useState(false);
    const { setLoggedInID, setIsLoggedIn} = useContext(AppContext);


    const navegate = useNavigate();


   //* MODAL SHOW SUCCESSFUL REGISTRATION */
    const displayPopupConfirm = () => {
        return (

            <div className="modal show fade" id="exampleModalToggle" aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel" tabIndex="-1"
                style={{display: "block", backgroundColor: "rgba(0,0,0,0.8)"}}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header row text-center">
                            <h4 className="modal-title " id="exampleModalToggleLabel">Congratulation!</h4>
                        </div>
                        <div className="modal-body">
                            <div className="d-container  align-items-center justify-content-center">
                                <div className="row mx-auto my-4 justify-content-center">
                                    <img src="../successIcon.png" alt="successIcon"
                                    style={{maxHeight: "13vh", maxWidth : "13vh"}}/>
                                </div>
                                <div className="col text-center my-4">
                                    <p className="fs-5">Welcome to Rehome Pet website</p>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div className="modal-footer row justify-content-center">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" 
                            style={{maxWidth: "15vh", fontWeight : "bold"}} onClick={()=>handleCloseConfirm()}
                            data-bs-toggle="modal" data-bs-dismiss="modal">Okay</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // CLOSE MODAL CONFIRMATION BUTTON
    const handleCloseConfirm = () => {
        setShowSuccessConfirm(false);
        setIsLoggedIn(true);
        navegate("/");
    }

    const validatePassword = ({ password, retypePassword }) => {
        let isValidated = "";

        if (password !== retypePassword) {
            isValidated += "Retype password not match";
        }
        return isValidated;

    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const status = true;
        let notification = "";
        const displayNotification = document.getElementById("showResultRegister");

        const validPassword = validatePassword({ password, retypePassword });

        //VALIDATE EMAIL
        let validEmail = "";
        const urlAPI = `http://localhost:5000/api/register/${email}`;
        console.log(urlAPI)

        // const {data} = await axios.get(urlAPI)
        await axios.get(urlAPI)
            .then((res) => {

                validEmail = res.data;
                console.log(validEmail)
                // return res.data;
            })
            .catch((err) => {
                console.log("Error", err)
            })

        console.log("Validate email", validEmail);
        console.log("Validate password", validPassword);


        if (validPassword !== "") {
            notification += validPassword + "<br>"
        }
        if (validEmail === "Existing email") {
            notification += validEmail + "<br>"
        }

        displayNotification.innerHTML = notification;

        if (validPassword === "" && validEmail === "Appropriate email") {
            console.log("Begin add new user")
            const urlResgiterAPI = `http://localhost:5000/api/register`;

            const { data } = await axios.post(urlResgiterAPI, {
                email, password, retypePassword, firstname, lastname, phone, street, city, province, postcode, status
            })

            console.log("Show result add new user",data);
            if(typeof data === "object"){
                setShowSuccessConfirm(true);
                console.log(showSuccessConfirm);
                setLoggedInID(data._id);
            }
        }

    }

    return (
        <div className="w-80 p-1 m-8 ">
            <form onSubmit={handleRegister}
                method="post" action="/register" className="w-80 p-1 fs-4">
                <div className="row justify-content-center m-4">
                    <div className="container ">
                        <div className="form-group col">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm">
                                <input type="email" className="form-control fs-5" id="staticEmail" name="email"
                                    placeholder="Email address" required
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group col ">
                            <label htmlFor="inputPassword" className="row-sm-2 col-form-label">Password</label>
                            <div className="col-sm">
                                <input type="password" className="form-control fs-5" id="inputPassword" name="password"
                                    placeholder="Password" required
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group col ">
                            <label htmlFor="inputRetypePassword" className="row-sm-2 col-form-label">Retype Password</label>
                            <div className="col-sm">
                                <input type="password" className="form-control fs-5" id="inputRetypePassword" name="repassword"
                                    placeholder="Password" required
                                    value={retypePassword}
                                    onChange={(event) => setRetypePassword(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group col ">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="inputRetypePassword" className="row-sm-3 col-form-label">First Name</label>
                                    <div className="col">
                                        <input type="text" className="form-control fs-5" id="inputRetypePassword" name="firstname"
                                            placeholder="First Name" required
                                            value={firstname}
                                            onChange={(event) => setFirstName(event.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputRetypePassword" className="row-sm-3 col-form-label">Last Name</label>

                                    <div className="col">
                                        <input type="text" className="form-control fs-5" id="inputRetypePassword" name="lastname"
                                            placeholder="Last Name" required
                                            value={lastname}
                                            onChange={(event) => setLastName(event.target.value)} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="form-group col ">
                            <label htmlFor="inputRetypePassword" className="col-sm-6 col-form-label">Phone Number</label>
                            <div className="col-sm">
                                <input type="phone" className="form-control fs-5" id="inputPhoneNumber" name="phone"
                                    placeholder="Phone Number" required
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group col ">
                            <label htmlFor="inputRetypePassword" className="col-sm-2 col-form-label">Street</label>
                            <div className="col-sm">
                                <input type="text" className="form-control fs-5" id="inputRetypePassword" name="street"
                                    placeholder="Street" required
                                    value={street}
                                    onChange={(event) => setStreet(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group col w-100">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <label htmlFor="inputRetypePassword" className="row-sm-4 col-form-label">City</label>
                                    <div className="col-sm">
                                        <input type="text" className="form-control fs-5" id="inputRetypePassword" name="city"
                                            placeholder="City" required
                                            value={city}
                                            onChange={(event) => setCity(event.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <label htmlFor="inputRetypePassword" className="row-sm-4 col-form-label">Province</label>

                                    <div className="col-sm">
                                        <input type="text" className="form-control fs-5" id="inputRetypePassword" name="province"
                                            placeholder="Province" required
                                            value={province}
                                            onChange={(event) => setProvince(event.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <label htmlFor="inputRetypePassword" className="row-sm-4 col-form-label ">Postal Code</label>

                                    <div className="col-sm">
                                        <input type="text" className="form-control fs-5" id="inputRetypePassword" name="postcode"
                                            placeholder="Postal Code" required
                                            value={postcode}
                                            onChange={(event) => setPostCode(event.target.value)} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="form-group row justify-content-center mt-4">
                            <button className="btn btn-primary col-md-5 fs-4" type="submit">
                                Submit form</button>
                        </div>

                        <div className="row text-center mt-4 " style={{ fontWeight: "bold", color: "red" }}>
                            <p id="showResultRegister"></p>
                        </div>
                    </div>
                </div>

            </form>
            {/* SHOW MODAL CONFIRM REGISTRATION SUCCESSFULLY */}
            {showSuccessConfirm === true ? displayPopupConfirm() : ""}

        </div>

    );
};

export default Register;