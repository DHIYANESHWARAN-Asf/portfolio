import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HowIBuild from './components/HowIBuild';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import GithubActivity from './components/GithubActivity';
import SoftSkills from './components/SoftSkills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';

function App() {
  const resumeUrl = "/resume.html";

  const handleDownloadResume = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#08090B] text-zinc-100 selection:bg-blue-500 selection:text-white font-sans">
      {/* Desktop Custom Cursor */}
      <CustomCursor />
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar resumeUrl={resumeUrl} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero onDownloadResume={handleDownloadResume} />

        {/* About & Key Stats */}
        <About />

        {/* Technical Toolbox */}
        <Skills />

        {/* Selected Work (Projects & Case Studies) */}
        <Projects />

        {/* Engineering Methodology */}
        <HowIBuild />

        {/* Achievements & Milestones */}
        <Achievements />

        {/* Certifications */}
        <Certifications />

        {/* Education Timeline */}
        <Education />

        {/* Open Source & Developer Activity */}
        <GithubActivity />

        {/* Strengths & Languages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#08090B] border-t border-zinc-800/80">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <SoftSkills />
            <Languages />
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}

export default App;
