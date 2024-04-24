import React  from 'react';
import Freemobilebankingservicec from '../components/freemobilebankingservicec'


const Freemobilebankingservice = () => {

  const subtopics = [
    { date: '2024-04-07', text: 'Debit Card(Atm Service)' },
    { date: '2024-04-08', text: 'SMS Service' },
    { date: '2024-04-09', text: 'ABBS Service' },
    { date: '2024-04-10', text: 'KRAMIK BACHAT' },
    { date: '2024-04-11', text: 'SAHARA DOUBLE DHAMAKA BACHAT' },
];
  return (

     <div className='container mx-auto mt-8'>
    <Freemobilebankingservicec title="Related Services" subtopics={subtopics} />
</div>
  )
}

export default Freemobilebankingservice
