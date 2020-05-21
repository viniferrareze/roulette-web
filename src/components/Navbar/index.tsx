import React, { useState } from 'react';

import {
   RCollapse,
   RNavbar,
   RNavbarToggler,
   RNavbarBrand,
   RNav,
   RUncontrolledDropdown,
   RDropdownToggle,
   RDropdownMenu,
   RDropdownItem,
} from './styles';

const Navbar: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

   return (
      <RNavbar dark expand="md">
         <RNavbarBrand href="/">Roulette App</RNavbarBrand>
         <RNavbarToggler onClick={toggle} />
         <RCollapse isOpen={isOpen} navbar>
            <RNav className="ml-auto" navbar>
               <RUncontrolledDropdown nav inNavbar>
                  <RDropdownToggle nav caret>
                     Rodrigo
                  </RDropdownToggle>
                  <RDropdownMenu right>
                     <RDropdownItem>Configurações</RDropdownItem>
                     <RDropdownItem divider />
                     <RDropdownItem>Sair</RDropdownItem>
                  </RDropdownMenu>
               </RUncontrolledDropdown>
            </RNav>
         </RCollapse>
      </RNavbar>
   );
};

export default Navbar;
