import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/logo.png';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  
  img {
    height: 80px;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    z-index: 999;
  }
`;

const NavLink = styled(Link)<{ active: string }>`
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: ${({ active }) => active === 'true' ? 'var(--primary)' : 'var(--dark)'};
  
  &:hover {
    color: var(--primary);
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <NavbarContainer>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Nyla Talent" />
        </Link>
      </Logo>
      
      <MenuToggle onClick={toggleMenu}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </MenuToggle>
      
      <NavLinks isOpen={isOpen}>
        <NavLink to="/" active={(location.pathname === '/').toString()}>Inicio</NavLink>
        <NavLink to="/fase1" active={(location.pathname === '/fase1').toString()}>Búsqueda de Talentos</NavLink>
        <NavLink to="/fase2" active={(location.pathname === '/fase2').toString()}>Llamadas</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
