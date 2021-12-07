import React, { useEffect } from 'react'
import { Root, Routes, Head } from 'react-static'
import { Router } from 'components/Router'
import CookieConsent from "react-cookie-consent";

import './app.css'
import unbrakeConjuctions from './utils/unbrakeConjuctions';

function App() {
  useEffect(() => {
    unbrakeConjuctions();
  }, [])

  return (
    <Root>
      <Head>
        <title>Kancelaria Radcy Prawnego Dawid Gawrysiak</title>
        <meta name="description" content="Kancelaria Radcy Prawnego Dawid Gawrysiak. Dbanie o interes naszych klientów i świadczenie na ich rzecz obsługi prawnej odpowiadającej ich potrzebom jest dla nas nadrzędną wartością nieustannie powodującą konieczność poszerzania posiadanych kompetencji." />
        <meta property="og:title" content="Kancelaria Radcy Prawnego Dawid Gawrysiak" />
        <meta property="og:description" content="Kancelaria Radcy Prawnego Dawid Gawrysiak. Dbanie o interes naszych klientów i świadczenie na ich rzecz obsługi prawnej odpowiadającej ich potrzebom jest dla nas nadrzędną wartością nieustannie powodującą konieczność poszerzania posiadanych kompetencji." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dgprawo.pl" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image" content="./ogimage.jpg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-53265383-1"></script>

        <script dangerouslySetInnerHTML={{
          __html: `          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-53265383-1');`
        }} />


        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700"
          rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700" rel="stylesheet" />
      </Head>
      <div className="content">
        <React.Suspense fallback={<em>Ładowanie...</em>}>
          <Router >
            <Routes default />
          </Router>
        </React.Suspense>
        <CookieConsent
          style={{ background: "#0b2d4d", fontSize: '16px' }}
          buttonStyle={{ background: "#eaa636", color: 'white', fontSize: '16px' }}
          buttonText="Ok"
        >
          Ta strona używa plików cookies do prawidłowego funkcjonowania oraz w celach analitycznych.
        </CookieConsent>
      </div>
    </Root>
  )
}

export default App
