import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

function App() {

  return (
    <div className='overflow-x-hidden'>
      {/* Navbar section */}
      <Navbar/>
      {/* Header section */}
      <Header/>
      {/* About section */}
      <About/>
    </div>
  );
}

export default App