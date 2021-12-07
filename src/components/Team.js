import React, { useState } from 'react'
import styled from '@emotion/styled';
import { Container, Title, Paragraph } from './ui';
import { Collapse } from 'react-collapse';

const Wrapper = styled.div`
margin: 60px 0 120px;
position: relative;

@media (max-width: 992px) {
  margin: 60px 0 60px;
}
`

const team = [
  {
    firstName: 'Dawid',
    lastName: 'Gawrysiak',
    role: 'Radca prawny',
    lang: 'angielski oraz rosyjski',
    desc: 'Absolwent oraz stypendysta naukowy Wydziału Prawa i Administracji Uniwersytetu im. Adama Mickiewicza w Poznaniu oraz Uniwersytetu Ekonomicznego w Poznaniu. W ramach krajowych i zagranicznych programów wymiany oraz stypendiów studiował na Państwowym Uniwersytecie w Sankt Petersburgu (Federacja Rosyjska), Uniwersytecie Gdańskim, a także Uniwersytecie Warmińsko-Mazurskim w Olsztynie. Jego praktyka obejmuje obszar szeroko rozumianego prawa gospodarczego; specjalizuje się w prawie cywilnym (zwłaszcza w zakresie dotyczącym nieruchomości) i prawie administracyjnym.',
  },
  {
    firstName: 'Jarosław',
    lastName: 'Pustkowski',
    role: 'Radca prawny',
    lang: 'angielski oraz rosyjski',
    desc: 'Absolwent Wydziału Prawa i Administracji Uniwersytetu im. Adama Mickiewicza w Poznaniu. W latach 2011 – 2013 odbywał aplikację radcowską w Okręgowej Izbie Radców Prawnych w Poznaniu. Doświadczenie zdobywał w urzędach administracji publicznej oraz kilku poznańskich kancelariach prawnych. Jego wieloletnia praktyka obejmuje obszary prawa gospodarczego, cywilnego, rodzinnego, pracy i administracyjnego. Specjalizuje się w zagadnieniach dotyczących nieruchomości oraz postępowaniu administracyjnym.',
  },
  {
    firstName: 'Magdalena',
    lastName: 'Wojciechowska-Gryboś',
    role: 'Radca prawny',
    lang: 'angielski',
    desc: 'Absolwentka Wydziału Prawa i Administracji Uniwersytetu im. Adama Mickiewicza w Poznaniu. Aplikację radcowską odbyła w Okręgowej Izbie Radców Prawnych w Bydgoszczy. Jej wieloletnia praktyka w organach administracji skarbowej obejmuje obszar prawa podatkowego, administracyjnego, handlowego i gospodarczego. Specjalizuje się w sprawach związanych z postępowaniem karnym skarbowym o przestępstwa skarbowe oraz wykroczenia skarbowe oraz zagadnieniach związanych z postępowaniem administracyjnym.',
  },
  {
    firstName: 'Marek',
    lastName: 'Steltmann',
    role: 'Rzeczoznawca majątkowy',
    detail: 'Nr uprawnień: 3733',
    lang: 'niemiecki oraz rosyjski',
    desc: 'Przeprowadza wyceny na zlecenia podmiotów prywatnych oraz publicznych od 2002 roku. Absolwent Politechniki Warszawskiej Instytutu Transportu w Warszawie oraz Uniwersytetu Warmińsko Mazurskiego w Olsztynie – Wydział Ekonomii. Ukończył studia podyplomowe na Politechnice Warszawskiej w Instytucie Transportu w Warszawie oraz studia podyplomowe na Uniwersytecie Warmińsko-Mazurskim w Olsztynie na Wydziale Geodezji i Gospodarki Przestrzennej.',
  },
  {
    firstName: 'Urszula',
    lastName: 'Gawrysiak',
    role: 'Rzeczoznawca majątkowy',
    lang: 'angielski',
    desc: 'Absolwentka studiów magisterskich na Uniwersytecie im. Adama Mickiewicza w Poznaniu oraz studiów podyplomowych z zakresu gospodarki nieruchomościami spec. wyceny nieruchomości na Uniwersytecie Ekonomicznym w Poznaniu. Zajmuje się szeroką rozumianą wyceną nieruchomości oraz ruchomości dla różnych celów i potrzeb, w tym postępowań sądowych i egzekucyjnych.',
  },
  {
    firstName: 'Krzysztof',
    lastName: 'Mądrowski',
    role: 'Prawnik',
    lang: 'angielski oraz francuski',
    desc: 'Aplikację radcowską odbył w Okręgowej Izbie Radców Prawnych w Poznaniu. Przez 10 lat zdobywał doświadczenie w kancelariach w Poznaniu. Jego praktyka obejmuje doradztwo w zakresie prawa cywilnego, prawa gospodarczego i handlowego, a także w zakresie spraw transgranicznych oraz windykacji. Dzięki zdobytemu doświadczeniu i stale poszerzanej wiedzy merytorycznej, zapewnia naszym klientom profesjonalną obsługę prawną, w pełni angażując się w każdą z prowadzonych spraw, pozostając do dyspozycji klienta niezmiennie na każdym etapie obsługi. Szczególne znaczenie ma dla niego zapewnienie każdemu klientowi należytej i kompleksowej pomocy prawnej.',
  },
]

const DesktopTabs = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

const MobileTabs = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 4px;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Tab = styled.button`
width: 100%;

background: ${({ isActive }) => isActive ? '#EAA636' : '#ebbd71'};
padding: 12px 8px 10px;
font-variant: small-caps;
color: white;
border-radius: 1rem 1rem 0 0;
transition: background 0.2s;
font-size: 16px;
border: none;
cursor: pointer;

&:hover {
  background: #EAA636;
}

p {
 margin-top: 0;   
}

`;


const Name = styled.p`
font-weight: 600;

@media (max-width: 1200px) {
  font-size: 15px;
}
`;

const Role = styled.span`
  font-size: 15px;

  @media (max-width: 1200px) {
    font-size: 13px;
  }
`;

const CollapseWrapper = styled.div`
  padding: 12px;
  background: #e7f1fd;
  border-radius:  0 0 1rem 1rem;

  .body {
    padding: 16px;
  }
`;

const Content = styled.div`
  padding: 16px;
  border: 5px solid #EAA636;

  border-radius:  0 0 1rem 1rem;

  background: #e7f1fd;

  .body {
    background: white;
    padding: 16px 42px;
    border-radius: 0.6rem;
    min-height: 350px;
  }

  .name {
    font-weight: 600;
    font-size: 20px;
  }

  @media (max-width: 992px) {
    padding: 0;
  }
`
const Team = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activePerson = team[activeTab || 0];

  return (
    <Container id="zespol">
      <Wrapper>
        <Title>Zespół</Title>
        <Paragraph>
          Nasz zespół składa się z osób o zróżnicowanych specjalizacjach i zainteresowaniach dzięki czemu zapewniamy wszechstronną pomoc prawną.
        </Paragraph>
        <DesktopTabs>
          <Tabs>
            {team.map(({ firstName, lastName, role, desc, detail, lang }, index) => (
              <Tab key={`tab-${index}`} onClick={() => setActiveTab(index)} isActive={index === activeTab}>
                <Name>{firstName} <br />{lastName}</Name>
                <Role>{role}</Role>
              </Tab>
            ))}
          </Tabs>
          <Content>
            <div className="body">
              <p>
                <span className="name">{activePerson.firstName} {activePerson.lastName}</span>
                <br />
                <em>{activePerson.role}</em>
              </p>
              <Paragraph>{activePerson.desc}</Paragraph>
              <p>{activePerson.detail}</p>
              <p>Język:
                <br />
                <em>{activePerson.lang}</em>
              </p>
            </div>
          </Content>
        </DesktopTabs>
        <MobileTabs>
          <Tabs>
            {team.map(({ firstName, lastName, role, desc, detail, lang }, index) => (
              <div key={`tab-${index}`}>
                <Tab onClick={() => setActiveTab(index === activeTab ? null : index)} isActive={index === activeTab}>
                  <Name>{firstName} <br />{lastName}</Name>
                  <Role>{role}</Role>
                </Tab>

                <Content>
                  <Collapse isOpened={index === activeTab}>
                    <CollapseWrapper>
                      <div className="body">
                        <p>
                          <span className="name">{firstName} {lastName}</span>
                          <br />
                          <em>{role}</em>
                        </p>
                        <Paragraph>{desc}</Paragraph>
                        <p>{detail}</p>
                        <p>Język:
                          <br />
                          <em>{lang}</em>
                        </p>
                      </div>
                    </CollapseWrapper>
                  </Collapse>
                </Content>
              </div>
            ))}
          </Tabs>
        </MobileTabs>
      </Wrapper>
    </Container>
  )
}

export default Team
