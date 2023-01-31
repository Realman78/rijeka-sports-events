import { useState } from 'react'
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

function MenuDropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <Nav className="changeBackground ml-auto" navbar>
      <Dropdown isOpen={dropdownOpen} toggle={()=>setDropdownOpen((p) => !p)}>
        <DropdownToggle nav>Menu</DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={()=>navigate("/dashboard/info")}>Account settings</DropdownItem>
            <DropdownItem onClick={()=>navigate("/dashboard/addEvent")}>Add event</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => navigate("/login")}>Sign in</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </Nav>
  )
}

export default MenuDropDown