import React from 'react'
import { Link } from 'react-router-dom';

// ChildComponent that receives title and description as props
const ChildComponent = ({ title, description}) => {
        return (
            <div className='absolute left-0 flex flex-col h-full mx-8 text-white md:mx-20 md:top-52 top-8 '>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='mt-2 md:mt-4 '>{description}</p>
            </div>
        )
}

const LoanCard = ({ image, titles, button, information , route}) => {
    return (
      <div className="flex flex-col items-center justify-center p-6 m-4 bg-white rounded-lg shadow-lg">
              <Link to={`/${route}`}> {/* Use Link component with route */}
        <img src={image} alt={titles} className="w-32 h-32 mb-4 transition-transform duration-300 rounded-full transform-gpu hover:scale-110 " />
        <p className="text-lg font-semibold text-gray-600">{information}</p>
        <p className="text-lg font-extralight text-primary">{button}</p>
      </Link>
      </div>
    );
  };

// ParentComponent where title and description are defined
const Healthprogramc = ( {healthServices}) => {
  
    const title = 'Health Program';
    const description = 'Gausahar बचत तथा ऋण सहकारी संस्था लिमिटेडका शेयर सदस्य तथा कर्मचारीलाई बिरामी तथा आकस्मिक दुर्घटना कारणबाट पर्न सक्ने आर्थिक समस्यामा सहयोग गर्ने उद्देश्यले जीवन बरदान कार्यक्रम अगाडि बढाएको छ ।संस्थाको तर्फबाट राहतस्वरुप उपचारका लागि सदस्यको स्वास्थ्यको अवस्थाल हेरेर आंशिक तथा पूर्णरुपमा सहयोग उपलब्ध गराई परिवारको आर्थिक बोझलाई कम गर्ने उद्देश्य राखेर जीवन बरदान कार्यक्रम संचालन गरिएको हो ।यस कार्यक्रम अन्तर्गत संस्थाले स्वास्थ्य उपचार तथा शल्यक्रिया, होम केयर सिनियर सिटीजन हेल्थ केयर, नियमित औषधि सेवन, सुत्केरी पोषणका साथै स्वास्थ्य परीक्षण सहितको सेवा सुविधा उपलब्ध गराउँदै आएको छ ।'
   

  return (
         <div className='mx-auto max-w-screen-2xl'>

    <div className='relative'>
         
         
            <img 
            src='https://i.pinimg.com/564x/fb/40/ce/fb40cea2abf11d00e8adc332be1ee77a.jpg' 
            alt='Health Program' 
            className='object-cover w-full h-200 '/>
            
            <div className='absolute top-0 left-0 w-full h-full '>
        <ChildComponent title={title} description={description}  />
        </div>
           
    </div>

    <div>
        <div className='mx-8 mt-8 text-2xl font-bold md:mx-20'>Health Services</div>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {healthServices.map((health, index) => (
          <LoanCard
            key={index}
            image={health.image}
            title={health.title}
            information={health.information}
            button= {health.button}
            route={health.route}  // pass route as prop
          />
        ))}
      </div>
        
    </div>

    </div>
  )
}

export default Healthprogramc
