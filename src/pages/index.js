import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Container } from '../components/ui';
import HomeImage from '../components/HomeImage';
import AOS from 'aos';
import 'aos/dist/aos.css';

import icon1 from '../assets/icon_1.svg';
import icon2 from '../assets/icon_2.svg';
import icon3 from '../assets/icon_3.svg';

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
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Box = styled.div`
  padding-top: 5%;
  padding-left: 5%;

  @media(max-width: 1410px) {
    padding-left: unset;
    padding-right: 5%;
  }

`;

const Title = styled.h1`
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
`;

const StyledImage = styled(HomeImage)`
  position: relative;
  width: 110%;
  margin-left: -15%;
  margin-bottom: -5%;

  @media(max-width: 1410px) {
    width: auto;
    margin-left: -5%;
    margin-right: 5%;
  }

  & #prefix__background {
    position: relative;
    animation-name: background;
    animation-duration: 10s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  & #prefix__leafs {
    position: relative;
    animation-name: leafs;
    animation-duration: 7s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  & #prefix__person_right,
  & #prefix__person_left {
    position: relative;
    animation-name: people;
    animation-duration: 6s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes background {
    from {
      transform: translateX(1%);
    }
    to {
      transform: translateX(-3%);
    }
  }

  @keyframes leafs {
    from {
      transform: translateX(-1%);
    }
    to {
      transform: translateX(1%);
    }
  }

  @keyframes people {
    from {
      transform: translateX(1%);
    }
    to {
      transform: translateX(-1%);
    }
  }
  
`;

const Button = styled.button`
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

const Details = styled.div`
  margin-top: 140px;
`;

const StyledDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  padding: 8px 0;
  font-size: 18px;

  p {
    margin-left: 40px;
  }
  
  @media (max-width: 1200px) {
    margin-bottom: 20px;

    img {
      width: 64px;
    }

    p {
      margin-left: 20px;
    }
  }
`;

const Detail = ({ icon, text }) => <StyledDetail data-aos="fade-in">
  <img src={icon} alt="" />
  <p>{text}</p>
</StyledDetail>

const details = [
  {
    icon: icon1,
    text: 'Dbanie o interes naszych klientów i świadczenie na ich rzecz obsługi prawnej odpowiadającej ich potrzebom jest dla nas nadrzędną wartością nieustannie powodującą konieczność poszerzania posiadanych kompetencji.'
  },
  {
    icon: icon2,
    text: 'Dzięki interdyscyplinarności i współpracy z rzeczoznawcami majątkowymi, kancelariami adwokackimi, komorniczymi oraz notarialnymi zapewniamy kompleksową pomoc prawną i doradztwo uwzględniające w jak najwyższym stopniu złożone sytuacje i potrzeby naszych klientów.'
  },
  {
    icon: icon3,
    text: 'W wyniku indywidualnego podejścia do każdego problemu jesteśmy w stanie zagwarantować Państwu najwyższą jakość wykonywanych usług i proponować najlepiej dopasowane rozwiązania. Naszą Ofertę kierujemy zarówno do osób fizycznych, jak i małych i średnich przedsiębiorstw. Serdecznie zapraszamy do nawiązania współpracy.'
  },
]

export default () => {

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
    });
  }, [])

  return (
    <main>
      <Header>
        <Container>
          <Flex>
            <StyledImage />
            <Box>
              <Title>Kancelaria Radcy Prawnego <strong>Dawid Gawrysiak</strong></Title>
              <Button>Dowiedz się więcej</Button>
            </Box>
          </Flex>
        </Container>
      </Header>
      <Container>
        <Details>
          {details.map(({ icon, text }) => <Detail {...{ icon, text }} />)}
        </Details>
      </Container>
      <div style={{
        height: 500, background: 'linear-gradient(135deg, rgba(13, 69, 121, 1) 0%, rgba(11, 45, 77, 1) 100%)'
      }}></div>
      <div style={{ height: 1000 }}></div>
    </main>
  );
}
