import React, { useState, useContext } from "react";
import { AppContext } from "../components/AppContext";

const AdoptPet = () => {
  const {listRequest, setListRequest} = useContext(AppContext);
  const {listPet, setListPet} = useContext(AppContext);
  const userID = 3;

  const isAuthenticated = true;
  
  const [showModal, setShowModal] = useState(false)
  const [modalInfo, setModalInfo] = useState({})

  // Click button Detail to show more information
  const showDetail = (pet) => {
    console.log(pet);
    setShowModal(true);
    // Object.assign(pet, ...modalInfo)
    setModalInfo(pet);
    console.log(modalInfo)
    // showModal===true ? displayModal(pet): (<p></p>);

  }
  // console.log(modalInfo);
  // Click Close button to close the information pop up
  const closeModal = () => {
    return setShowModal(false)
  }

  let modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)"
  }
  console.log("show modal: ", showModal);

  const sendAdopRequest = (pet) => {

    const newPetList = listPet.filter((petInList) => petInList.id !== pet.id)
    console.log("click adopt", newPetList);
    setListPet(newPetList)
    // const requestList = requestInfo;

    let currentRequestID = 7;

    let currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const requestTime = hour + ":" + minute + ":" + second + " " + month + "/" + date + "/" + year;

    const status = "Pending";

    const newRequestList = [...listRequest, {
      requestID : currentRequestID,
      senderID: userID,
      ownerId: pet.ownerID,
      requestTime: requestTime,
      responseTime: "",
      status: status
    }]
    currentRequestID++;
    setListRequest(newRequestList);
    console.log(newRequestList);
  }

  const displayModal = (pet) => {

    return (
      <div>

        <div className="modal show fade" tabIndex="-1" style={modalStyle}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Pet Detail</h5>

              </div>
              <div className="modal-body">
                <p>Name: {pet.name}</p>
                <p>Breed: {pet.breed}</p>
                <p>Gender: {pet.gender}</p>
                <p>Age: {pet.age}</p>
                <p>diet: {pet.diet}</p>
                <p>Reason Rehome: {pet.rehomeReason}</p>
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



  return (
    // <>
    <div className="overflow-hidden shadow" >
      <h1>
        This page for finding pets.
      </h1>
      <div className="row m-auto">
        {listPet.length === 0 ? (<h4>There is no pet</h4>) : ("")}
        {listPet.map((pet, index) => {
          return (
            // < >
            <div key={index} className="col-lg-4 col-md-6 w-90 p-3 justify-content-center" id="imgPetSearch">
              <div className="row m-2 w-80 justify-content-center  rounded shadow-lg p-3 mb-5 bg-body">
                <div className="row">
                  <img className="mx-auto mb-3" src={pet.picture} alt="pet  1" style={{ height: 350, width: 350 }} />
                </div>
                <div className="row ps-4 fs-4">
                  <p>Name: {pet.name}</p>
                  <p>Breed: {pet.breed}</p>
                  <p>Gender: {pet.gender}</p>
                  <p>Age: {pet.age}</p>
                  {isAuthenticated === false ? "" : (
                    <p>Address: </p>
                  )}

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
      {console.log(modalInfo)}

      {/* Display modal to show Pet information */}

      {showModal === false ? "" : displayModal(modalInfo)}
    </div>

  );
};

export default AdoptPet;
