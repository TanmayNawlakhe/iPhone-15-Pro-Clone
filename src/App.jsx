import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlighs from './components/Highlights'
import Model from './components/Model'
import Features from './components/features'

import * as Sentry from '@sentry/react';
import Howitworks from './components/Howitworks'
import Footer from './components/Footer'

const App = () => {
  

  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlighs/>
        <Model/>
        <Features/>
        <Howitworks/>
        <Footer/>


      </main>
    </>
  )
}

export default Sentry.withProfiler(App);
