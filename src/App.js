import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Switch , } from 'react-router-dom';
import Heropage from './Components/Heropage';
import LawyerNeeded from './Components/LawyerNeeded';
 import Dial from './Components/Dial';
import Docs from './Components/Docs';
import AboutUs from './Components/AboutUs';

function App() {
  return (
<div className='Legally-aiD'>
  <Navbar/>
  <Heropage/>
  <LawyerNeeded/>
  <Dial/>
  <Docs/>
  <AboutUs/>
  
  
  
    </div>
  );
}

export default App;
