import React, { useState, useContext } from 'react';
import { AppContext } from '../components/AppContext';
import ListManageRequest from '../components/ListManageRequest';

const ManagePosting = () => {

  const {listPet, setListPet} = useContext(AppContext);
  const {listRequest, setListRequest} = useContext(AppContext);

  const [showEditForm, setShowEditForm] = useState(false);
  const [petInfoModal, setPetInfoModal] = useState({});
  const [showCollapseForm, setShowCollapseForm] = useState(false);
  const [styleManageForm, SetStyleManageForm] = useState('none');

  // const [disableGroupResponseBtn,setDisableGroupResponseBtn] = useState(false)
   
  const isAuthenticated = true;

  const ownerID = 1;

  // Function handle Delete Posting
  const handleDeletePosting = (pet) => {
    const newListPet = listPet.filter((petElem) => petElem.id !== pet.id)
    setListPet(newListPet);
  }

  // Function handle Edit Posting
  const handleEditPosting = (pet) => {
    setShowEditForm(true);
    setPetInfoModal(pet);
  }

  const closeEditForm = () => {
    setShowEditForm(false)
  }

  const editPetInformation = (pet) => {

    const name = document.getElementById("petName").value
    const petType = document.getElementById("petType").value
    const breed = document.getElementById("breedInput").value
    const gender = document.getElementById("gender").value
    const spayed = document.getElementById("spayed_neutered").value
    const age = document.getElementById("age").value
    const size = document.getElementById("size").value
    const color = document.getElementById("color").value
    let picture = document.getElementById("uploadPicture").value
    const desciption = document.getElementById("description").value
    const diet = document.getElementById("diet").value
    const rehomeReason = document.getElementById("rehomeReason").value

    picture === "" ? (picture = pet.picture) : picture = document.getElementById("uploadPicture").value

    const indexEditPet = listPet.findIndex((petInList) => petInList.id === pet.id);
    const newListPet = listPet.filter((petInlist) => petInlist.id !== pet.id);
    let editPet = listPet.filter((petInlist) => petInlist.id === pet.id)
    editPet = {
      id: pet.id,
      name,
      petType,
      gender,
      breed,
      spayed,
      age,
      size,
      color,
      picture,
      desciption,
      diet,
      rehomeReason
    }

    newListPet.splice(indexEditPet, 0, editPet);

    setListPet(newListPet)
    setShowEditForm(false)
  }

  const handleManageBtn = (id) => {

    if (showCollapseForm === false) {
      setShowCollapseForm(true)
      SetStyleManageForm('block')
    }
    else {
      setShowCollapseForm(false)
      SetStyleManageForm('none')
    }

    const manageForm = document.getElementById(`collapse${id}`)
    console.log(manageForm);
    manageForm.style.display = styleManageForm;
  }

  const displayEditForm = (pet) => {
    const styleEditForm = {
      display: "block",
      backgroundColor: "rgba(0,0,0,0.8)"
    }
    return (
      // <!-- Modal -->
      <div className="modal show fade " id="editPostingFormModal" tabIndex="-1" style={styleEditForm}>
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editPostingFormModalTitle">EDIT POSTING</h5>

            </div>
            <div className="modal-body">
              <form data-multi-step className="multi-step-form m-1 p-2 ">
                {/* <div className="card" data-step> */}
                <div className="">
                  <h3 className="text-center font-weight-bolder border-bottom border-success mt-5"
                    style={{ fontWeight: "bold" }}>Reason Rehome Your Pet</h3></div>

                {/* <div className="form-field m-3 p-3"> */}
                <div className="form-group row m-4 p-2">
                  <label htmlFor="pet_type" className="col-lg-4 col-form-label" style={{ fontWeight: "bold" }}>Are you rehoming a dog, cat or other pet?</label>

                  <select className=" col-lg-8 border-dark" name="pet_type" id='petType'
                    defaultValue={pet.petType}
                  // onChange={(event)=>setPetType(event.target.value)}
                  >
                    <option value=""  >Select One</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="none">Other</option>
                  </select>

                </div>

                {/* </div> */}

                <div className="form-group row m-4 p-2">
                  <label htmlFor="spayed_neutered" className="col-lg-4 col-form-label" style={{ fontWeight: "bold" }}>Is your pet spayed or neutered?</label>
                  {/* <div className=" col"> */}
                  <select className="col-lg-8 border-dark" name="spayed_neutered"
                    id="spayed_neutered" defaultValue={pet.spayed}
                  // onChange={(event)=>setSpayed(event.target.value)}
                  >
                    <option data-eventlabel="unset" value="" >Select One</option>
                    <option data-eventlabel="spayed/neutered" value="1">Yes</option>
                    <option data-eventlabel="not spayed/neutered" value="0">No</option>
                  </select>
                  <span className="error-message fix-margin-1"></span>
                </div>


                <div className="form-group row m-4 p-2">
                  <label htmlFor="rehome_reason" className="col-lg-4 col-form-label">Why do you need to rehome your pet?</label>
                  <select className="col-lg-8 border-dark" name="rehome_reason" id='rehomeReason'
                    defaultValue={pet.rehomeReason}
                  // onChange={(event)=>setRehomeReason(event.target.value)}
                  >
                    <option value="">Select One</option>
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
                  <h3 className="text-center  mt-3"><p className="font-weight-bold" style={{ fontWeight: "bold" }}>Pet Profile</p></h3>
                </div>

                <div className="form-group row m-4 p-2">
                  <label htmlFor="petName" className="col-lg-4 col-form-label"
                    style={{ fontWeight: "bold" }}>Your Pet name</label>
                  <input className="col-lg-8 " type="name" id="petName"
                    placeholder="Your Pet name"
                    defaultValue={pet.name}
                  // onChange={(event)=>setName(event.target.value)}
                  />
                </div>

                <div className="form-group row m-4 p-2">
                  <label htmlFor="breed" className="col-lg-4 col-form-label">Breed</label>
                  <input className="col-lg-8 " type="name" name="breed" id="breedInput"
                    defaultValue={pet.breed}
                  // onChange={(event)=>setBreed(event.target.value)}
                  />
                </div>
                <div className="form-group row m-4 p-2">
                  <label htmlFor="gender" className="col-lg-4 col-form-label">Gender</label>
                  <select className="col-lg-8 border-dark" name="gender"
                    id='gender'
                    data-error-message="Select Gender"
                    defaultValue={pet.gender}
                  // onChange={(event)=>setGender(event.target.value)}
                  >
                    <option value="">Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="form-group row m-4 p-2">
                  <label htmlFor="age" className="col-lg-4 col-form-label">Age</label>
                  <select className="col-lg-8 border-dark" name="age" id='age'
                    defaultValue={pet.age}
                    // onChange={(event)=>setAge(event.target.value)}
                    data-error-message="Select Age">
                    <option value="">0-6 months</option>
                    <option value="puppy">6-12 months</option>
                    <option value="young">1-3 years</option>
                    <option value="adult">3-7 years</option>
                    <option value="senior">Over 7 years</option>
                  </select>
                </div>
                <div className="form-group row m-4 p-2">
                  <label htmlFor="size_weight" className="col-lg-4 col-form-label">Size</label>
                  <select className="col-lg-8 border-dark" name="size_weight" data-error-message="Select Size"
                    id='size'
                    defaultValue={pet.size}
                  // onChange={(event)=>setSize(event.target.value)}
                  >
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
                  <label htmlFor="color" className="col-lg-4 col-form-label">Color</label>
                  <input className="col-lg-8 " type="text" id="color"
                    defaultValue={pet.color}
                  // onChange={(event)=>setColor(event.target.value)}
                  />
                </div>
                <div className="form-group row m-4 p-2">
                  <label htmlFor="uploadPicture" className="col-lg-4 col-form-label">Upload the picture of your pet</label>
                  <input className="col-lg-8 " type="file" id="uploadPicture"
                    accept="image/x-png,image/gif,image/jpeg"

                  // onChange={(event)=>setPicture(event.target.value)}
                  />
                </div>
                <div>
                  <div className="form-group row m-4 p-2">
                    <label htmlFor="description" className="col-lg-4 col-form-label">Description</label>
                    <textarea className="col-lg-8 border-dark" maxLength="1000" id="description" name="story"
                      defaultValue={pet.desciption}
                      // onChange={(event)=>setDescription(event.target.value)}
                      placeholder="Need time to think about? That’s ok, you can always edit later."
                      style={{ height: 100 }} ></textarea>
                  </div>
                </div>
                <div>
                  <div className="form-group row m-4 p-2">
                    <label htmlFor="diet" className="col-lg-4 col-form-label">Diet</label>
                    <textarea maxLength="1000" id="diet" name="food_description"
                      placeholder="Add your pet food here."
                      defaultValue={pet.diet}
                      // onChange={(event)=>setDiet(event.target.value)}
                      className="col-lg-8 border-dark" style={{ height: 100 }}></textarea>
                  </div>
                </div>
                {/* </div> */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal"
                onClick={() => closeEditForm()}
              >Close</button>
              <button type="button" className="btn btn-primary"
                onClick={() => editPetInformation(pet)}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Handle accept request
  function handleAccept(request) {

    console.log("Accept btn is clicked")

    let currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const acceptDate = hour + ":" + minute + ":" + second + " " + month + "/" + date + "/" + year;
    const indexRequest = listRequest.findIndex((reqElem) => reqElem.requestId === request.requestId);
    console.log(listRequest);
    console.log(indexRequest);
    let editRequest = listRequest.find((reqElem) => reqElem.requestId === request.requestId)
    editRequest = {...editRequest, status: "Accepted", responseTime: acceptDate}
    console.log(editRequest);
    
    const remainRequest = listRequest.filter((reqElem) =>
      (reqElem.requestId !== request.requestId))
      .map((reqElem) => 
        reqElem.petId === request.petId
        ? { ...reqElem, status: "Rejected", responseTime: acceptDate }
        : { ...reqElem }
      )
      console.log(remainRequest)

    remainRequest.splice(indexRequest, 0, editRequest);
    console.log(remainRequest)
    setListRequest(remainRequest);
    // console.log("New List request", newListRequest)

    //  console.log(document.getElementById(`groupResponseBtn${request.requestId}`)) 
  }

  const handleReject = (request) => {
    let currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const acceptDate = hour + ":" + minute + ":" + second + " " + month + "/" + date + "/" + year;

    request.status = "Rejected";
    request.responseTime = acceptDate;

    console.log(request);

    const indexRequest = listRequest.findIndex((reqElem) => reqElem.requestId === request.requestId);

    const remainRequest = listRequest.filter((reqElem) =>
    (reqElem.requestId !== request.requestId))

    remainRequest.splice(indexRequest, 0, request);
    console.log(remainRequest)
    setListRequest(remainRequest);
  }
  console.log(listRequest);
  return (
    <>
      <h2>This Page for Manage Adopt Request</h2>
      {/* {console.log("Set new list request",listRequest)} */}
      <div className="row m-auto">
        {listPet.length === 0 ? (<h4>There is no Posting</h4>) : ("")}
        {listPet.map((pet, index) => {
          return (
            < div  key={index}>
              <div className="row-lg col-md mx-4 px-5 py-3 justify-content-center fs-4" id="imgPetSearch">
                <div className="row justify-content-center 
                border border-info rounded shadow-lg p-1 mb-5 bg-body">
                  <div className="col-3 align-content-center my-4">
                    <img src={pet.picture} alt="pet  1" style={{ height: "35vh", width: "35vh" }} />
                  </div>
                  <div className="col-6 align-content-center my-auto">
                    <p>Name: {pet.name}</p>
                    <p>Breed: {pet.breed}</p>
                    <p>Gender: {pet.gender}/ Age: {pet.age}</p>
                    {isAuthenticated === false ? "" : (
                      <p>Address: </p>
                    )}

                  </div>


                  {/* Check if authenticated user will show the show detail btn and request btn */}

                  {isAuthenticated === false ? "" : (
                    <div className="col-2 ">
                      <div className="row mx-auto justify-content-center my-5">
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                          onClick={() => handleEditPosting(pet)}
                          style={{ width: 120 }}
                          data-bs-target="#editPostingFormModal">
                          Edit
                        </button>
                      </div>
                      <div className="row mx-auto justify-content-center my-5">
                        <button className="btn btn-success " style={{ width: 120 }}
                          // data-bs-toggle="collapse"
                          // data-bs-target="#collapseManageForm"
                          onClick={() => handleManageBtn(pet.id)}
                        >Manage</button>
                      </div>
                      <div className="row mx-auto justify-content-center my-5">
                        <button className="btn btn-danger " style={{ width: 120 }}
                          onClick={() => handleDeletePosting(pet)}
                        >Delete</button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
              {/* Collapse managing board */}
              {/* <div className="collapse row-lg-8 mx-5" id={`collapse${pet.id}`}> */}
              <div className=" row-lg-8 mx-5" style={{ display: styleManageForm }} 
              id={`collapse${pet.id}`}>
                <div className="">
                  <ul className="list-group">

                    {listRequest.filter((request) => request.petId === pet.id)
                      .filter((request) => request.receiverID === ownerID)
                      .map((request, index) => {
                        // console.log(request);
                        return (
                              <ListManageRequest 
                                {...request} 
                                handleAcceptRequest = {()=>handleAccept(request)}
                                handleRejectRequest = {()=>handleReject(request)}
                               key={index}/>
                        )
                      })}
                  </ul>
                </div>
                
              </div>
              
              {/* {showCollapseForm === false ? "" : displayManageForm(pet)} */}
            </ div>
            
          )
        })}
      </div>

      {/* Check if user click EDIT button, the Edit form will be showed */}
      {showEditForm === false ? "" : displayEditForm(petInfoModal)}


    </>
  );
}

export default ManagePosting;