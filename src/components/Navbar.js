import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Container } from './ui';
import logo from '../assets/logo.png';
import { Link } from 'components/Router'
import { useRoutePath } from 'react-static';

import HamburgerMenu from 'react-hamburger-menu';
import { Collapse } from 'react-collapse';

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

  const addHash = (hash) => {
    if (typeof window !== 'undefined') {
      window.location.hash = hash;
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <DesktopNavbar>
        <Link to="/"><Logo src={logo} alt="logo" /></Link>

        <Nav isHomePage={isHomePage}>
          <NavLink to="/" onClick={() => addHash('kancelaria')}>Kancelaria</NavLink>
          <NavLink to="/" onClick={() => addHash('praktyka')}>Praktyka</NavLink>
          <NavLink to="/" onClick={() => addHash('wynagrodzenie')}>Wynagrodzenie</NavLink>
          <NavLink to="/" onClick={() => addHash('zespol')}>Zespół</NavLink>
          <NavLink to="/" onClick={() => addHash('kontakt')}>Kontakt</NavLink>
        </Nav>
      </DesktopNavbar>
      <MobileNavbar>
        <Link to="/"><Logo src={logo} alt="logo" /></Link>
        <HamburgerMenu isOpen={isOpen} width={26} height={20} menuClicked={() => setIsOpen(!isOpen)} />
      </MobileNavbar>

      <Collapse isOpened={isOpen}>
        <MobileNav isHomePage={isHomePage}>
          <NavLink to="/" onClick={() => addHash('kancelaria')}>Kancelaria</NavLink>
          <NavLink to="/" onClick={() => addHash('praktyka')}>Praktyka</NavLink>
          <NavLink to="/" onClick={() => addHash('wynagrodzenie')}>Wynagrodzenie</NavLink>
          <NavLink to="/" onClick={() => addHash('zespol')}>Zespół</NavLink>
          <NavLink to="/" onClick={() => addHash('kontakt')}>Kontakt</NavLink>
        </MobileNav>
      </Collapse>
    </NavContainer>
  )
}

export default Navbar
