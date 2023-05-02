
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
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
import { AppContext } from './AppContext';

const NavigationBar = () => {
  const { loggedInID,setLoggedInID,isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  const handleLoggout = () => {
    setLoggedInID("");
    setIsLoggedIn(false);
  }

  return ( 
    // Keep the nav element inside Router element, if not can cause 
      // error: "useHref() only used in Router"
      <Router>
          <Navbar bg="light" expand="lg" >
        <Container fluid className='w-70 p-3 col'>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="row justify-content-end" align = "end">

           <Nav
              className="justify-content-end me-auto my-2 my-lg-0 fs-4"
              style={{ maxHeight: '100px' }}
              navbarScroll id="customNavbar"
            >
              <Link className="nav-link" to="/">Home</Link>
              {/* <Link className="nav-link" to="admin">Admin</Link> */}
              <Link className="nav-link" to="learnaboutdog">Learn About Dog</Link>
              <Link className="nav-link" to="rehomepet">Rehome Pet</Link>
              <Link className="nav-link" to="adoptpet">Adopt Pet</Link>
              {isLoggedIn ? "" : <Link className="nav-link" to="login">Login</Link>}
              

              {/* If use logged in, will show the dropdown nav items */}

              {isLoggedIn ? (<NavDropdown title="My Account" id="navbarScrollingDropdown">
                  <Link className="nav-link fs-5" to={`profile/${loggedInID}`}>My Profile</Link>
                  <Link className="nav-link fs-5" to="/manageposting">Manage Posting</Link>
                <NavDropdown.Divider />
                <Link className="nav-link fs-5" to="logout">
                  <button onClick={handleLoggout}>Logout</button>
                  </Link>
              </NavDropdown>) : ""}
              
            </Nav> 
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path='rehomepet' element={<RehomePet />} />
            <Route exact path='adoptpet' element={<AdoptPet />} />
            <Route exact path='myaccount' element={<MyAccount />} />
            <Route exact path={`profile/:id`} element={<MyProfilePage />} />
            <Route exact path='login' element={<Login/>} />
            <Route exact path='learnaboutdog' element={<Login/>} />
            <Route exact path='register' element={<Register />} />
            <Route exact path='manageposting' element={<ManagePosting />} />
            <Route exact path='admin' element={<AdminPage />}></Route>
            <Route exact path='logout' element={<Navigate to={"/"}/>}></Route>
            <Route exact path='*' element={<NotFoundPage />}/>
          </Routes>
      </Router>
   );
}
 
export default NavigationBar;

// REFERENCE
// https://react-bootstrap.netlify.app/components/navbar/#rb-docs-content