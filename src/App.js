
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
import Bankingservicesr from './routes/bankingservices';
import Appservice from './routes/appservice';
import Atmservice from './routes/atmservice';
import Healthservice from './routes/healthservice';
import Internetservice from './routes/internetbankingservice';
import Microfinanceservice from './routes/microfinanceservice';
import Mobilebankingservice from './routes/mobilebankingservice';
import Remittanceservice from './routes/remittanceservice';
import Smsbankingservice from './routes/smsbankingservice';
import Otherbankingservice from './routes/otherbankingservice';
import Login from './routes/login';
import Signup from './routes/signup';
import About from './routes/about';
import Account from './components/test';






function App() {
  return (
       <>
        
       <Router>
      <Routes>
    
        <Route path="/" element= {<Home/>} />
        <Route path="/test" element= {<Account/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/services" element= {<Services/>} />
        <Route path="/services/bankingservices" element= {<Bankingservicesr/>} />
        <Route path="/services/appservices" element= {<Appservice/>} />
        <Route path="/services/atmservices" element= {<Atmservice/>} />
        <Route path="/services/healthservices" element= {<Healthservice/>} />
        <Route path="/services/internetservices" element= {<Internetservice/>} />
        <Route path="/services/microfinanceservices" element= {<Microfinanceservice/>} />
        <Route path="/services/mobilebankingservices" element= {<Mobilebankingservice/>} />
        <Route path="/services/remmittanceservices" element= {<Remittanceservice/>} />
        <Route path="/services/smsservices" element= {<Smsbankingservice/>} />
        <Route path="/services/otherbankingservices" element= {<Otherbankingservice/>} />
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
        <Route path="/login" element= {<Login/>} />
        <Route path="/signup" element= {<Signup/>} />
        
      </Routes>
    </Router>
       </>
  )
}

export default App;
