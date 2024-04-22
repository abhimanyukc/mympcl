import React from 'react'
import { MdDateRange } from 'react-icons/md';

const LifeBlessingProgramComponent = ({ title, subtopics }) => {
  return (
    <div className="mx-auto max-w-screen-2xl md:mx-20">
      <div>
        <div>
          <div>
            <img
              src="https://i.pinimg.com/564x/3c/e9/cd/3ce9cd179cf2b029bddb5c31158e6cde.jpg"
              alt="hospital"
              className="w-full"
            />
          </div>

          <div className="px-6 mt-6 md:px-0">
            <h1 className="mt-4 text-3xl font-semibold"> जीवन बरदान कार्यक्रम</h1>
            <p className="mt-2">
              <p>
              सदस्य वा कर्मचारी बिरामी भई उपचार तथा शल्यक्रिया गराउनु पर्ने अवस्था आएमा शल्यक्रियामा लाग्ने कुल खर्चको ९०% र उपचारमा लाग्ने खर्चको ८०% प्रतिशत रकम अस्पताल भर्ना भएदेखि डिस्चार्ज हुने समयसम्मको खर्च सोझै अस्पताललाई भुक्तानी गरि सेवा उपलब्ध गराउंदै आएको छ ।
              </p>
 
              <p>
             साथै शल्यक्रिया गराएको सदस्यलाई संस्थाले थप सेवाका लागि सहायक कार्यक्रम स्वास्थ्य हेरचाह (HOME CARE) कार्यक्रम अन्तर्गत घरैमा गई सुगर प्रेसर चेकजाँच सहित ड्रेसिङ्ग, घाउ सफा र साना साना टाँका काट्ने सहितको सेवा उपलब्ध गराउँदै आईरहेको छ । यसैगरी दीर्घरोगी भई नियमित सेवन गर्नेलाई औषधि,  सुगर, प्रेसर, थाईराईड, कोलाईटिस, मुटु मृगौला दम छारेरोग र यूरिकएसिड जस्ता १० वटा रोगको मासिक रुपमा लाग्ने औषधि लाग्ने खर्च रकमको ५०% सम्म संस्थाले उपलब्ध गराउंदै आएको छ । 
             </p>

            </p>
          </div>
        </div>

        <div>
          <div className="w-full p-4 px-6 bg-gray-100 rounded-lg shadow-md md:mt-4 md:p-8">
            <h2 className="mb-4 text-xl font-semibold">{title}</h2>
            {subtopics.map((subtopic, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="flex flex-col">
                  <div className="text-sm">{subtopic.text}</div>
                  <div className="flex items-center">
                    {/* Using MdDateRange icon component */}
                    <MdDateRange className="w-6 h-6 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm">{subtopic.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeBlessingProgramComponent