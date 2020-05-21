import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import {
   RCollapse,
   RNavbar,
   RNavbarToggler,
   RNavbarBrand,
   RNav,
   RSpan,
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
                     <FaUserCircle size={24} color="#fff" />
                  </RDropdownToggle>
                  <RDropdownMenu right>
                     <RDropdownItem to="/configuracoes" tag={Link}>
                        <RSpan>Configurações</RSpan>
                     </RDropdownItem>
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
