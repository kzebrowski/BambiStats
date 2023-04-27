import React, { useEffect, useState } from 'react';
import { Container, Row, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Col, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import BambiIcon from '../graphic/CavalierIcon.png';
import AlienIcon from '../graphic/alien.png';
import './NavMenu.css';

export function NavMenu(props)
{
 let [collapsed, setCollapsed] = useState(false);
 let [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "341098506430-g61520nbf636o2em1u0cc7h75odhqvvn.apps.googleusercontent.com",
      callback: handleGoogleLoginCallback
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )
  }, [])

  function handleGoogleLoginCallback(response) {
    let decodedJwt = jwt_decode(response.credential);
    localStorage.setItem("userEmail", decodedJwt.email);
    setUserEmail(decodedJwt.email);
  }

  function handleLogOut() {
    setUserEmail(undefined);
    localStorage.removeItem("userEmail");
  }

  function toggleNavbar() {
    setCollapsed(!collapsed);
  }
  
  return (
    <Container fluid={true} className="pb-3">
      <Row>
        <Col style={{ padding: "0 0 0 0" }}>
          <Navbar color="light" dark expand="lg">
            <NavbarBrand href="/">
              <div className='inline-flex'>
                <img src={BambiIcon} alt="???" style={{ width: "50px", height: "auto", margin: "0 10px 0" }} />
                <div className='pt-1'>BambiStats</div>
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={collapsed} navbar>
              <Nav className="container-fluid text-xl lg:text-lg" navbar>
                <NavItem>
                  <NavLink tag={Link} to='/wishlist' className="text-center">Rzeczy do kupienia</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/foodreviews' className="text-center">Recenzje karmy</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-center">Kalkulator karmy</NavLink>
                </NavItem>
                  <UncontrolledDropdown nav inNavbar className='text-center md:ml-auto md:mr-3 pointer'>
                    <DropdownToggle nav className="pointer">
                      <img src={AlienIcon} alt="???" className='brightness-95 pointer' style={{ width: "30px", height: "auto", margin: "0 auto" }} />
                    </DropdownToggle>
                    <DropdownMenu end={true}>
                    <DropdownItem hidden={userEmail}>
                        <div id='signInDiv'></div>
                      </DropdownItem>
                      <DropdownItem hidden={!userEmail} disabled={true}>
                         Siema {userEmail}
                      </DropdownItem>
                      <DropdownItem hidden={!userEmail} onClick={handleLogOut}>
                         Wyloguj się
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
