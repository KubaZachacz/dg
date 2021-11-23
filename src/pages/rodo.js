import React from 'react'
import styled from '@emotion/styled';
import { Container } from '../components/ui'
import Layout from './../components/Layout';

const StyledContainer = styled(Container)`
  margin-top: 60px;
  font-size: 16px;


  & > h2 {
    font-size: 18px;
    font-family: 'Roboto Slab', serif;
    margin-top: 40px;
  }

  p, li {
    line-height: 1.4;
  }

  a {
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default () => {

  return (
    <Layout>
      <StyledContainer>
        <p><strong>Od dnia 25 maja 2018 r. obowiązuje Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej „RODO”), dlatego przekazujemy informacje dotyczące przetwarzanych przez nas danych osobowych:</strong></p>
        <h2>ADMINISTRATOR DANYCH OSOBOWYCH</h2>
        <p><span >Administratorem danych osobowych jest radca prawny Dawid Gawrysiak prowadzący działalność gospodarczą pod firmą Kancelaria Radcy Prawnego Dawid Gawrysiak, Świerkówiec 19B, 88-300 Mogilno, NIP: 5571634491, REGON 341370566, (dalej: Administrator danych).</span></p>
        <h2>Dane do kontaktu:</h2>
        <ul>
          <li aria-level={1}><span >ul. Winiarska 56D/35, 60-654 Poznań</span></li>
          <li aria-level={1}><span >E-mail: <a href="mailto:kancelaria@dgprawo.pl">kancelaria@dgprawo.pl</a></span></li>
          <li aria-level={1}><span >M: <a href="tel:+48661497118">661 497 118</a></span></li>
        </ul>
        <h2>CELE PRZETWARZANIA DANYCH OSOBOWYCH I PODSTAWY PRAWNE</h2>
        <p><span >Dane osobowe przetwarzamy w celu:</span></p>
        <ul>
          <li aria-level={1}><span >podjęcia działań zmierzających do zawarcia lub zmiany umowy o świadczenie pomocy prawnej, umowy o obsługę prawną, lub podjęcia nowego zlecenia, takich jak: korespondencja w sprawie uzgodnienia warunków umowy, kontakt telefoniczny, listowny i za pośrednictwem poczty e-mail (podstawa prawna: art. 6 ust. 1 lit. b) RODO);</span></li>
          <li aria-level={1}><span >wykonania ciążących na Administratorze obowiązków prawnych i księgowych, np. wystawienie faktury, przechowywania dokumentacji księgowej, co stanowi uzasadniony interes Administratora (podstawa prawna: art. 6 ust. 1 lit. f RODO);</span></li>
          <li aria-level={1}><span >wewnętrznych celów Administratora takich jak, np. praca nad ulepszaniem obsługi klienta, czy analiza finansowa stanowiąca realizację prawnie uzasadnionego interesu Administratora (podstawa prawna: art. 6 ust. 1 lit. f) RODO);</span></li>
          <li aria-level={1}><span >w celu oferowania przez Administratora usług bezpośrednio (podstawa prawna: art. 6 ust. 1 lit. f RODO);&nbsp;&nbsp;</span></li>
          <li aria-level={1}><span >w celu ewentualnego dochodzenia lub obrony przed roszczeniami, a także w celach archiwalnych prowadzonych na wypadek, wskazanej przepisami prawa, potrzeby wykazania określonych okoliczności, co stanowi realizację prawnie uzasadnionego interesu Administratora (podstawa prawna: art.6 ust.1 </span><span ><br /></span><span >lit. f) RODO).</span></li>
        </ul>
        <h2>JAK DŁUGO BĘDZIEMY PRZECHOWYWAĆ DANE OSOBOWE?</h2>
        <p><span >W zakresie danych zgromadzonych w celu reprezentacji Klienta w ramach wykonywania zawodu radcy prawnego, dane osobowe będą przechowywane przez okres 10 lat od końca roku, w którym zakończyło się postępowanie, w którym dane osobowe zostały zgromadzone.</span></p>
        <p><span >W zakresie zawarcia i realizacji umowy, ustalenia, dochodzenia lub obrony przed roszczeniami dane będą przechowywane do czasu zakończenia jej realizacji, a po tym czasie przez okres wymagany przez przepisy prawa lub dla zabezpieczenia ewentualnych roszczeń (będzie to co do zasady najdłuższy możliwy okres przedawnienia roszczeń plus jeden rok, który to dodatkowy termin wynika z hipotetycznej możliwości zgłoszenia roszczenia tuż przed upływem terminu przedawnienia).&nbsp;</span></p>
        <p><span >W zakresie danych przetwarzanych w celu wykonania obowiązków prawnych dane osobowe będą przechowywane przez czas, w którym przepisy nakazują Administratorowi przechowywać dane, </span><span ><br /></span><span >np. dokumentacja podatkowa musi być przechowywana przez okres co najmniej 5 lat.</span></p>
        <p><span >W przypadku gdy nie dojdzie do zawarcia umowy w oparciu o przeprowadzone negocjacje, dane osobowe będą przechowywane przez okres niezbędny dla zabezpieczenia ewentualnych roszczeń.</span></p>
        <p><span >W zakresie wewnętrznych celów administracyjnych, a także celów archiwalnych, dane osobowe będą przechowywane do czasu wypełnienia prawnie uzasadnionych interesów Administratora stanowiących podstawę przetwarzania danych.</span></p>
        <h2>KOMU PRZEKAZUJEMY DANE OSOBOWE?</h2>
        <p><span >Będziemy przekazywać dane osobowe podmiotom którym zlecimy usługi związane przetwarzaniem danych osobowych, np. biuro rachunkowe, firmy świadczące usługi hostingowe. Takie podmioty przetwarzają dane na podstawie umowy z nami i tylko zgodnie z naszymi poleceniami.</span></p>
        <h2>PRAWA ZWIĄZANE Z PRZETWARZANIEM DANYCH OSOBOWYCH&nbsp;</h2>
        <p><span >Przysługują Pani/Panu następujące prawa związane z przetwarzaniem danych osobowych:</span></p>
        <ol>
          <li aria-level={1}><span >prawo dostępu do Pani/Pana danych osobowych;</span></li>
          <li aria-level={1}><span >prawo żądania sprostowania Pani/Pana danych osobowych;</span></li>
          <li aria-level={1}><span >prawo żądania usunięcia Pani/Pana danych osobowych;</span></li>
          <li aria-level={1}><span >prawo żądania ograniczenia przetwarzania Pani/Pana danych osobowych;</span></li>
          <li aria-level={1}><span >prawo wyrażenia sprzeciwu wobec przetwarzania Pani/Pana danych;</span></li>
          <li aria-level={1}><span >prawo do przenoszenia Pani/Pana danych osobowych;&nbsp;</span></li>
          <li aria-level={1}><span >prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (więcej informacji: https://uodo.gov.pl/).</span></li>
        </ol>
        <p><span >Aby skorzystać z powyższych praw, skontaktuj się z nami.&nbsp;</span></p>
        <p><span >Dane kontaktowe:</span></p>
        <ul>
          <li aria-level={1}><span >ul. Winiarska 56D/35, 60-654 Poznań</span></li>
          <li aria-level={1}><span >E-mail: kancelaria@dgprawo.pl</span></li>
          <li aria-level={1}><span >M: 661 497&nbsp;118</span></li>
        </ul>
        <p><span >Jednocześnie informujemy, iż nie przetwarzamy danych osobowych w sposób zautomatyzowany, ani nie profilujemy Pani/Pana danych osobowych.</span></p>
      </StyledContainer>
    </Layout>
  )
}
