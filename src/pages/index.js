import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { scroller } from 'react-scroll';

import { Container } from '../components/ui';
import HomeImage from '../components/HomeImage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Details from '../components/Details';
import Offers from '../components/Offers';
import Pricing from '../components/Pricing';
import Team from './../components/Team';
import Contact from './../components/Contact';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-static';
import Link from './../components/Link';

const Header = styled.header`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -70px;
    bottom: 70px;
    left: 48%;
    right: 0;
    background: rgb(13,69,121);
    background: linear-gradient(135deg, rgba(13,69,121,1) 0%, rgba(11,45,77,1) 100%);
    z-index: -1;
    border-radius: 0 0 0 60px;

    @media (max-width: 992px) {
      top: 0;
    }
  }

  @media (max-width: 992px) {
    &:before {
      content: none;
    }
  }
`;

const MobileContent = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;

const DesktopContent = styled.div`
  display: flex;

  @media (max-width: 992px) {
    display: none;
  }
`;

const Box = styled.div`
padding-top: 5%;
padding-left: 5%;

@media(max-width: 1410px) {
  padding-left: unset;
  padding-right: 5%;
}

@media(max-width: 1200px) {
  padding-top: 4%;
}
`;

const MobileTitleWrapper = styled.div`
  background: rgb(13,69,121);
  background: linear-gradient(135deg, rgba(13,69,121,1) 0%, rgba(11,45,77,1) 100%);
  margin: 0 -24px;
  padding: 32px;

  margin-bottom: 35%;

  @media (max-width: 640px) {
    margin-bottom: 50%;
  }
`

const PageTitle = styled.h1`
  font-family: 'Roboto Slab', serif;
  color: white;
  font-weight: 400;
  font-size: 40px;

  strong {
    display: block;
  }

  @media(max-width: 1410px) {
    font-size: 32px;
  }

  @media(max-width: 1200px) {
    font-size: 28px;
  }

  @media(max-width: 992px) {
    font-size: 36px;
    margin-bottom: 10%;
  }

  @media(max-width: 640px) {
    font-size: 28px;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  border: none;
  color: white;
  background: #EAA636;
  outline: none;
  padding: 16px 32px;
  border-radius: 0.6rem;
  margin-top: 20%;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #C6861C;
  }
`;

export default () => {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
    });

    if (typeof window !== 'undefined') {
      const { hash } = document.location;

      if (hash) {
        const el = hash.replace('#', '');

        scroller.scrollTo(el, {
          duration: 0,
          smooth: false
        })
      }
    }
  }, [])


  return (
    <>
      <Navbar />
      <main>
        <Header>
          <Container>
            <DesktopContent>
              <HomeImage />
              <Box>
                <PageTitle>Kancelaria Radcy Prawnego <strong>Dawid Gawrysiak</strong></PageTitle>
                <Button to="/" scroll="kancelaria">Dowiedz się więcej</Button>
              </Box>
            </DesktopContent>
            <MobileContent>
              <MobileTitleWrapper>
                <PageTitle>Kancelaria Radcy Prawnego <strong>Dawid Gawrysiak</strong></PageTitle>
                <HomeImage />
              </MobileTitleWrapper>
            </MobileContent>
          </Container>
        </Header>
        <Container>
          <Details />
        </Container>
        <Offers />
        <Pricing />
        <Team />
        <Contact />
      </main>
    </>
  );
}
