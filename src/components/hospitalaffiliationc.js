import React from "react";
import { MdDateRange } from "react-icons/md";

const Hospitalaffiliationc = ({title, subtopics}) => {
  return (
    <div className="mx-auto max-w-screen-2xl md:mx-8">
      <div>
        <div>
          <div>
            <img
              src="https://i.pinimg.com/originals/b8/23/e3/b823e38cc01fdb9278b6f7faa2feda6d.gif"
              alt="hospital"
              className="w-full"
            />
          </div>

          <div className="px-6 mt-6 md:px-0">
                  <p>1. B& C Hospital</p>
                  <p>2. Purwanchal Cancer Hospital</p>
                  <p>3. Manmohan Hospital</p> 
                  <p>4. Birtacity Hospital</p>
                  <p>5. Kankai Hospital</p>
                  <p>6. Om Sai Pathibara - Bhadrapur</p>
                  <p>7. Om Mechi Hospital - Damak</p>
                  <p>8. Amda Hospital - Damak</p>
                  <p>9. Lifeline Hospital - Damak</p>
                  <p>10. Nobel Hospital Biratnagar</p>
                  <p>11. Birat Nursing Hospital - Biratnagar</p>
                  <p>12. Birat Medical Teaching Hospital - Biratnagar</p>
                  <p>13. Mechi Eye Hospital-SainikMod</p>
                  <p>14. Dristi eye Hospital - SainikMod</p>
                  <p>15. Biratmod Eye Hospital</p>
                  <p>16. Mechi Netralaya Eye Hospital- Kakarvitta</p>

                  <h1 className="mt-4 font-semibold"> Inside KTM Valley</h1>
                  <p>1.Annapurna Neurological Institute of Allied Science</p>
                  <p>2.Nepal Mediciti Hospital</p>
                  <p>3.HAMS Hospital</p>
                  <p>4.Norvic International Hospital</p>
                  <p>5.Grande International Hospital</p>
                  <p>6.B & B Hospital</p>
                  <p>7.Nepal Cancer Hospital & Research Center(NCHRC)</p>
                  <p>8.T.U Teaching Hospital</p>
                  <p>9.Kathmandu medical College (KMC)</p>
                  <p>10.Bir Hospital</p>
                  <p>11.Maanmohan Cardiothoracic Vascular and transplant center</p>
          </div>
        </div>

        <div>
        <div className="w-full p-4 px-6 bg-gray-100 rounded-lg shadow-md md:mt-4 md:p-8">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      {subtopics.map((subtopic, index) => (
        <div key={index} className="flex items-center mb-2">
            <div className='flex flex-col'>
            <div className='text-sm'>{subtopic.text}</div>
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
};

export default Hospitalaffiliationc;
