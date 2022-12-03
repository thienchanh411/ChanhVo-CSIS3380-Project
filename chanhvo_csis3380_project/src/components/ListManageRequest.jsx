
const ListManageRequest = ({senderID, requestId, requestTime, status, 
    handleAcceptRequest , handleRejectRequest}) => {
    // const [showGroupResponseBtn, setShowGroupResponseBtn] = useState('row');
    // const {listRequest, setListRequest} = useContext(AppContext);
    // const {disableGroupResponseBtn,setDisableGroupResponseBtn} = useContext(AppContext);
    
    let showButton = '';

    const showOrHideButton = () =>{

        if(status === "Accepted" || status === "Rejected"){
            return showButton = 'd-none'
        } else return showButton = "row"
    }
    showOrHideButton();
    // Handle accept request
//   const handleAcceptRequest = (request) => {

//     let currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();
//     const date = currentDate.getDate();
//     const hour = currentDate.getHours();
//     const minute = currentDate.getMinutes();
//     const second = currentDate.getSeconds();

//     const acceptDate = hour + ":" + minute + ":" + second + " " + month + "/" + date + "/" + year;
//     const indexRequest = listRequest.findIndex((reqElem) => reqElem.requestId === request.requestId);
//     console.log(listRequest);
//     console.log(indexRequest);
//     let editRequest = listRequest.find((reqElem) => reqElem.requestId === request.requestId)
//     editRequest = {...editRequest, status: "Accepted", responseTime: acceptDate}
    
//     const remainRequest = listRequest.filter((reqElem) =>
//       (reqElem.requestId !== request.requestId))
//       .map((reqElem) => 
//         reqElem.petId === request.petId
//         ? { ...reqElem, status: "Rejected", responseTime: acceptDate }
//         : { ...reqElem }
//       )

//     remainRequest.splice(indexRequest, 0, editRequest);

//     setListRequest(remainRequest);
//     // console.log("New List request", newListRequest)

//     //  console.log(document.getElementById(`groupResponseBtn${request.requestId}`)) 
//     setShowGroupResponseBtn('d-none');
//     setDisableGroupResponseBtn(true);
//   }

//   const handleRejectRequest = (request) => {
//     let currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = currentDate.getMonth();
//     const date = currentDate.getDate();
//     const hour = currentDate.getHours();
//     const minute = currentDate.getMinutes();
//     const second = currentDate.getSeconds();

//     const rejectedDate = hour + ":" + minute + ":" + second + " " + month + "/" + date + "/" + year;

//     let editRequest = listRequest.find((reqElem) => reqElem.requestId === request.requestId)
//     editRequest = {...editRequest, status: "Accepted", responseTime: rejectedDate}

//     const indexRequest = listRequest.findIndex((reqElem) => reqElem.requestId === request.requestId);

//     const remainRequest = listRequest.filter((reqElem) =>
//     (reqElem.requestId !== request.requestId))

//     remainRequest.splice(indexRequest, 0, editRequest);

//     setListRequest(remainRequest);

//     setShowGroupResponseBtn('d-none');
//   }


//***** */ IF WE CHECK THE STATE IN HERE => THAT LEADS TO INFINITIVE LOOP ******//

//   (request.status === "Rejected" || request.status === "Accepted")
//    ? setShowGroupResponseBtn('d-none') : setShowGroupResponseBtn('row')

    return (
        <li className="list-group-item ml-4">
            <div className='row justify-content-left '>
                {/* <p className='col-6 ' >Request from {request.senderID} at {request.requestTime}</p> */}
                <p className='col-6 ' >Request from {senderID} at {requestTime}</p>
                <span className='col-2'>
                    <div>

                        {/* Check if status rejected or accepted then hide the response btn */}
                        {/* <div className={showButton} id={`groupResponseBtn${request.requestId}`}> */}
                        <div className={showButton} id={`groupResponseBtn${requestId}`}>
                            <div className='col-6'>
                                <button type="button" className=' btn btn-primary'
                                    onClick={handleAcceptRequest}
                                    >Accept</button>
                            </div>
                            <div className='col-6'>
                                <button type="button" className=' btn btn-danger'
                                    onClick={handleRejectRequest}
                                    >Reject</button>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </li>
    );
}

export default ListManageRequest;