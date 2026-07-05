import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Helmet from './components/Helmet';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './i18n/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ErrorBoundary>
          <div className="min-h-screen bg-background text-foreground">
            <Helmet />
            <Header />
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </div>
        </ErrorBoundary>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;