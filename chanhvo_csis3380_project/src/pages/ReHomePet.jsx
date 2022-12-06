import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RehomePet = () => {

  const navigate = useNavigate();

  const {listPet, setListPet} = useContext(AppContext)
  const{isLoggedIn, loggedInID} = useContext(AppContext);
  
  const [addSuccess, setAddSuccess] = useState(false)

  const [petType, setPetType] = useState("");
  const [isSpayed, setIsSpayed] = useState("");
  const [rehomeReason, setRehomReason] = useState("");
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  // const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  const [diet, setDiet] = useState("");

  const ownerId = loggedInID;

  const handleAddNewPet = async (event) => {
    event.preventDefault();
    const status = "Active";
    const image = document.getElementById("imageUploaded").files[0].name;

    console.log(document.getElementById("imageUploaded").files[0].name)

    const urlAPI = "http://localhost:5000/api/pet/"

    const {data} = await axios.post(urlAPI, {
      ownerId, petType, isSpayed, rehomeReason, petName, breed, gender, age, size,
      color, image, description, diet, status
    });

    console.log(data);

    if(typeof data === "object"){
        setAddSuccess(true);

        const newPetList = [...listPet, {
          _id : data._id,
          ownerId, petType, isSpayed, rehomeReason, petName, breed, gender, age, size,
          color, image, description, diet, status
        }]
        console.log(newPetList);
        setListPet(newPetList);
        console.log(listPet);
    
        setPetType("");
        setIsSpayed("");
        setRehomReason("");
        setPetName("");
        setBreed("");
        setGender("");
        setAge("");
        setSize("");
        setColor("");
        // setImage();
        setDescription("");
        setDiet("");
    }

    


  }

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
                                  <p className="fs-5">You've added a pet sucessully</p>
                                  
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

  // HANDLE CLICK CLOSE MODAL
  const handleCloseConfirm = () => {
    setAddSuccess(false);
    navigate("/manageposting");
}

// CHECK IF USER LOGGED IN, SHOW ALL CONTENT, ELSE, SHOW REQUIRE LOGIN
if(isLoggedIn === false){
  return(
    <div className="row text-center align-items-center m-5 rounded-4" style={{minHeight: "20vh", background: "#EEF3F3"}}>
      <h2 className="text-info">Sorry! You have to login before using the service</h2>
    </div>
  )
} else if (isLoggedIn === true)
  return (
    <div className="">
      <div className="container w-90 mx-auto  p-8 shadow-sm">
        <form method="post" action="/api/pet/add" onSubmit={handleAddNewPet} encType="multipart/form-data"
        data-multi-step className="multi-step-form m-8 p-8 fs-4">
        {/* <div className="card" data-step> */}
          <div className="">
            <h3 className="text-center font-weight-bolder border-bottom border-success mt-5"
              style={{fontWeight: "bold"}}>Reason Rehome Your Pet</h3></div>
          
          {/* <div className="form-field m-3 p-3"> */}
            <div className="form-group row m-4 p-2">
              <label htmlFor="pet_type" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Are you rehoming a dog, cat or other pet?</label>
              
                <select className=" col-lg-8 border-dark" name="pet_type" required
                value={petType}
                onChange={(event) => setPetType(event.target.value)} >
                  <option value="" defaultValue={"selected"} >Select One</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  {/* <option value="none">Other</option> */}
                </select>
             
            </div>
            
          {/* </div> */}

          <div className="form-group row m-4 p-2">
            <label htmlFor="spayed_neutered" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>
              Is your pet spayed or neutered?</label>
            {/* <div className=" col"> */}
              <select className="col-lg-8 border-dark" name="spayed_neutered" id="spayed_neutered" required
              value={isSpayed}
              onChange={(event) => setIsSpayed(event.target.value)} >
                <option data-eventlabel="unset" value="" defaultValue={"selected"}>Select One</option>
                <option data-eventlabel="spayed/neutered" value="true">Yes</option>
                <option data-eventlabel="not spayed/neutered" value="false">No</option>
              </select>
              <span className="error-message fix-margin-1"></span>

              {/* <div className="more-message closed">
                <p id="easy_not_spayed" style={{ display: "none" }}
                  // spayed={({ spayedStatus }) => {
                  //   console.log(spayedStatus)
                  // }}
                  // showSpayInfor={(spayedStatus) => {
                  //   console.log(spayedStatus);
                  // }}
                >At this time we are unable to rehome pets that are not spayed or neutered. To locate low cost spay/neuter providers in your area, use 
                <a data-track="{&quot;eventCat&quot;: &quot;Onboarding&quot;, &quot;eventAct&quot;: &quot;Clicked ASPCA low cost spay neuter programs link&quot;, &quot;eventLbl&quot;: &quot;List-A-Pet v1 Step 1 Other pet type&quot;}" 
                href="http://www.aspca.org/pet-care/general-pet-care/low-cost-spayneuter-programs" target="_blank">this tool</a>.</p>
              </div> */}

            {/* </div> */}
          </div>
          

          <div className="form-group row m-4 p-2">
            <label htmlFor="rehome_reason" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>
              Why do you need to rehome your pet?</label>
            <select className="col-lg-8 border-dark" name="rehome_reason" required
            value={rehomeReason}
            onChange={(event) => setRehomReason(event.target.value)} >
              <option value="" defaultValue={"selected"}>Select One</option>
              <option value="Behavioral issues">Behavioral issues</option>
              <option value="Busy schedule">Busy schedule</option>
              <option value="Does not get along with other pet">Does not get along with another pet</option>
              <option value="Fostered">Fostered</option>
              <option value="Found or abandoned">Found or abandoned</option>
              <option value="Human health issues (e.g. allergies, sickness)">Human health issues (e.g. allergies, sickness)</option>
              <option value="Infant, young children or pregnancy">Infant, young children or pregnancy</option>
              <option value="Landlord permission issues">Landlord permission issues</option><option value="Ongoing costs (e.g. lost job)">Ongoing costs (e.g. lost job)</option>
              <option value="Pet medical expenses (e.g. vet procedure)">Pet medical expenses (e.g. vet procedure)</option>
              <option value="Relocating">Relocating (e.g. moving)</option>
            </select>
            
          </div>

          <div className="border-bottom
              justify-content-center border-success">
                <h3 className="text-center  mt-3"><p className="font-weight-bold" style={{fontWeight: "bold"}}>Pet Profile</p></h3>
          </div>

          <div className="form-group row m-4 p-2">
            <label htmlFor="petName" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Your Pet name</label>
            <input className="col-lg-8 " type="name" id="petNameInput" placeholder="Your Pet name" required
            value={petName}
            onChange={(event) => setPetName(event.target.value)} />
          </div>

          <div className="form-group row m-4 p-2">
            <label htmlFor="breed" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Breed</label>
            <input className="col-lg-8 " type="name" name="breed" id="breedInput" required
            value={breed}
            onChange={(event) => setBreed(event.target.value)} />
          </div>
          <div className="form-group row m-4 p-2">
            <label htmlFor="gender" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Gender</label>
            <select className="col-lg-8 border-dark" name="gender" data-error-message="Select Gender" required
            value={gender}
            onChange={(event) => setGender(event.target.value)} >
              <option value="">Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="form-group row m-4 p-2">
            <label htmlFor="age" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Age</label>
            <select className="col-lg-8 border-dark" name="age" data-error-message="Select Age" required
            value={age}
            onChange={(event) => setAge(event.target.value)} >
              <option value="">Select one</option>
              {/* <option value="">0-6 months</option> */}
              <option value="puppy">0-12 months</option>
              <option value="young">1-3 years</option>
              <option value="adult">3-7 years</option>
              <option value="senior">Over 7 years</option>
            </select>
          </div>
          <div className="form-group row m-4 p-2">
            <label htmlFor="size_weight" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Size</label>
            <select className="col-lg-8 border-dark" name="size_weight" data-error-message="Select Size" required
            value={size}
            onChange={(event) => setSize(event.target.value)} >
              <option value="">Size</option>
              <option value="1">lest than 5 lbs</option>
              <option value="2">6 - 10 lbs</option>
              <option value="3">11 - 20 lbs</option>
              <option value="4">21 - 50 lbs</option>
              <option value="5">51 - 90 lbs</option>
              <option value="6">more than 90 lbs</option>
            </select>
          </div>
          <div className="form-group row m-4 p-2">
            <label htmlFor="color" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Color</label>
            <input className="col-lg-8 " type="text" id="colorInput" required
            value={color}
            onChange={(event) => setColor(event.target.value)} />
          </div>
          <div className="form-group row m-4 p-2">
            <label htmlFor="formFileMultiple" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>
              Upload the picture of your pet</label>
            <input className="col-lg-8 " type="file" required id="imageUploaded"
              accept="image/*" 
              // value={image}
              // onChange={(event) => setImage(event.target.value)} 
              />

          </div>
          <div>
            <div className="form-group row m-4 p-2">
              <label htmlFor="description" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Description</label>
              <textarea className="col-lg-8 border-dark" maxLength="1000" id="story" name="description" 
              placeholder="Need time to think about? That’s ok, you can always edit later."
              style={{height: 100}}
              value={description}
              onChange={(event) => setDescription(event.target.value)} ></textarea>
            </div>
          </div>
          <div>
            <div className="form-group row m-4 p-2">
              <label htmlFor="diet" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Diet</label>
                <textarea maxLength="1000" id="food_description" name="diet" 
                placeholder="Add your pet food here."
                className="col-lg-8 border-dark" style={{height: 100}}
                value={diet}
                onChange={(event) => setDiet(event.target.value)} 
                ></textarea>
            </div>
          </div>
        {/* </div> */}

        <div className="form-group row justify-content-center mb-5">
          <button className="btn btn-primary col-md-3" style={{height: 50}}>Submit Form</button></div>
      </form>
      </div>
      
      {/* CHECK ADDSUCCESS TO SHOW MODAL CONFIRMATION */}
      {addSuccess === true ? displayPopupConfirm() : ""}
    </div>
  );
}
 
export default RehomePet;

