import React from 'react'
import styled from '@emotion/styled'
import { Container } from './ui';
import logo from '../assets/logo.png';
import { Link, Router } from 'components/Router'

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const NavLink = styled(Link)`
  padding: 8px;
  font-variant: small-caps;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: white;

  @media (max-width: 991px) {
    font-size: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`

const Logo = styled.img`
  height: 50px;
`;

const Navbar = () => {

  return (
    <Container>
      <Flex>
        <Logo src={logo} alt="logo" />

        <Nav>
          <NavLink to="/">O nas</NavLink>
          <NavLink to="/">Specjalizacje</NavLink>
          <NavLink to="/">Zespół</NavLink>
          <NavLink to="/">Wynagrodzenie</NavLink>
          <NavLink to="/">Kontakt</NavLink>
        </Nav>
      </Flex>
    </Container>
  )
}

export default Navbar
