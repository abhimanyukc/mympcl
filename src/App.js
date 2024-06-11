import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

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
import Bankingservices from './routes/bankingservices';
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
import Headerinfo from './components/headerinfo';
import Organization from './routes/organization';
import Downloads from './routes/downloads';
import Dynamiccomponent from './components/dynamiccomponent';
import Careerstest from './routes/careertest';
import Softwareengineer from './routes/softwareengineer';
import Gallery from './routes/gallery';
import Kyc from './routes/Kyc';
import Loans from './routes/loans';
import BusinessLoan from './routes/businessloan';
import EducationalLoan from './routes/Educationalloan';
import RealestateLoan from './routes/realestateloan';
import Healthprogram from './routes/healthprogram';
import Hospitalaffiliation from './routes/hospitalaffiliation';
import SeniorCitizenHealthCare from './routes/seniorcitizenhealthcare';
import LifeBlessingProgram from './routes/LifeBlessingProgram';
import FemaleNutrition from './routes/FemaleNutrition';
import Debitcardatmservice from './routes/debitcardatmservice';
import Freemobilebankingservice from './routes/freemobilebankingservice';
import Smsservice from './routes/smsservice';
import Abbsservice from './routes/abbsservice';
import Gausahardoubledhamakabachat from './routes/gausahardoubledhamakabachat';
import Kramikbachat from './routes/kramikbachat';
import Gallery1 from './routes/gallery1';
import Gallery2 from './routes/gallery2';
import Gallery3 from './routes/gallery3';
import Gallery4 from './routes/gallery4';
import Careercategory from './components/careercategory';
import BankTellerRoute from './routes/banktellerroute';
import CustomerServiceRepresentativeRoute from './routes/customerservicerepresentative';
import LoanOfficerRoute from './routes/loanofficer';
import FinancialAnalystRoute from './routes/financeanalyst';
import RiskAnalystRoute from './routes/riskanalyst';
import ComplianceOfficerRoute from './routes/complianceofficer';
import Branchmanager from './routes/branchmanager';
import InvestmentAdvisorRoute from './routes/investmentmanager';
import TechnologySpecialistRoute from './routes/technologyspecialist';
import MortgageSpecialistRoute from './routes/mortgagespecialist';
import Login from './routes/login';
import Signup from './routes/signup';
import Resetpassword from './components/resetpasswordc';
import Recoveryconfirmation from './routes/recoveryconfirmation';
import Forgetpassword from './routes/forgetpassword';
import Remittance from './routes/remittance';
import LoaderAnimate from './components/loader';
import Homee from './routes/homee';
import NoMatch from './nomatch/nomatch';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderAnimate />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Homee />} />
            <Route path="/dynamiccomponent" element={<Dynamiccomponent />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/about" element={<About />} />
            <Route path="/loan" element={<Loans />} />
            <Route path="/services" element={<Services />} />
            <Route path="/healthprogram" element={<Healthprogram />} />
            <Route path="/services/bankingservices" element={<Bankingservices />} />
            <Route path="/services/appservices" element={<Appservice />} />
            <Route path="/services/atmservices" element={<Atmservice />} />
            <Route path="/services/healthservices" element={<Healthservice />} />
            <Route path="/services/internetservices" element={<Internetservice />} />
            <Route path="/services/microfinanceservices" element={<Microfinanceservice />} />
            <Route path="/services/mobilebankingservices" element={<Mobilebankingservice />} />
            <Route path="/services/remmittanceservices" element={<Remittanceservice />} />
            <Route path="/services/smsservices" element={<Smsbankingservice />} />
            <Route path="/services/otherbankingservices" element={<Otherbankingservice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/interestrate" element={<Interestrate />} />
            <Route path="/emicalculator" element={<Emicalculator />} />
            <Route path="/information" element={<Information />} />
            <Route path="/career" element={<Careerstest />} />
            <Route path="/careertest" element={<Careers />} />
            <Route path="/careercategory" element={<Careercategory />} />
            <Route path="/career/softwareEngineer" element={<Softwareengineer />} />
            <Route path="/career/applicationForm" element={<Careers />} />
            <Route path="/career/bankTeller" element={<BankTellerRoute />} />
            <Route path="/career/customerServiceRepresentative" element={<CustomerServiceRepresentativeRoute />} />
            <Route path="/career/loanOfficer" element={<LoanOfficerRoute />} />
            <Route path="/career/financialAnalyst" element={<FinancialAnalystRoute />} />
            <Route path="/career/riskAnalyst" element={<RiskAnalystRoute />} />
            <Route path="/career/complianceOfficer" element={<ComplianceOfficerRoute />} />
            <Route path="/career/branchManager" element={<Branchmanager />} />
            <Route path="/career/investmentAdvisor" element={<InvestmentAdvisorRoute />} />
            <Route path="/career/mortgageSpecialist" element={<MortgageSpecialistRoute />} />
            <Route path="/career/technologySpecialist" element={<TechnologySpecialistRoute />} />
            <Route path="/news" element={<News />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/notice" element={<Notices />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/department" element={<Department />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/headerinfo" element={<Headerinfo />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/albumi" element={<Gallery1 />} />
            <Route path="/gallery/albumii" element={<Gallery2 />} />
            <Route path="/gallery/albumiii" element={<Gallery3 />} />
            <Route path="/gallery/albumiv" element={<Gallery4 />} />
            <Route path="/kyc" element={<Kyc />} />
            <Route path="/loan/educationalloan" element={<EducationalLoan />} />
            <Route path="/loan/realestateloan" element={<RealestateLoan />} />
            <Route path="/loan/businessloan" element={<BusinessLoan />} />
            <Route path="/healthprogram/hospitalaffiliation/detail" element={<Hospitalaffiliation />} />
            <Route path="/healthprogram/seniorcitizenhealthcare/detail" element={<SeniorCitizenHealthCare />} />
            <Route path="/healthprogram/femaleNutrition/detail" element={<FemaleNutrition />} />
            <Route path="/healthprogram/lifeBlessingProgram/detail" element={<LifeBlessingProgram />} />
            <Route path="/debit-card-atm-service/product/service/detail" element={<Debitcardatmservice />} />
            <Route path="/free-mobile-banking-service/product/service/detail" element={<Freemobilebankingservice />} />
            <Route path="/sms-service/product/service/detail" element={<Smsservice />} />
            <Route path="/abbs-service/product/service/detail" element={<Abbsservice />} />
            <Route path="/kramik-bachat/product/service/detail" element={<Kramikbachat />} />
            <Route path="/Gausahar-Double-Dhamaka-Bachat/product/service/detail" element={<Gausahardoubledhamakabachat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password/:token" element={<Resetpassword />} />
            <Route path="/recovery-confirmation" element={<Recoveryconfirmation />} />
            <Route path="/forgot-password" element={<Forgetpassword />} />
            <Route path="/remittance" element={<Remittance />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
