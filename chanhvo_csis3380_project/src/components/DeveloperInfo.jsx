import React from "react";

const Developer = () => {
    return (
        // <div className="container " >
            <div className="container col-3 rounded shadow-lg "
            // style={{backgroundColor: "rgba(76, 175, 80, 0.3)"}}
            >
                <div className="row-4 heading pt-3">
                    <h2 className=" text-center">Developer</h2>
                </div>
                <div className="row-4 mx-auto align-content-cente w-35" >
                    {/* <div className="col-md-4" ></div> */}
                    <div className="mx-auto justify-content-center text-center"
                    // style={{background: "rgba(76, 175, 80, 0.3)"}}
                    >
                        <div className="probootstrap-card text-center ">
                            <div className="probootstrap-card-media pt-5" >
                                <img src="Chanh_Hinhthe.jpg" className="circle-img"
                                    alt="Free HTML5 Template by uicookies.com"
                                    style={{ height: 100, width: 100, borderRadius: 50 }} />
                            </div>
                            <div className="probootstrap-card-text pb-3">
                                <h4 className="mt-3">Chanh Vo</h4>
                                <p><a href="https://github.com/thienchanh411">View Details</a></p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-4"></div> */}
                </div>
            </div>
        // </div>
    );
};

export default Developer;