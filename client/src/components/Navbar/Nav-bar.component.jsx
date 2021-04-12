import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light className="Nav">
        <NavbarBrand href="/" className="mr-auto">Project Name</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>Home
            {/* <NavLink href="/components/">Components</NavLink> */}
            </NavItem>
            <NavItem>Logout
              {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;