import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../components/AppContext";

const RehomePet = () => {

  const {listPet, setListPet} = useContext(AppContext)

  const [petType, setPetType] = useState("");
  const [isSpayed, setIsSpayed] = useState("");
  const [rehomeReason, setRehomReason] = useState("");
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [diet, setDiet] = useState("");

  const ownerId = 3;

  const handleAddNewPet = (event) => {
    event.preventDefault();
    const status = "Active";

    const newPetList = [...listPet, {
      id : 6,
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
    setImage("");
    setDescription("");
    setDiet("");


  }

  return (
    <div className="">
      <div className="container w-90 mx-auto  p-8 shadow-sm">
        <form method="post" action="/pet" onSubmit={handleAddNewPet}
        data-multi-step className="multi-step-form m-8 p-8 fs-4">
        {/* <div className="card" data-step> */}
          <div className="">
            <h3 className="text-center font-weight-bolder border-bottom border-success mt-5"
              style={{fontWeight: "bold"}}>Reason Rehome Your Pet</h3></div>
          
          {/* <div className="form-field m-3 p-3"> */}
            <div className="form-group row m-4 p-2">
              <label htmlFor="pet_type" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Are you rehoming a dog, cat or other pet?</label>
              
                <select className=" col-lg-8 border-dark" name="pet_type"
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
              <select className="col-lg-8 border-dark" name="spayed_neutered" id="spayed_neutered"
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
            <select className="col-lg-8 border-dark" name="rehome_reason" 
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
            <input className="col-lg-8 " type="name" id="petNameInput" placeholder="Your Pet name" 
            value={petName}
            onChange={(event) => setPetName(event.target.value)} />
          </div>

          <div className="form-group row m-4 p-2">
            <label htmlFor="breed" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Breed</label>
            <input className="col-lg-8 " type="name" name="breed" id="breedInput" 
            value={breed}
            onChange={(event) => setBreed(event.target.value)} />
          </div>
          <div className="form-group row m-4 p-2">
            <label htmlFor="gender" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Gender</label>
            <select className="col-lg-8 border-dark" name="gender" data-error-message="Select Gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)} >
              <option value="">Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="form-group row m-4 p-2">
            <label htmlFor="age" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Age</label>
            <select className="col-lg-8 border-dark" name="age" data-error-message="Select Age"
            value={age}
            onChange={(event) => setAge(event.target.value)} >
              <option value="">0-6 months</option>
              <option value="puppy">6-12 months</option>
              <option value="young">1-3 years</option>
              <option value="adult">3-7 years</option>
              <option value="senior">Over 7 years</option>
            </select>
          </div>
          <div className="form-group row m-4 p-2">
            <label htmlFor="size_weight" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Size</label>
            <select className="col-lg-8 border-dark" name="size_weight" data-error-message="Select Size"
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
            <input className="col-lg-8 " type="text" id="colorInput" 
            value={color}
            onChange={(event) => setColor(event.target.value)} />
          </div>
          <div className="form-group row m-4 p-2">
            <label htmlFor="formFileMultiple" className="col-md-4 col-form-label" style={{fontWeight: "bold"}}>Upload the picture of your pet</label>
            <input className="col-lg-8 " type="file" id="formFileMultiple"
              accept="image/x-png,image/gif,image/jpeg" 
              value={image}
              onChange={(event) => setImage(event.target.value)} />
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
      

    </div>
  );
}
 
export default RehomePet;

