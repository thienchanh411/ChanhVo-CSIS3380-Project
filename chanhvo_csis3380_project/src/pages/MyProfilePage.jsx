import React from "react";

function MyProfilePage() {
    return (
        <>

            <div >
            <div className="row justify-content-center text-center m-5"><h1><strong>EDIT INFORMATION</strong></h1></div>
                <form id="editProfile">

                    <div className="row m-5">
                        <div id="pictureProfile" className="form-group col-lg-4 " style={{backgroundColor: "#d5e2e5", borderRadius: 1}}>
                            <div id="showImgProfile" className="col my-auto">
                                <div className="form-group row justify-content-center text-center" >
                                    <img src="defaultUserImg.jpg" className="mt-5" style={{ height: 200, width: 200 }} alt="userImg"></img>
                                    <label for="exampleFormControlFile1" className="m-3">Example file input</label>
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
                                            <label className="col-md-3 col-form-label">First Name</label>
                                            <div className="col-md">
                                                <input type="name" className="form-control" id="profileFirtName"
                                                    placeholder="First Name" />
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-md-3 col-form-label">Last Name</label>
                                            <div className="col-md">
                                                <input type="name" className="col-9 form-control " id="profileLastName"
                                                    placeholder="Last Name" />
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-md-3 col-form-label">Email</label>
                                            <div className="col-md">
                                                <input type="email" className="form-control" id="profileEmail"
                                                    placeholder="Email" />
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-md-3 col-form-label">Phone Number</label>
                                            <div className="col-md">
                                                <input type="phone" className="form-control" id="profilePhone"
                                                    placeholder="Phone Number" />
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-md-3 col-form-label">Street</label>
                                            <div className="col-md">
                                                <input type="street" className="form-control" id="profileStreet"
                                                    placeholder="Street" />
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-md-3 col-form-label">City</label>
                                            <div className="col-md">
                                                <input type="city" className="form-control" id="profileCity"
                                                    placeholder="City" />
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-sm-3 col-form-label">Province</label>
                                            <div className="col-md">
                                                <input type="city" className="form-control" id="profileProvince"
                                                    placeholder="Province" />
                                            </div>

                                        </div>
                                        <div className="form-group row m-3">
                                            <label className="col-sm-3 col-form-label">Postal Code</label>
                                            <div className="col-md">
                                                <input type="city" className="form-control" id="profilePostalCode"
                                                    placeholder="PostalCode" />
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
                                        <label htmlFor="inputNewPassword" className="col-sm-3 col-form-label">Province</label>
                                        <div className="col-md">
                                            <input type="pasword" className="form-control" id="profilePostalCode"
                                                placeholder="New Password" />
                                        </div>

                                    </div>
                                    <div className="form-group row m-3">
                                        <label htmlFor="inputRetypeNewPassword" className="col-sm-3 col-form-label">Province</label>
                                        <div className="col-md">
                                            <input type="password" className="form-control" id="profilePostalCode"
                                                placeholder="Confirm New Password" />
                                        </div>

                                    </div>
                                    </div>
                                    
                                </div>

                                <div id="submitEditProfile">
                                <div className="row text-center">
                                    <strong><p>SUBMIT EDIT FORM</p></strong>
                                </div>
                                    
                                    <div className="row justify-content-center text-center">

                                        <button id="submitEditProfile" className="btn btn-primary col-4">Edit Profile</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </form>
            </div>
        </>
    );
}

export default MyProfilePage;