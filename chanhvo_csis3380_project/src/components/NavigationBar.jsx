
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RehomePet from '../pages/ReHomePet';
import AdoptPet from '../pages/AdoptPet'
import Login from '../pages/LoginPage';
import MyAccount from '../pages/MyAccount'
import Register from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import MyProfilePage from '../pages/MyProfilePage';
import ManagePosting from '../pages/ManagePosting';
import AdminPage from '../pages/AdminPage';

class NavigationBar extends Component {
  state = {

  }

  render(){
    return (
      // Keep the nav element inside Router element, if not can cause 
      // error: "useHref() only used in Router"
      <Router>
          <Navbar bg="light" expand="lg" >
        <Container fluid className='w-70 p-3 col'>
          <Navbar.Brand href="/">HomePage</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="row justify-content-end" align = "end">
            <Nav
              className="justify-content-end me-auto my-2 my-lg-0 fs-4"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className="nav-link" to="admin">Admin</Link>
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="rehomepet">Rehome Pet</Link>
              <Link className="nav-link" to="adoptpet">Adopt Pet</Link>
              <Link className="nav-link" to="login">Login</Link>
              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/rehomepet">Rehome Pet</Nav.Link>
              <Nav.Link href="/adoptpet">Adopt Pet</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link> */}
  
              <NavDropdown title="My Account" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link className="nav-link" to="/myprofile">My Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="manageposting">
                  <Link className="nav-link" to="/manageposting">Manage Posting</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path='rehomepet' element={<RehomePet />} />
            <Route exact path='adoptpet' element={<AdoptPet />} />
            <Route exact path='myaccount' element={<MyAccount />} />
            <Route exact path='myprofile' element={<MyProfilePage />} />
            <Route exact path='login' element={<Login/>} />
            <Route exact path='register' element={<Register />} />
            <Route exact path='manageposting' element={<ManagePosting />} />
            <Route exact path='admin' element={<AdminPage />}></Route>
            <Route exact path='*' element={<NotFoundPage />}/>
          </Routes>
      </Router>

      
  
    );
  }
  
}
export default NavigationBar;

// REFERENCE
// https://react-bootstrap.netlify.app/components/navbar/#rb-docs-content