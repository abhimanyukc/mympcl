import React  from 'react';
import Healthprogramc from '../components/healthprogramc'
import Combo from '../components/combo';
import Footer from '../components/footer';
const Healthprogram = () => {

   
    const healthServices = [
        {
          image: 'https://i.pinimg.com/564x/47/19/fe/4719fe4a4610a08a32bceafe3bb2978e.jpg',
          titles: 'Hospital affiliation',
          button: 'Read More',
          information: 'Hospital Affiliation',
          route: 'healthprogram/hospitalAffiliation/detail'
        },
           
        {
              image: 'https://i.pinimg.com/564x/16/51/c5/1651c5878b43eb3b74fb40f8f35d7832.jpg',
              titles: 'Senior Citizen Health Care',
              button: 'Read More',
              information: 'Senior Citizen health care',
              route: 'healthprogram/seniorCitizenHealthCare/detail'
         },
        {
              image: 'https://i.pinimg.com/564x/55/60/0b/55600b67282c887bc0cf6beb39d29f5a.jpg',
              titles: 'सुत्केरी पोषण',
              button: 'Read More',
              information: 'sutkeri poshan',
              route: 'healthprogram/femaleNutrition/detail'
        },
        {
                image: 'https://i.pinimg.com/736x/75/e4/53/75e45319295bb6eda27f5b4b1efde708.jpg',
                titles: 'जीवन बरदान कार्यक्रम',
                button: 'Read More',
                information: 'जीवन बरदान कार्यक्रम',
                route: 'healthprogram/lifeBlessingProgram/detail'
        },
    ]
  return (

    <div>
      <Combo/>
        <Healthprogramc healthServices={healthServices}/>
        <Footer/>
    </div>
  
  )
}

export default Healthprogram
