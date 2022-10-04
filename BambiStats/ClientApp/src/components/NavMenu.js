import React, { Component } from 'react';
import { Container, Row, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import BambiIcon from '../graphic/CavalierIcon.png'
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
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
              <NavbarToggler onClick={this.toggleNavbar} />
              <Collapse isOpen={this.state.collapsed} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink tag={Link} to='/wishlist' className="pointer text-xl lg:text-lg text-center">Rzeczy do kupienia</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="pointer text-xl lg:text-lg text-center">Kalkulator karmy</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}
