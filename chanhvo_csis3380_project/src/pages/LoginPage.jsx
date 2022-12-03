import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Image } from "react-bootstrap";

class Login extends Component {

  render() {
    return (
      <>
        <Row className="justify-content-center w-80 p-3">
        <Col className=" w-35 p-3 col-md d-none d-md-block" fluid="lg">
          <Image className="img-fluid" src="loginPic.jpg"></Image>
        </Col>
        <Col className="d-sm-block col-6">
          <Container fluid="md" className="w-70 row justify-content-start">
            <Form className="row justify-content-start fs-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="w-auto p-3 row justify-content-start">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="w-auto p-3 row justify-content-start">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div className="mb-3 row justify-content-center">
                  <Button className="col-sm-5" variant="primary" type="submit">
                    Submit
                  </Button>
              </div>
              
            </Form>
            <p>Don't have an account, <a href="/register">please register</a></p>
          </Container>
        </Col>
      </Row>
      </>
        

    );
  }

};

export default Login;