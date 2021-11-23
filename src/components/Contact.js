import React from 'react'
import styled from '@emotion/styled';
import Footer from './Footer';
import { Container, Title, Paragraph } from './ui';

const Wrapper = styled.div`
background: linear-gradient(135deg, rgba(13, 69, 121, 1) 0%, rgba(11, 45, 77, 1) 100%);
color: white;
position: relative;
padding: 60px 0 80px;

`;

const Row = styled.div`
display: flex;

@media (max-width: 992px) {
  flex-direction: column;
}
`;

const Col = styled.div`
flex: 1;
`;

const Text = styled.div`
  margin-left: 32px;
`;

const Map = styled.div`
  margin-top: 36px;
`;

const Icon = styled.img`
display: inline;
margin-right: 8px;
width: 32px;
`;

const TitleRow = styled.h3`
display: flex;
align-items: center;
margin-top: 32px;

  & > a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 992px) {
    font-size: 18px;
  }
`;



const Contact = () => {
  return (
    <Wrapper id="kontakt">
      <Container>
        <Title>Kontakt</Title>
        <Paragraph>
          W ramach prowadzonej kancelarii oferujemy Państwu szeroki zakres usług prawnych skierowanych zarówno do podmiotów gospodarczych, jak i osób indywidualnych.
        </Paragraph>
        <Paragraph>
          W celu zaoszczędzenia Państwa czasu, dalszy kontakt możliwy jest w formie telekonferencji za pomocą programu Skype lub spotkania w dogodnym dla Państwa miejscu.
        </Paragraph>
        <Row>
          <Col>

            <div>

              <TitleRow><Icon src="./phone.svg" alt="" /><a href="tel:661582832">+48 661 497 118</a></TitleRow>

              <TitleRow><Icon src="./map-pin.svg" alt="" />Lokalizacje</TitleRow>
              <Text>
                ul. Woźna 9/1, 61-777 Poznań<br />
                ul. Sądowa 9/1, 88-300 Mogilno<br />
                ul. Szeroka 5/10, 88-100 Inowrocław
              </Text>
            </div>
          </Col>
          <Col>
            <TitleRow><Icon src="./at-sign.svg" alt="" /><a href="mailto:kancelaria@dgprawo.pl">kancelaria@dgprawo.pl</a></TitleRow>

            <TitleRow><Icon src="./mail.svg" alt="" />Adres korespondencyjny</TitleRow>
            <Text>
              Kancelaria Radcy Prawnego Dawid Gawrysiak<br />
              ul. Winiarska 56D/35<br />
              60-54 Poznań<br />
            </Text>
          </Col>
        </Row>
        <Map>
          <iframe width="100%" height="350px" frameBorder="0" allowFullScreen
            src="https://umap.openstreetmap.fr/pl/map/kancelaria-radcy-prawnego-dawid-gawrysiak_305424?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false#8/52.698/18.094"></iframe>
        </Map>
      </Container>
      <Footer isFloating />
    </Wrapper>
  )
}

export default Contact
