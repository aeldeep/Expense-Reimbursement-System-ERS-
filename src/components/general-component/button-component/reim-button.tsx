import React, { useState } from 'react';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const ReimButton = (props:any) => {
    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);
  
    return (
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret size='lg'>
          Reimbursement
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Reimbursement</DropdownItem>
          <DropdownItem >
        <Link to='/main/reim-status'>Find Reimbursement by Status</Link></DropdownItem>
        <DropdownItem >
        <Link to='/main/reim-userId'>Find Reimbursement by User Id</Link></DropdownItem>
         <DropdownItem divider />
          <DropdownItem><Link to='/main/reim-update' >Update Reimbursement</Link></DropdownItem>
          <DropdownItem >
        <Link to='/main/reim-new'>Submite Rembursement</Link></DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
  
  export default ReimButton;