import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;