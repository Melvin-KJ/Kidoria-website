import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {

  return (
    <div className='overflow-x-hidden'>
      {/* Navbar section */}
      <Navbar/>
      {/* Header section */}
      <Header/>
    </div>
  );
}

export default App