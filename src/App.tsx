import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import FeaturedTechnologies from './components/FeaturedTechnologies';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <CompanyOverview />
        <FeaturedTechnologies />
        <CaseStudies />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;