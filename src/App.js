import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Banner from './components/Banner';
import Newsletter from './components/Newsletter';
import MailchimpForm from './components/MailchimpForm'







function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Footer />
      <Projects />
      <Contact />
      <Skills />
      <ProjectCard />
      <Newsletter />
      <MailchimpForm />
    
     

    </div>
  );
}

export default App;