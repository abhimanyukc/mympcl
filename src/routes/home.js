import React, {useState} from 'react'
import ImageSlider from '../components/imageslider'
import Sidebar from '../components/sidebar'
import Servicesc from '../components/servicesc'
import Onlineaccountopening from '../components/onlineaccountopening'
import Footer from '../components/footer'

import Account from '../components/account'
import Remittance from '../components/remittance'
import InterestRateComponent from '../components/interestdetails'
import Emicalculatorc from '../components/emicalculatorc'
import ContactC from '../components/contact'
import Informationc from '../components/informationc'
import Membershipc from '../components/membershipc'
import Departmentc from '../components/departmentc'
import Branchesc from '../components/branchesc'
import Combo from '../components/combo'
import Newsc from '../components/news'
import Careerc from '../components/careerc'
import Headerinfo from '../components/headerinfo'
import Careertest from '../components/career'
import Careercategory from '../components/careercategory'
import Softwareengineerc from '../components/Softwareengineer'
import NoticePage from '../modal/noticepage'








const Home = () => {
   
  const [showNotice, setShowNotice] = useState(true);

  const closeNotice = () => {
    setShowNotice(false);
  };

  return (
     
    <div className={showNotice ? "opacity-60" : ""}>
    {showNotice && <NoticePage 
     onClose={closeNotice}
     />}
    <div className='font-sans text-base leading-6 tracking-normal bg-white text-3d3d3d text-start '>
      
     <Combo/>
       <Careertest/>
       <Careercategory/>
       
      <ImageSlider/>
      <Softwareengineerc/>
      <Sidebar className=""/>
     
     <Servicesc/>
     <Onlineaccountopening/>
     <Account/>
     <Remittance/>
     <InterestRateComponent/>
      <Emicalculatorc/>
      <Informationc/>
      <Membershipc/>
      <Departmentc/>
      <Branchesc/>
      <ContactC/>
      <Newsc/>
      <Careerc/>
     <Footer/>
    </div>
    </div>
  )
}

export default Home
