import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Classes from './components/Classes';
import Footer from './components/Footer';

function App() {

  return (
    <div className='overflow-x-hidden'>
      {/* Navbar section */}
      <Navbar/>
      {/* Header section */}
      <Header/>
      {/* About section */}
      <About/>
      {/* Classes section */}
      <Classes/>
      {/* Contact us section */}
      <Footer />
    </div>
  );
}

export default App