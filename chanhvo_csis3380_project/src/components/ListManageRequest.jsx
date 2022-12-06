// import axios from "axios";
const ListManageRequest = ({senderId, petId, _id, requestTime, status, responseTime,
    handleAcceptRequest , handleRejectRequest}) => {
    // const [showGroupResponseBtn, setShowGroupResponseBtn] = useState('row');
    // const {listRequest, setListRequest} = useContext(AppContext);
    // const {disableGroupResponseBtn,setDisableGroupResponseBtn} = useContext(AppContext);
    
    let showButton = '';

    // const urlAPI = `http://localhost:5000/api/profile/viewuser/${senderId}`
    
    // const {data} = await axios.get(urlAPI);
    // console.log(data);

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
        <li className="list-group-item ml-4">
            <div className='row justify-content-left '>
                {/* <p className='col-6 ' >Request from {request.senderID} at {request.requestTime}</p> */}
                <div className='col-5 ' >
                    <p >Request from {senderId} </p>
                    <p>at {requestTime}</p>
                </div>
                <div className="col-5">
                    <p>Responsed: {responseTime}</p>
                <p>Status: {status}</p>
                </div>
                
                <span className='col-2'>
                    <div>

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