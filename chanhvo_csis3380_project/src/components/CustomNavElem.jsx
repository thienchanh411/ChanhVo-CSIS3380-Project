
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const CustomNavElem = ({isLoggedIn}) => {
    if(isLoggedIn === true){
        return(
          <>

              <Link className="nav-link" to="admin">Admin</Link>
              
              <Link className="nav-link" to="rehomepet">Rehome Pet</Link>
              <Link className="nav-link" to="adoptpet">Adopt Pet</Link>
              <Link className="nav-link" to="login">Login</Link>
  
              <NavDropdown title="My Account" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link className="nav-link" to="/myprofile">My Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="manageposting">
                  <Link className="nav-link" to="/manageposting">Manage Posting</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>

            </>
        )
    }
}
 
export default CustomNavElem;