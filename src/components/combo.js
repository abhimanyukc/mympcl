
import Header from './header'
import Nav from './nav';
import React, { useState, useEffect} from 'react'
import { format } from 'date-fns';
import Marque from './marque';


const Combo = () => {
  const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  const [lang, setLanguage] = useState(storedLanguage);


  const storedTimeFormat = localStorage.getItem('selectedTimeFormat') || 'en';
  const [timeFormat, setTimeFormat] = useState(storedTimeFormat);

  const formatDate = (date) => {
    if (timeFormat === 'नेपा') {
      // Implement Nepali date formatting logic here
      // For now, just return the English format
      return format(date, 'MMM d, yyyy');
    } else {
      return format(date, 'MMM d, yyyy');
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedLanguage', lang);
    localStorage.setItem('selectedTimeFormat', timeFormat);
  }, [lang, timeFormat]);



  return (
    <div>
     <div className='fixed top-0 left-0 z-50 w-full bg-white '>
     <Header lang={lang} timeFormat={timeFormat} />
      <Nav setLanguage={setLanguage} setTimeFormat={setTimeFormat} />
      <Marque/>
      
      </div>
    </div>
  )
}

export default Combo
