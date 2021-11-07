import React, { useEffect } from 'react'
import { Root, Routes, Head } from 'react-static'
import { Router } from 'components/Router'

import './app.css'
import unbrakeConjuctions from './utils/unbrakeConjuctions';

function App() {
  useEffect(()=>{
    unbrakeConjuctions();
  }, [])

  return (
    <Root>
      <Head>
        <title>Kancelaria Radcy Prawnego Dawid Gawrysiak</title>
        <meta name="description" content="Kancelaria Radcy Prawnego Dawid Gawrysiak. Dbanie o interes naszych klientów i świadczenie na ich rzecz obsługi prawnej odpowiadającej ich potrzebom jest dla nas nadrzędną wartością nieustannie powodującą konieczność poszerzania posiadanych kompetencji." />

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
      </div>
    </Root>
  )
}

export default App
