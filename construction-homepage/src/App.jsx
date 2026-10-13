import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Projects from './components/Projects.jsx';
import QuoteForm from './components/QuoteForm.jsx';
import Testimonials from './components/Testimonials.jsx';
import ClientLogos from './components/ClientLogos.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main id="main-content">
        <Hero />
        <FeatureSection />
        <About />
        <Services />
        <Process />
        <Projects />
        <QuoteForm />
        <Testimonials />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
