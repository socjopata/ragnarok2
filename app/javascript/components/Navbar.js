import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';

export default () => (
  <Navbar className="bg-dark navbar-dark navbar-expand">
    <Nav navbar>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/homepage">
          Homepage
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterNavLink} to="/create_a_hero">
          Game on brother!
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);
