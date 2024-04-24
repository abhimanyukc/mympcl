import React from "react";
import { MdDateRange } from 'react-icons/md'; // Importing MdDateRange icon from react-icons

const FemaleNutritionComponent = ({ title, subtopics }) => {
  return (
    <div className="mx-auto max-w-screen-2xl md:mx-8">
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
            <h1 className="mt-4 text-3xl font-semibold"> सुत्केरी पोषण</h1>
            <p className="mt-2">
              {/* Content */}
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
};

export default FemaleNutritionComponent;
