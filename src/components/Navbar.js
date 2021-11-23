import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Container } from './ui';
import logo from '../assets/logo.png';
import { useRoutePath } from 'react-static';

import HamburgerMenu from 'react-hamburger-menu';
import { Collapse } from 'react-collapse';

import Link from './Link';

const NavContainer = styled(Container)`
  @media (max-width: 992px) {
    border-bottom: 2px solid rgba(11,45,77,1);

    position: sticky;
    top: 0;
    z-index: 99;
    background: white;
  }
`;

const DesktopNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 16px;
  color: ${({ isHomePage }) => isHomePage ? 'white' : 'inherit'};
`;

const NavLink = styled(Link)`
  padding: 8px;
  font-variant: small-caps;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: inherit;

  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 992px) {
    font-size: 18px;
  }
`

const Logo = styled.img`
  height: 50px;
  vertical-align: middle;

  @media (max-width: 992px) {
    height: 40px;
  }
`;

const MobileNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  display: none;

  @media (max-width: 992px) {
    display: flex;
  }
`;

const Navbar = () => {
  const path = useRoutePath();

  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    setIsHomePage(path === '/');
  }, [path])

  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <DesktopNavbar>
        <a href="/"><Logo src={logo} alt="logo" /></a>

        <Nav isHomePage={isHomePage}>
          <NavLink to="/" scroll="kancelaria" >Kancelaria</NavLink>
          <NavLink to="/" scroll="praktyka" >Praktyka</NavLink>
          <NavLink to="/" scroll="wynagrodzenie">Wynagrodzenie</NavLink>
          <NavLink to="/" scroll="zespol">Zespół</NavLink>
          <NavLink to="/" scroll="kontakt" >Kontakt</NavLink>
        </Nav>
      </DesktopNavbar>
      <MobileNavbar>
        <a href="/"><Logo src={logo} alt="logo" /></a>
        <HamburgerMenu isOpen={isOpen} width={26} height={20} menuClicked={() => setIsOpen(!isOpen)} />
      </MobileNavbar>

      <Collapse isOpened={isOpen}>
        <MobileNav isHomePage={isHomePage}>
          <NavLink to="/" scroll="kancelaria">Kancelaria</NavLink>
          <NavLink to="/" scroll="praktyka">Praktyka</NavLink>
          <NavLink to="/" scroll="wynagrodzenie">Wynagrodzenie</NavLink>
          <NavLink to="/" scroll="zespol">Zespół</NavLink>
          <NavLink to="/" scroll="kontakt">Kontakt</NavLink>
        </MobileNav>
      </Collapse>
    </NavContainer>
  )
}

export default Navbar
