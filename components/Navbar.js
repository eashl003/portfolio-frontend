import Link from "next/link"
import { Navbar, Dropdown, NavDropdown, NavItem, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link href="#brand">React-Bootstrap</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <Dropdown eventKey={3.1}>Action</Dropdown>
            <Dropdown eventKey={3.2}>Another action</Dropdown>
            <Dropdown eventKey={3.3}>Something else here</Dropdown>
            <Dropdown divider />
            <Dropdown eventKey={3.3}>Separated link</Dropdown>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Link Right
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link Right
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
