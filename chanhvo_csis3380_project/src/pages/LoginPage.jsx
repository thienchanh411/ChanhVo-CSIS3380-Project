import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Image } from "react-bootstrap";
import { AppContext } from "../components/AppContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useEffect } from "react";
import { useState } from "react";

const Login = () => {

  const { setLoggedInID, setIsLoggedIn } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const navigateHomePage = () => {
    navigate("/");
  }

  const handleLogin = async (event) => {

    event.preventDefault();

    const displayError = document.getElementById("displayError");

    const urlAPI = "http://localhost:5000/api/login";
    const {data} = await axios.post(urlAPI, {
      email, password
    });
    console.log(data);

    if(data === "Invalid Email or password" || typeof data == "object"){
      console.log(data)
      displayError.innerHTML= "Invalid Email or password";
    }else{
      setLoggedInID(data);
      setIsLoggedIn(true);
      navigateHomePage();
    }
  }

  return (
    <>
      <Row className="justify-content-center w-80 p-3">
        <Col className=" w-35 p-3 col-md d-none d-md-block" fluid="lg">
          <Image className="img-fluid" src="loginPic.jpg"></Image>
        </Col>
        <Col className="d-sm-block col-6">
          <Container fluid="md" className="w-70 row justify-content-start">
            <Form className="row justify-content-start fs-4"
              method="post" onSubmit={handleLogin}
              // onSubmit={navigateHomePage}
              >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="w-auto p-3 row justify-content-start">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="w-auto p-3 row justify-content-start">Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)} />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <div className="mb-3 row justify-content-center">
                <Button className="col-sm-5" variant="primary" type="submit">
                  Submit
                </Button>
              </div>
              <div>
                <p id="displayError" style={{color: "red"}}></p>
              </div>

            </Form>
            <p>Don't have an account, <Link className="nav-link" to="/register"> please register</Link></p>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Login;