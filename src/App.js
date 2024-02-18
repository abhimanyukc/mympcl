
import './App.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './routes/home';
import Services from './routes/services';
import Contact from './routes/contact';
import Interestrate from './routes/interestrate';
import Emicalculator from './routes/emicalculator';
import Information from './routes/information';
import Careers from './routes/careers';
import News from './routes/News';
import Epaper from './routes/epaper';
import Reports from './routes/reports';
import Notices from './routes/notices';
import Membership from './routes/membership';
import Department from './routes/department';
import Branches from './routes/branches';





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
        <Route path="/information" element= {<Information/>} />
        <Route path="/career" element= {<Careers/>} />
        <Route path="/news" element= {<News/>} />
        <Route path="/epaper" element= {<Epaper/>} />
        <Route path="/reports" element= {<Reports/>} />
        <Route path="/notices" element= {<Notices/>} />
        <Route path="/membership" element= {<Membership/>} />
        <Route path="/department" element= {<Department/>} />
        <Route path="/branches" element= {<Branches/>} />
      </Routes>
    </Router>
       </>
  )
}

export default App;
