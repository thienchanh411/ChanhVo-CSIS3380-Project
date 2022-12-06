import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../components/AppContext';
import ListManageRequest from '../components/ListManageRequest';
import axios from 'axios';

const ManagePosting = () => {

  const {listPet, setListPet} = useContext(AppContext);
  const {listRequest, setListRequest} = useContext(AppContext);
  const {isLoggedIn, loggedInID} = useContext(AppContext);

  const [showEditForm, setShowEditForm] = useState(false);
  const [petInfoModal, setPetInfoModal] = useState({});
  const [showCollapseForm, setShowCollapseForm] = useState(false);
  const [styleManageForm, SetStyleManageForm] = useState('none');


    useEffect(() => {
    const urlAPI = `http://localhost:5000/api/request/toowner/${loggedInID}`;
    console.log("Api request",urlAPI)
    if(loggedInID === ""){
      return
    }

      axios.get(urlAPI)
      .then((res) => {
        setListRequest(res.data);
      })
      .catch((err) => {
        console.log("User has not logged in");
      })

    
  }, [loggedInID, setListRequest])
  

  // FUNCTION HANDLE DELETE POSTING
  const handleDeletePosting = async (pet) => {

    const urlAPI = `http://localhost:5000/api/pet/delete/${pet._id}`;

    const {data} = await axios.patch(urlAPI);

    if(data === 1){
      const newListPet = listPet.filter((petElem) => petElem._id !== pet._id)
      setListPet(newListPet);
    }


  }

  // Function handle Edit Posting
  const handleEditPosting = async (pet) => {
    
    // const urlAPI = `http://localhost:5000/api/pet/update/${pet._id}`;
    setShowEditForm(true);
    setPetInfoModal(pet);
  }
  // METHOD HANDLE CLOSE BTN OF EDIT POPUP FORM
  const closeEditForm = () => {
    setShowEditForm(false)
  }

  const handleManageBtn = (_id) => {

    if (showCollapseForm === false) {
      setShowCollapseForm(true)
      SetStyleManageForm('block')
    }
    else {
      setShowCollapseForm(false)
      SetStyleManageForm('none')
    }

    const manageForm = document.getElementById(`collapse${_id}`)
    console.log(manageForm);
    manageForm.style.display = styleManageForm;
  }

  const editPetInformation = async (pet) => {

    const petName = document.getElementById("petName").value
    const petType = document.getElementById("petType").value
    const breed = document.getElementById("breedInput").value
    const gender = document.getElementById("gender").value
    const isSpayed = document.getElementById("spayed_neutered").value
    const age = document.getElementById("age").value
    const size = document.getElementById("size").value
    const color = document.getElementById("color").value
    let image = document.getElementById("uploadPicture").value
    const description = document.getElementById("description").value
    const diet = document.getElementById("diet").value
    const rehomeReason = document.getElementById("rehomeReason").value

    const status = "Active";

    // image === "" ? (image = pet.image) : image = document.getElementById("uploadPicture").value
    console.log("Click edit pet profile")
    // event.preventDefault();

    if(image===""){
      image = pet.image;
    }
    const showNotification = document.getElementById("showResultUpdatePet");
    const urlAPI = `http://localhost:5000/api/pet/update/${pet._id}`;
    console.log("Url when click update",urlAPI);
    console.log("petID: ", pet._id);

    const {data} = await axios.put(urlAPI,  {
      ownerId : loggedInID, 
      petName, petType, gender, breed, age, size, isSpayed, color, image, description, 
      diet,rehomeReason, status})
    console.log("result after update pet profile",data)
    if(data === 1) {
        showNotification.innerHTML = "Your pet profile has been updated successfully";
        showNotification.style.color = "green";
    }else{
        showNotification.innerHTML = "No thing changed in your pet profile";
        showNotification.style.color = "blue";
    }


    const newListPet = listPet.map(petElem => 
      petElem._id === pet._id ? {
        // _id: pet._id,ownerId : loggedInID, 
        ...petElem,
        petName, petType, gender, breed, age, size, isSpayed, color, image, description, 
        diet,rehomeReason, status, 
      }: {...petElem});

    console.log("list pet after update",newListPet)
    setListPet(newListPet)
    // setShowEditForm(false)
  }
  // METHOD SHOW POPUP EDIT FORM
  const displayEditForm = (pet) => {
    console.log("pet _id in edit form",pet._id)
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
              <form data-multi-step className="multi-step-form m-1 p-2 "
                // onSubmit={editPetInformation(pet)}
                >
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
                  </select>

                </div>

                {/* </div> */}

                <div className="form-group row m-4 p-2">
                  <label htmlFor="spayed_neutered" className="col-lg-4 col-form-label" style={{ fontWeight: "bold" }}>Is your pet spayed or neutered?</label>
                  {/* <div className=" col"> */}
                  <select className="col-lg-8 border-dark" name="spayed_neutered"
                    id="spayed_neutered" defaultValue={pet.isSpayed}
                  // onChange={(event)=>setIsSpayed(event.target.value)}
                  >
                    <option data-eventlabel="unset">Select One</option>
                    <option data-eventlabel="spayed/neutered" value="true">Yes</option>
                    <option data-eventlabel="not spayed/neutered" value="false">No</option>
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
                    defaultValue={pet.petName}
                  // onChange={(event)=>setPetName(event.target.value)}
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
                    <option value="">Choose one</option>
                    <option value="puppy">0-12 months</option>
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

                  // onChange={(event)=>setImage(event.target.value)}
                  />
                </div>
                <div>
                  <div className="form-group row m-4 p-2">
                    <label htmlFor="description" className="col-lg-4 col-form-label">Description</label>
                    <textarea className="col-lg-8 border-dark" maxLength="1000" id="description" name="story"
                      defaultValue={pet.description}
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
                onClick={() => editPetInformation(petInfoModal)}
                >Save changes</button>
            </div>

            <div className="row text-center mt-4 " style={{fontWeight: "bold"}}>
              <p id="showResultUpdatePet"></p>
          </div>
          </div>
          
        </div>
      </div>
    )
  }

  // Handle accept request
  const handleAccept = async(request) => {

    console.log("Accept btn is clicked")

    let currentDate = new Date();

    const urlRejectAPI 
      = `http://localhost:5000/api/request/byowner/reject/${request._id}/${request.petId}`;
    
    const {data} = await axios.put(urlRejectAPI, {
      responseTime: currentDate.toUTCString(), 
      status: "Rejected"
    });
    console.log(data);
    const urlAPI = `http://localhost:5000/api/request/byowner/${request._id}`

    const acceptRequest = async() => {
      const {data} = await axios.put(urlAPI, {
          responseTime : currentDate.toUTCString(), 
          status: "Accepted"
        })
      
      return {data};
    }
    acceptRequest();

    const urlPetAPI = `http://localhost:5000/api/pet/adopted/${request.petId}`;

    const updatedPet = await axios.patch(urlPetAPI);
    console.log("updated pet", updatedPet);

    console.log(listPet);

    const newPetList = listPet.map(petElem => petElem._id === request.petId
        ? {...petElem, status : "Adopted"} : {...petElem});
    
    setListPet(newPetList);
    console.log(listPet);

    const updatedReqList = listRequest.filter((requestElem) => request.petId === requestElem.petId)
    .map((requestElem) => (requestElem._id === request._id) 
    ? {...requestElem, responseTime : currentDate.toUTCString(), status: "Accepted"}
    : {...requestElem, responseTime : currentDate.toUTCString(), status: "Rejected"})

    const remainReqList = listRequest.filter((requestElem) => request.petId !== requestElem.petId);
    const newRequestList = [];
    updatedReqList.map(requestElem => newRequestList.push(requestElem));
    remainReqList.map(requestElem => newRequestList.push(requestElem));
    
    setListRequest(newRequestList);

  }
  // HANDLE REJECT REQUEST
  const handleReject = async (request) => {
    let currentDate = new Date();
    
    const status = "Rejected";

    console.log(request);

    const urlAPI = `http://localhost:5000/api/request/byowner/${request._id}`

    const {data} = await axios.put(urlAPI, {
      responseTime : currentDate.toUTCString(), 
      status
    })

    console.log("Result when click reject request", data);

    const newRequestList = listRequest.map((requestElem) => 
      (requestElem._id === request._id) 
      ? {...requestElem, responseTime : currentDate.toUTCString(), status}
      : {...requestElem}
    )
    setListRequest(newRequestList);

    // const indexRequest = listRequest.findIndex((reqElem) => reqElem.requestId === request.requestId);

    // const remainRequest = listRequest.filter((reqElem) =>
    // (reqElem.requestId !== request.requestId))

    // remainRequest.splice(indexRequest, 0, request);
    // console.log(remainRequest)
    // setListRequest(remainRequest);
  }

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
      <h2>This Page for Manage Adopt Request</h2>
      {/* {console.log("Set new list request",listRequest)} */}
      <div className="row m-auto">
        {listPet.length === 0 ? (<h4>There is no Posting</h4>) : ("")}
        {listPet.filter((pet) => pet.status === "Active")
        .map((pet, index) => {
          return (
            < div  key={index}>
              <div className="row-lg col-md mx-4 px-5 py-3 justify-content-center fs-4" id="imgPetSearch">
                <div className="row justify-content-center 
                border border-info rounded shadow-lg p-1 mb-5 bg-body">
                  <div className="col-4 align-content-center my-4">
                    <img src={pet.image} alt="pet 1" style={{ height: "35vh", width: "35vh" }} />
                    {/* {console.log(pet.image)} */}
                  </div>
                  <div className="col-6 align-content-center my-auto">
                    <p>Name: {pet.petName}</p>
                    <p>Breed: {pet.breed}</p>
                    <p>Gender: {pet.gender}</p>
                    <p>Age: {pet.age}</p> 
                    <p>Color: {pet.color}</p>
                    {/* {isAuthenticated === false ? "" : (
                      <p>Address: </p>
                    )} */}

                  </div>


                  {/* Check if authenticated user will show the show detail btn and request btn */}

                  {isLoggedIn === false ? "" : (
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
                          onClick={() => handleManageBtn(pet._id)}
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
              id={`collapse${pet._id}`}>
                <div className="">
                  <ul className="list-group">

                    {listRequest === null ? "There is no request"
                    : listRequest.filter((request) => request.petId === pet._id)
                      .filter((request) => request.ownerId === loggedInID)
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
  )};
}

export default ManagePosting;