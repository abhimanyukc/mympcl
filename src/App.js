
import './App.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routes/home';
import Services from './routes/services';
import Contact from './routes/contact';
import Interestrate from './routes/interestrate';
import Emicalculator from './routes/emicalculator';





function App() {
  return (
       <>
        
       <Router>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/services" element= {<Services/>} />
        <Route path="/contact" element= {<Contact/>} />
        <Route path="/interestrate" element= {<Interestrate/>} />
        <Route path="/emicalculator" element= {<Emicalculator/>} />
      </Routes>
    </Router>
       </>
  )
}

export default App;
