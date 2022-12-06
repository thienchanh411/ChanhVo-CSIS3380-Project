// import axios from "axios";
const ListManageRequest = ({senderId, petId, _id, requestTime, status, responseTime,
    handleAcceptRequest , handleRejectRequest}) => {
    
    let showButton = '';
    let acceptedBG = '';
    
    const showBGAccept = () =>{
        if(status === "Accepted"){
        return acceptedBG = "#2FC47A"
        }else if (status === "Rejected"){
            return acceptedBG = "#E3E7E5"
            }
    }
    showBGAccept()

    const showOrHideButton = () =>{

        if(status === "Accepted" || status === "Rejected"){
            return showButton = 'd-none'
        } else return showButton = "row"
    }
    showOrHideButton();


//***** */ IF WE CHECK THE STATE IN HERE => THAT LEADS TO INFINITIVE LOOP ******//

//   (request.status === "Rejected" || request.status === "Accepted")
//    ? setShowGroupResponseBtn('d-none') : setShowGroupResponseBtn('row')

    return (
        <li className="list-group-item ml-4 fs-5" >
            <div className='row justify-content-left ' >
                {/* <p className='col-6 ' >Request from {request.senderID} at {request.requestTime}</p> */}
                <div className='col-5 ' >
                    <p >Request from {senderId} </p>
                    <p>at {requestTime}</p>
                </div>
                <div className="col-5">
                    
                    <p>Status: <span style={{fontWeight: "bold"}}>{status}</span> </p>
                    <p>Responsed: {responseTime}</p>
                </div>
                
                <span className='col-2'style={{backgroundColor: `${acceptedBG}`}}>
                    <div >

                        {/* Check if status rejected or accepted then hide the response btn */}
                        {/* <div className={showButton} id={`groupResponseBtn${request.requestId}`}> */}
                        <div className={showButton} id={`groupResponseBtn${_id}`}>
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