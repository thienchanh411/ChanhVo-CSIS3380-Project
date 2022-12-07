import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../components/AppContext";
import axios from "axios";

const AdoptPet = () => {
  const { listRequest, setListRequest } = useContext(AppContext);
  const { listAvailablePet, setListAvailablePet } = useContext(AppContext);
  const { isLoggedIn, loggedInID } = useContext(AppContext);

  const isAuthenticated = true;

  const [showModal, setShowModal] = useState(false)
  const [modalInfo, setModalInfo] = useState({})

  const petSizeArr = ["lest than 5 lbs", "6 - 10 lbs", "11 - 20 lbs", "21 - 50 lbs", 
        "51 - 90 lbs", "more than 90 lbs"]
  // GET ALL AVAILABLE PET FOR USER
  useEffect(() => {
    const urlAPI = `http://localhost:5000/api/pet/touser/${loggedInID}`;
    console.log("Api request", urlAPI)
    if (loggedInID === "") {
      return
    }

    axios.get(urlAPI)
      .then((res) => {
        setListAvailablePet(res.data);
      })
      .catch((err) => {
        console.log("Error when fetch available pets: ", err);
      })

  }, [loggedInID, setListAvailablePet])


  // Click button Detail to show more information
  const showDetail = (pet) => {
    // console.log(pet);
    setShowModal(true);
    // Object.assign(pet, ...modalInfo)
    setModalInfo(pet);
    // console.log(modalInfo)
    // showModal===true ? displayModal(pet): (<p></p>);

  }

  // Click Close button to close the information pop up
  const closeModal = () => {
    return setShowModal(false)
  }

  let modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)"
  }

  // HANDLE SEND REQUEST TO ADOPT PET
  const sendAdopRequest = async (pet) => {

    let currentDate = new Date();

    const status = "Pending";

    const urlAPI = `http://localhost:5000/api/request/${loggedInID}`;
    console.log("Api send adopt request", urlAPI)

    const { data } = await axios.post(urlAPI, {
      senderId: loggedInID,
      ownerId: pet.ownerId,
      petId: pet._id,
      requestTime: currentDate.toUTCString(),
      status: status
    })

    console.log("Result after processing in API", data);

    if(typeof data === "object"){
      const newRequestList = [...listRequest, data]
      setListRequest(newRequestList);
      console.log(newRequestList);

      const newPetList = listAvailablePet.filter((petInList) => petInList._id !== pet._id)
      console.log("click adopt", newPetList);
      setListAvailablePet(newPetList)

    }else{
      console.log("Fail to add new request");
    }
    
  }

  // HANDLE DISPLAY POP UP PET INFORMATION
  const displayModal = (pet) => {

    return (
      <div>

        <div className="modal show fade modal-lg fs-5" tabIndex="-1" style={modalStyle}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title ">Pet Detail</h4>

              </div>
              <div className="modal-body">
                <div className="row">
                  <p className="col-3" >Name: <span></span></p>
                  <p className="col" style={{fontWeight: "bold"}}>{pet.petName}</p>
                </div>
                <div className="row">
                  <p className="col-3" >Breed: <span></span></p>
                  <p className="col" style={{fontWeight: "bold"}}>{pet.breed}</p>
                </div>
                <div className="row">
                  <p className="col-3" >Gender: <span></span></p>
                  <p className="col" style={{fontWeight: "bold"}}>{pet.gender}</p>
                </div>
                <div className="row">
                  <p className="col-3" >Size: <span></span></p>
                  <p className="col" style={{fontWeight: "bold"}}>
                  {petSizeArr[pet.size -1]}</p>
                </div>
                <div className="row">
                  <p className="col-3" >Spayed: <span></span></p>
                  <p className="col" style={{fontWeight: "bold"}}>
                  {(pet.isSpayed === "true") ? "Yes" : "No"}</p>
                </div>
                <div className="row">
                  <p className="col-3" >Age: <span></span></p>
                  <p className="col" style={{fontWeight: "bold"}}>{pet.age}</p>
                </div>
                <div className="row">
                  <p className="col-3" >Diet: <span></span></p>
                  <p className="col" style={{fontWeight: "bold"}}>{pet.diet}</p>
                </div>
                <div className="row">
                  <p className="col-3" >Reason Rehome: <span></span></p>
                  <p className="col" style={{fontWeight: "bold"}}>{pet.rehomeReason}</p>
                </div>
                <div className="row">
                  <p className="col-3" >Description: <span></span></p>
                  <p className="col" style={{fontWeight: "bold"}}>{pet.description}</p>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                  onClick={() => closeModal()}
                >Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  };

  // CHECK IF USER LOGGED IN, SHOW ALL CONTENT, ELSE, SHOW REQUIRE LOGIN

  if (isLoggedIn === false) {
    return (
      <div className="row text-center align-items-center m-5 rounded-4" style={{ minHeight: "20vh", background: "#EEF3F3" }}>
        <h2 className="text-info">Sorry! You have to login before using the service</h2>
      </div>
    )
  } else if (isLoggedIn === true) {

    return (
      // <>
      <div className="overflow-hidden shadow " >
        <h1 className="text-center">
          You can find your new pet in here
        </h1>
        <div className="row m-auto">
          {listAvailablePet.length === 0 ? (<h4 className="text-center">There is no pet</h4>) : ("")}
          {console.log("Total available pets: ", listAvailablePet.length)}
          {listAvailablePet.map((pet, index) => {
            return (
              // < >
              <div key={index} className="col-lg-4 col-md-6 w-90 p-3 justify-content-center" id="imgPetSearch">
                <div className="row m-2 w-80 justify-content-center  rounded shadow-lg p-3 mb-5 bg-body">
                  <div className="row">
                    <img className="mx-auto mb-3" src={pet.image} alt="pet  1" style={{ height: 350, width: 350 }} />
                  </div>
                  <div className="row ps-4 fs-5">
                    <p>Name: {pet.petName}</p>
                    {/* <p>Type: {pet.petType}</p> */}
                    <p>Breed: {pet.breed}</p>
                    <p>Gender: {pet.gender}</p>
                    {/* <p>Age: {pet.age}</p> */}
                    {/* {isAuthenticated === false ? "" : (
                    <p>Address: </p>
                  )} */}

                  </div>
                  <div >

                    {/* Check if authenticated user will show the show detail btn and request btn */}

                    {isAuthenticated === false ? "" : (
                      <div className="row ">
                        <div className="col ">
                          <div className="row justify-content-center mx-auto">
                            <button type="button" className="btn btn-secondary " data-bs-toggle="modal"
                              onClick={() => showDetail(pet)}
                              style={{ width: 120 }}
                              data-bs-target="#exampleModal">
                              Detail
                            </button>
                          </div>

                        </div>
                        <div className="col ">
                          <div className="row justify-content-center mx-auto">
                            <button className="btn btn-success " style={{ width: 120 }}
                              onClick={() => sendAdopRequest(pet)}
                            >Adopt</button>
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              // </>

            )
          })}
        </div>

        {/* Display modal to show Pet information */}

        {showModal === false ? "" : displayModal(modalInfo)}
      </div>

    )
  };
};

export default AdoptPet;
