import React, { useState } from 'react';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const UserButton = (props:any) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} >
      <DropdownToggle  caret size='lg'>
       User
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Users</DropdownItem>
        <DropdownItem >
        <Link to='/main/users'>Find All Users</Link></DropdownItem>
        <DropdownItem >
        <Link to='/main/curent-user'>User Profile</Link></DropdownItem>
        <DropdownItem >
        <Link to='/main/find-user'>Find user</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem >
        <Link to='/main/user-update'>Update user</Link></DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default UserButton;
