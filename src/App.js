
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
import About from './routes/about';
import Account from './components/test';
import Headerinfo from './components/headerinfo';
import Organization from './routes/organization';
import Downloads from './routes/downloads';
import Dynamiccomponentc from './components/dynamiccomponent';
import Careertest from './components/career';
import Careerstest from './routes/careertest';
import Careercategoryr from './routes/careercategory';
import Softwareengineer from './routes/softwareengineer';
import Gallery from './routes/gallery';
import Kyc from './routes/Kyc';
import Loans from './routes/loans';
import BusinessLoan from './routes/businessloan';
import EducationalLoan from './routes/Educationalloan';
import RealestateLoan from './routes/realestateloan';







function App() {
 
  return (
       <>
        
       <Router>
       <Routes>
          <Route path="/information" element={ <Dynamiccomponentc title="Information" />} />
          <Route path="/about" element={ <Dynamiccomponentc title="About" />} />
          <Route path="/contact" element={ <Dynamiccomponentc title="Contact" />} />
          <Route path="/services" element={ <Dynamiccomponentc title="Services" />} />
          <Route path="/downloads" element={ <Dynamiccomponentc title="Downloads" />} />
          <Route path="/services/bankingservices" element={ <Dynamiccomponentc title="Services / Banking Service" />} />
          <Route path="/services/appservices" element={ <Dynamiccomponentc title="Services / App Service" />} />
          <Route path="/atmservices" element={ <Dynamiccomponentc title="Services / Atm Service" />} />
          <Route path="/healthservices" element={ <Dynamiccomponentc title="Services / Health Service" />} />
          <Route path="/internetservices" element={ <Dynamiccomponentc title="Services / Internet Service" />} />
          <Route path="/microfinanceservices" element={ <Dynamiccomponentc title="Services / Microfinance Service" />} />
          <Route path="/mobilebankingservices" element={ <Dynamiccomponentc title="Services / Mobilebanking Service" />} />
          <Route path="/remmittanceservices" element={ <Dynamiccomponentc title="Services / Remmittance Service" />} />
          <Route path="/smsservices" element={ <Dynamiccomponentc title="Services / smsservices" />} />
          <Route path="/otherbankingservices" element={ <Dynamiccomponentc title="Services / otherbankingservices" />} />
          <Route path="/contact" element={ <Dynamiccomponentc title="Contact" />} />
          <Route path="/interestrate" element={ <Dynamiccomponentc title="Interestrate" />} />
          <Route path="/emicalculator" element={ <Dynamiccomponentc title="Emicalculator" />} />
          <Route path="/career" element={ <Dynamiccomponentc title="Career" />} />
          <Route path="/news" element={ <Dynamiccomponentc title="News" />} />
          <Route path="/reports" element={ <Dynamiccomponentc title="Reports" />} />
          <Route path="/notice" element={ <Dynamiccomponentc title="Notices" />} />
          <Route path="/membership" element={ <Dynamiccomponentc title="Membership" />} />
          <Route path="/organization" element={ <Dynamiccomponentc title="Organization" />} />
          <Route path="/department" element={ <Dynamiccomponentc title="Department" />} />
          <Route path="/branches" element={ <Dynamiccomponentc title="Branches" />} />
          <Route path="/gallery" element={ <Dynamiccomponentc title="gallery" />} />
          <Route path="/kyc" element={ <Dynamiccomponentc title="KYC Form" />} />
          <Route path="/loan" element={ <Dynamiccomponentc title="loans" />} />
          <Route path="/loan/educationalloan" element = { <Dynamiccomponentc title="Educational Loan" />} />
              <Route path="/loan/realestateloan" element = { <Dynamiccomponentc title="Real Estate Loan" />} />
              <Route path="/loan/businessloan" element = { <Dynamiccomponentc title="Business Loan" />} />
        </Routes>

      <Routes>
    
        <Route path="/" element= {<Home/>} />
        <Route path="/dynamiccomponent" element= {<Dynamiccomponentc/>} />
        <Route path="/downloads" element= {<Downloads/>} />
        <Route path="/test" element= {<Account/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/loan" element={ <Loans/>} />
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
        <Route path="/careertest" element= {<Careerstest/>} />
        <Route path="/careercategory" element= {<Careercategoryr/>} />
        <Route path="/SoftwareEngineer" element= {<Softwareengineer/>} />
        <Route path="/news" element= {<News/>} />
        <Route path="/reports" element= {<Reports/>} />
        <Route path="/notice" element= {<Notices/>} />
        <Route path="/membership" element= {<Membership/>} />
        <Route path="/organization" element= {<Organization/>} />
        <Route path="/department" element= {<Department/>} />
        <Route path="/branches" element= {<Branches/>} />
        <Route path="/headerinfo" element = {<Headerinfo/>}/>
        <Route path="/gallery" element = {<Gallery/>}/>
        <Route path="/kyc" element = {<Kyc/>}/>
        <Route path="/loan/educationalloan" element = {<EducationalLoan/>}/>
              <Route path="/loan/realestateloan" element = {<RealestateLoan/>}/>
              <Route path="/loan/businessloan" element = {<BusinessLoan/>}/>
      </Routes>
    </Router>
       </>
  )
}

export default App;
