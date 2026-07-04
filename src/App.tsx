import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo, skills, projects, contactInfo, socialLinks, navItems } from './data';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header navItems={navItems} />
      <main>
        <Hero personalInfo={personalInfo} socialLinks={socialLinks} />
        <About personalInfo={personalInfo} skills={skills} />
        <Projects projects={projects} />
        <Contact contactInfo={contactInfo} socialLinks={socialLinks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;