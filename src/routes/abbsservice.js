import React  from 'react';
import Abbsservicec from '../components/abbsservicec'
import Combo from '../components/combo';
import Footer from '../components/footer';


const Abbsservice = () => {
    const subtopics = [
        { date: '2024-04-07', text: 'Debit Card(Atm Service)' },
        { date: '2024-04-08', text: 'Free Mobile Banking Service' },
        { date: '2024-04-09', text: 'ABBS SERVICE' },
        { date: '2024-04-09', text: 'KRAMIK BACHAT' },
        { date: '2024-04-09', text: 'SAHARA DOUBLE DHAMAKA BACHAT' },
    ];
      return (
       
         <div className='container mx-auto mt-8'>
          <Combo/>
        <Abbsservicec title="Related Services" subtopics={subtopics} />
        <Footer/>
    </div>
      )
}
export default Abbsservice
