import React from 'react'

import styled from '@emotion/styled';

import icon1 from '../assets/icon_1.svg';
import icon2 from '../assets/icon_2.svg';
import icon3 from '../assets/icon_3.svg';

const StyledDetails = styled.div`
  margin-top: 140px;
  margin-bottom: 90px;

  @media (max-width: 992px) {
    margin-top: 90px;
    margin-bottom: 40px;
  
  }
`;

const StyledDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  padding: 8px 0;
  line-height: 1.5;

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

  @media (max-width: 992px) {
    flex-direction: column;

    p {
      margin-left: 0;
    }

    img {
      width: 72px;
    }
  }
`;

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

const Details = () => {
  return (
    <StyledDetails id="kancelaria">
      {details.map(({ icon, text }, id) => <StyledDetail key={`detail-${id}`} data-aos="fade-in">
        <img src={icon} alt="" />
        <p>{text}</p>
      </StyledDetail>)}
    </StyledDetails>
  )
}

export default Details
