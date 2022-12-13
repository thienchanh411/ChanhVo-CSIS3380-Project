import React from "react";
import Developer from "../components/DeveloperInfo"
// import axios from "axios";

const HomePage = () => {
   
  // const makeJoke = async () => {
  //   const urlJokeAPI = `https://v2.jokeapi.dev/joke/Any`;
    
  //   // try {
  //   await axios.get(urlJokeAPI)
  //   .then((res) => {
  //       console.log(res.data)
  //       let displayImg = document.getElementById("fetchJokeAPI");
  //        displayImg.innerHTML = (`<p>${res.data.setup}</p>`)
  //        let displayImg2 = document.getElementById("fetchJoke2API");
  //        displayImg2.innerHTML = (`<p>${res.data.delivery}</p>`)
      
  //   })
  //   .catch(err => { console.log(err) });

  // }
  // makeJoke()
  

  return (
    <div>
      
      <div className="d-lg-flex d-none align-items-center justify-content-center "
        style={{
          minHeight: "50vh",
          backgroundImage: "url(/Session-Homepage-5.jpg)",
          backgroundBlendMode: "overlay",
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7
        }}>
        {/* <div className="row-4"></div> */}
        <div className="row-4 text-center" >
          <h2 className="fs-2">Where Happily Ever After Begins. Again. </h2>
          <h4 className="mb-5">We are here to help you find <br /> a new loving family for your beloved pet</h4>
          <div className=" text-center justify-content-center fs-3 my-5">
            <button className="btn btn-primary">Get started</button>
          </div>
        </div>
        {/* <div className="row-4"></div> */}
      </div>

      <div className="d-lg-none d-flex align-items-center justify-content-center border-bottom border-3"
        style={{
          minHeight: "40vh",
          backgroundBlendMode: "overlay",
          backgroundSize: '100% 100%',
        }}>
        {/* <div className="row-4"></div> */}
        <div className="row-4 text-center " style={{ color: "#134f5c" }}>
          <h2>Where Happily Ever After Begins. Again. </h2>
          <h4 className="mb-5">We are here to help you find <br /> a new loving family for your beloved pet</h4>
          <div className=" text-center justify-content-center fs-3 my-5">
            <button className="btn btn-primary">Get started</button>
          </div>
        </div>
        {/* <div className="row-4"></div> */}
      </div>


      <div className="container text-center justify-content-center align-items-center"> 
      {/* <div id="fetchImgAPI" className="container"></div> */}
        <div className="container text-center pt-5"><h3 style={{fontWeight: "bold"}}>
          A pet can tell a joke</h3></div>
        <div className="row"><p className="col fs-4" id="fetchJokeAPI"></p></div>
        <div className="row"><p className="col fs-4" id="fetchJoke2API"></p></div>
        
      </div>



      <div>
        <div className="mt-3">
          <h2 className="fs-1 fw-bold text-center mt-5">How is works</h2>
        </div>
        <div className="d-flex p-3 align-items-center justify-content-center">
          <table className="m-5 mt-1 col-8">
            <thead className="mx-5">
              <tr>
                <th className="fs-3" scope="col" style={{ minWidth: "10vh" }}></th>
                <th className="fs-4" scope="col" style={{ minWidth: "30vh" }}></th>
              </tr>

            </thead>

            <tbody className="mx-5 ">
              <tr className="my-3">
                <td style={{ height: "16vh", width: "20vh" }} className="p-2 row justify-content-center">
                  <div className="d-flex justify-content-center align-items-center border 
                      border-primary  border-5 rounded-circle bg-gradient"
                    style={{ height: "14vh", width: "14vh", backgroundColor: "#e2e2e2" }}>
                    <img src="/petProfileIcon.png" alt="step icon" style={{ height: "8vh", width: "8vh" }}></img>
                  </div>
                </td>
                <td className="fs-4 ps-5 ">
                  <h4 className="fw-bold">Create a Pet Profile</h4>
                  <p>Get your pets posted on Adopt-a-Pet.com to be seen by millions of pet adopters.</p>
                </td>
              </tr>
              <tr className="my-3">
                <td style={{ height: "16vh", width: "20vh" }} className="p-2 row justify-content-center">
                  <div className="d-flex justify-content-center align-items-center border 
                      border-primary  border-5 rounded-circle"
                    style={{ height: "14vh", width: "14vh", backgroundColor: "#e2e2e2" }}>
                    <img src="/reviewCandidateIcon.png" alt="step icon" style={{ height: "8vh", width: "8vh" }}></img>
                  </div>
                </td>
                <td className="fs-4 ps-5">
                  <h4 className="fw-bold">Review Applications</h4>
                  <p>The dedicated team at Rehome will give you all the help you need to select the best potential adopters.</p>

                </td>
              </tr>
              <tr className="my-3">
                <td style={{ height: "16vh", width: "20vh" }} className="p-2 row justify-content-center">
                  <div className="d-flex justify-content-center align-items-center border 
                      border-primary  border-5 rounded-circle"
                    style={{ height: "14vh", width: "14vh", backgroundColor: "#e2e2e2" }}>
                    <img src="/meetingIcon.png" alt="step icon" style={{ height: "10vh", width: "10vh" }}></img>
                  </div>
                </td>
                <td className="fs-4 ps-5">
                  <h4 className="fw-bold">Meet Adopters</h4>
                  <p>The Rehome team will guide you through the process of setting safe and pressure-free meetings with applicants.</p>
                </td>
              </tr>
              <tr className="my-3 ">
                <td style={{ height: "16vh", width: "20vh" }} className="p-2 row justify-content-center">
                  <div className="d-flex justify-content-center align-items-center border 
                      border-primary  border-5 rounded-circle"
                    style={{ height: "14vh", width: "14vh", backgroundColor: "#e2e2e2" }}>
                    <img src="/makeDecisionIcon.png" alt="step icon" style={{ height: "10vh", width: "10vh" }}></img>
                  </div>
                </td>
                <td className="fs-4 ps-5">
                  <h4 className="fw-bold">Finalize Adoption</h4>
                  <p>Rehome will provide you with an adoption contract to protect the transfer of your pet ownership.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row m-4 border-bottom border-3">
        <div className="row ml-4 mr-2 my-4 text-center">
          <h3 className="fs-1 fw-bold">You are in good hands</h3>
        </div>

        <div className="col-md-4 ml-4 mr-2 my-4 text-center">
          <h4 className="fs-2 fw-bold">Trusted</h4>
          <div>
            <img className="m-5"
              src="TrustIcon.png" alt="IconHomepage" style={{ maxWidth: "18vh", maxHeight: "18vh" }}></img>
          </div>
          <p className="fs-4 p-2">We are a trusted organization and our dedicated
            team of pet experts is here to support you throughout this process.</p>
        </div>
        <div className="col-md-4 ml-4 mr-2 my-4 text-center">
          <h4 className="fs-2 fw-bold">Support</h4>
          <div>
            <img className="m-5"
              src="SupportIcon.png" alt="IconHomepage" style={{ maxWidth: "18vh", maxHeight: "18vh" }}></img>
          </div>
          <p className="fs-4 p-2">We are here to help! We take great care in finding loving
            homes for pets and making sure that the new family is a good match for your pet</p>
        </div>
        <div className="col-md-4 ml-4 mr-2 my-4 text-center">
          <div>
            <h4 className="fs-2 fw-bold ">Secure</h4>
          </div>

          <div>
            <img className="m-5"
              src="SaveIcon.png" alt="IconHomepage" style={{ maxWidth: "18vh", maxHeight: "18vh" }}></img>
          </div>
          <p className="fs-4 p-2">Your personal information will never be shared or shown to the public.</p>
        </div>
      </div>
      <Developer />
    </div>
  );
};

export default HomePage;