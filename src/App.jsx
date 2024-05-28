import Interests from './Interests.jsx';
import Navbar from './Navbar.jsx'
import Contact from './Contact.jsx'
import Portfolio from './Portfolio.jsx'
import Footer from './Footer.jsx'
import Skills from './Skills.jsx'
import About from './About.jsx'
import Banner from './Banner.jsx'


function App() {
  return (
    <div className="background-container">
   
    
    

    
    <Navbar />
 
    <Banner></Banner>
    <About/>
    <Skills />
    <Portfolio />
    <Interests />
 
  
    <Contact/>
   
    <Footer/>
  </div>
  

  
     
  );
}

export default App
