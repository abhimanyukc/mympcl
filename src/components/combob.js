
import HeaderOut from './headerout'
import Nav from './nav';
import React, { useState, useEffect} from 'react'
import { format } from 'date-fns';
import Marque from './marque';
import Headerinfo from './headerinfo';



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
        <HeaderOut lang={lang} timeFormat={timeFormat} />
     <Headerinfo/>
     <div className='sticky top-0 left-0 z-40 w-full bg-white '>
      
     <Nav setLanguage={setLanguage} setTimeFormat={setTimeFormat} />
     </div>
    </div>
  )
}

export default Combo
