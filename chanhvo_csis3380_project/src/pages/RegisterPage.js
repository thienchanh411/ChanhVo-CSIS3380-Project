import React, { useContext, useState } from "react";
import { AppContext } from "../components/AppContext";
import { Link } from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [provice, setProvice] = useState("");
    const [postcode, setPostCode] = useState("");
    // const [avatar, setAvatar] = useState("");

    const { listUser, setListUser } = useContext(AppContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const status = "Active";

        const foundExistUser = listUser.find(userElem => userElem.email === email);
        if (foundExistUser) {
            console.log("Error, existing email")
        } else {
            if (password !== retypePassword) {
                console.log("Error, password retype mismatched")
            } else {
                const newListUser = [...listUser, {
                    email, password, retypePassword, firstName, lastName, phone, street, city, provice, postcode, status
                }]
                console.log(newListUser);
                setListUser(newListUser);
                console.log(listUser);

                setEmail("");
                setPassword("");
                setRetypePassword("");
                setFirstName("");
                setLastName("");
                setPhone("");
                setStreet("");
                setCity("");
                setProvice("");
                setPostCode("");
            }
        }



    }

    return (
        <div className="w-80 p-1 m-8 ">
            <form onSubmit={handleRegister}
                method="post" action="/register" className="w-80 p-1 fs-4">
                <div className="row justify-content-center m-5">
                    <div className="container ">
                        <div className="form-group col">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm">
                                <input type="text" className="form-control" id="staticEmail" name="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group col ">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm">
                                <input type="password" className="form-control" id="inputPassword" name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group col ">
                            <label htmlFor="inputRetypePassword" className="col-sm-2 col-form-label">Retype Password</label>
                            <div className="col-sm">
                                <input type="password" className="form-control" id="inputRetypePassword" name="repassword"
                                    placeholder="Password"
                                    value={retypePassword}
                                    onChange={(event) => setRetypePassword(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group col ">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="inputRetypePassword" className="col-sm-3 col-form-label">First Name</label>
                                    <div className="col">
                                        <input type="text" className="form-control" id="inputRetypePassword" name="firstname"
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(event) => setFirstName(event.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputRetypePassword" className="col-sm-3 col-form-label">Last Name</label>

                                    <div className="col">
                                        <input type="text" className="form-control" id="inputRetypePassword" name="lastname"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(event) => setLastName(event.target.value)} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="form-group col ">
                            <label htmlFor="inputRetypePassword" className="col-sm-6 col-form-label">Phone Number</label>
                            <div className="col-sm">
                                <input type="phone" className="form-control" id="inputPhoneNumber" name="phone"
                                    placeholder="Phone Number"
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group col ">
                            <label htmlFor="inputRetypePassword" className="col-sm-2 col-form-label">Street</label>
                            <div className="col-sm">
                                <input type="text" className="form-control" id="inputRetypePassword" name="street"
                                    placeholder="Street"
                                    value={street}
                                    onChange={(event) => setStreet(event.target.value)} />
                            </div>
                        </div>
                        <div className="form-group col w-100">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <label htmlFor="inputRetypePassword" className="col-sm-3 col-form-label">City</label>
                                    <div className="col-sm">
                                        <input type="text" className="form-control" id="inputRetypePassword" name="city"
                                            placeholder="City"
                                            value={city}
                                            onChange={(event) => setCity(event.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <label htmlFor="inputRetypePassword" className="col-sm-3 col-form-label">Province</label>

                                    <div className="col-sm">
                                        <input type="text" className="form-control" id="inputRetypePassword" name="province"
                                            placeholder="Province"
                                            value={provice}
                                            onChange={(event) => setProvice(event.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <label htmlFor="inputRetypePassword" className="col-sm-4 col-form-label ">Postal Code</label>

                                    <div className="col-sm">
                                        <input type="text" className="form-control" id="inputRetypePassword" name="postcode"
                                            placeholder="Postal Code"
                                            value={postcode}
                                            onChange={(event) => setPostCode(event.target.value)} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="form-group row justify-content-center mt-4">
                            <button className="btn btn-primary col-md-5 fs-4" type="submit">
                            <Link className="nav-link" to="/"></Link>
                                Submit form</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>

    );
};

export default Register;