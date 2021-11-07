import React from 'react'
import styled from '@emotion/styled';

import { Container, Title, Paragraph } from './ui';
import OffersImage from './OffersImage';

const Wrapper = styled.div`
margin: 60px 0;
position: relative;
`

const TextWrapper = styled.div`
width: 60%;

@media(max-width: 992px) {
  width: 100%;
}
`;

const DesktopOffersImage = styled(OffersImage)`
  position: absolute;
  width: 55%;
  top: -70%;
  right: -20%;

  @media (max-width: 1500px) {
    width: 50%;
    right: -10%;
  }

  @media (max-width: 1325px) {
    width: 40%;
    right: 0;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const Pricing = () => {
  return (
    <Container id="wynagrodzenie">
      <Wrapper>
        <TextWrapper>
          <Title>Wynagrodzenie</Title>
          <Paragraph>
            Dzięki elastycznemu podejściu do klienta i jego spraw, koszty doradztwa ustalane są indywidualnie podczas rozmowy oraz dopasowywane do Państwa możliwości i oczekiwań. Ich wysokość uzależniona jest natomiast od rodzaju zlecenia, terminu jego wykonania oraz koniecznego nakładu pracy.
          </Paragraph>
          <Paragraph>
            Rozpoczęcie współpracy poprzedza nieodpłatne przygotowanie wstępnej i niezobowiązującej wyceny zawierającej wszelkie przewidywane koszty doradztwa.
          </Paragraph>
        </TextWrapper>
        <DesktopOffersImage />
      </Wrapper>
    </Container>
  )
}

export default Pricing
