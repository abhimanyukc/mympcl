
import './App.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routes/home';
import Services from './routes/services';
import Contact from './routes/contact';





function App() {
  return (
       <>
        
       <Router>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/services" element= {<Services/>} />
        <Route path="/contact" element= {<Contact/>} />
       
      </Routes>
    </Router>
       </>
  )
}

export default App;
