import React from 'react'

import styled from '@emotion/styled';

import { Container, Title, Paragraph } from './ui';
import OffersImage from './OffersImage';

const Wrapper = styled.div`
background: linear-gradient(135deg, rgba(13, 69, 121, 1) 0%, rgba(11, 45, 77, 1) 100%);
color: white;
padding: 60px 0;

@media (max-width: 992px) {
  margin-bottom: 35%;
}
`;

const List = styled.ul`
list-style: none;

width: 60%;

@media(max-width: 992px) {
  width: auto;
}

`;

const Item = styled.li`
  margin: 12px 0;
  line-height: 1.5;
  
  img {
    width: 20px;
    line-height: 1;
    vertical-align: middle;
    margin-right: 4px;
  }

  span {
  word-break: break-word;

  }
`;

const MobileOffersImage = styled(OffersImage)`
  display: none;
  width: 90%;
  max-width: 600px;

  margin: 32px auto -40%;

  @media (max-width: 992px) {
    display: block;
  }
`;

const mainList = [
  'udzielanie porad prawnych', 'przygotowywanie opinii prawnych', 'opracowywanie projektów umów', 'zastępstwo procesowe', 'sporządzanie pozwów, apelacji, zażaleń, sprzeciwów, skarg i wniosków', 'sporządzanie innych pism w postępowaniu: sądowym, egzekucyjnym, administracyjnym'
];

const Offers = () => {
  return (
    <Wrapper id="praktyka">
      <Container>
        <Title>Praktyka</Title>
        <Paragraph>
          W ramach prowadzonej kancelarii oferujemy Państwu szeroki zakres usług prawnych skierowanych zarówno do podmiotów gospodarczych, jak i osób indywidualnych.
        </Paragraph>
        <Paragraph>
          Dążenie do utrzymania wysokiego poziomu doradztwa stanowi dla nas priorytet, który powoduje nieustanną konieczność podnoszenia naszych kwalifikacji i jednocześnie pozwala nam na poszerzanie oferty.
        </Paragraph>
        <List>
          {mainList.map((item, id) =>
            <Item key={`item-${id}`}><img src={'./arrow.svg'} alt=""/> <span>{item}</span></Item>
          )}
        </List>
        <MobileOffersImage />
      </Container>
    </Wrapper>
  )
}

export default Offers
