import React, {Component} from "react";

class Footer extends Component {
  
    render(){
      // function setBackground () {document.getElementById("footerBackground").style.backgroundColor = "red"} 
        return (
         <>

    <footer className=" page-footer font-small bs-gray-100 fs-5" id="footerBackground" 
    style={{backgroundColor: "#dee2e6"}} >

<div className="container-fluid text-center text-md-left m-3">

  <div className="row ">

    <div className="col  p-3">

      <h5 className="text-uppercase">Footer Content</h5>
      <p>This is the final project for CSIS 3380 - Advance Javascript Web Development</p> <br/>
      <p>Description: The individually fullstack project is using Javascript, HTML, CSS, MongoDB. <br/>
      I used React for FrontEnd and Node js for BackEnd</p>
    </div>
    <hr className="clearfix w-100 d-md-none pb-3"/>
    

    {/* <div className="col-md-3  p-3">

      <h5 className="text-uppercase">Links</h5>

      <ul className="list-unstyled">
        <li>
          <a href="/">Link 1</a>
        </li>
        <li>
          <a href="/">Link 2</a>
        </li>
        <li>
          <a href="/">Link 3</a>
        </li>
        <li>
          <a href="/">Link 4</a>
        </li>
      </ul>

    </div> */}
  </div>
</div>

<div className="footer-copyright text-center py-3">References: <br/>
  <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/"> getbootstrap.com</a> <br/>
  <a href="https://rehome.adoptapet.com/"> rehome.adoptapet.com</a>
</div>
</footer>

         </>
        );
    }
}

export default Footer;