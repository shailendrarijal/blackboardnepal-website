import { useEffect, useState} from 'react';
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/auth';
import { useUser } from '../../utils/users';

import SignOutModal from '../Modals/SignOutModal';


export default function Navbars() {

  const auth = useAuth();
  const userContext = useUser();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isContributor, setIsContributor] = useState(false);

  const router = useRouter()

  const signOut = () => {
    auth.signout();
    router.push('/');
    <SignOutModal />
    setIsLoggedIn(false);
  }
  
  useEffect(() => {
    if (!auth.userId) {
      setIsLoggedIn(false);
      return;
    }
    if (auth.userId) {
      setIsLoggedIn(true);
    }
   }, [auth, isLoggedIn]);
  
  useEffect(() => {
    if (!isLoggedIn) return;
    if (isLoggedIn && isContributor) return;
    const userData = userContext.getUserData();
      setIsContributor(userData.isContributor);
  }, [userContext]);
  

  return (
    <div>
      
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar fixed-top">
        {isLoggedIn ?
          <Navbar.Brand href="/home" className="logo-text">BlackBoard Nepal</Navbar.Brand>
          :
          <Navbar.Brand href="/" className="logo-text">BlackBoard Nepal</Navbar.Brand>
        }
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/naati">NAATI</NavDropdown.Item>
                    <NavDropdown.Item href="/calculator">Calculator</NavDropdown.Item>
                    <NavDropdown.Item href="/nepaliwords">Nepali Words</NavDropdown.Item>
                    <NavDropdown.Item href="/englishwords">English Words</NavDropdown.Item>
                  </NavDropdown>
                  {/* <NavDropdown title="Wiki" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/traditions" disabled>Traditions</NavDropdown.Item>
                    <NavDropdown.Item href="/places" disabled>Places</NavDropdown.Item>
                    <NavDropdown.Item href="/cuisine" disabled>Food and Drinks</NavDropdown.Item>
                  </NavDropdown> */}
            
            <NavDropdown title="EduBlog" id="basic-nav-dropdown">
              <NavDropdown.Item href="/edublog/browsearticles" >Browse Articles</NavDropdown.Item>
              {isLoggedIn && isContributor && (
                <div>
                  <NavDropdown.Item href="/edublog/myarticles" >My Articles</NavDropdown.Item>
                  <NavDropdown.Item href="/edublog/newarticle" >New Article</NavDropdown.Item>
                </div>
              )}
            </NavDropdown>
            <NavLink href="/about">About</NavLink>
            {isLoggedIn ?
              <NavDropdown title="Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>signOut()}>Sign Out</NavDropdown.Item>
              </NavDropdown> 
              :
              <NavDropdown title="Account" id="basic-nav-dropdown" >
                  <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
                  <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
              </NavDropdown>
            }
                    
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
      

      <style jsx global>{`
    
        .navbar{
          padding: 0 0.5rem;
          box-shadow: 0 5px #ccc;
        }

        .navbar-collapse{
          justify-content: flex-end;
        }

        .logo-text{
          font-family: Segoe UI;
          font-size: 2rem;
        }
      `}</style>

    </div>
  )
}
