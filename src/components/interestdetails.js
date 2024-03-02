// InterestRateComponent.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
const InterestRateComponent = () => {
  const [selectedTab, setSelectedTab] = useState('intdet31');
  const [t] = useTranslation("global")
  // Static data for each tab
  const tabData = {
    intdet31: [
      { product: 'intdet.message', percentage: 9.00 },
      { product: 'intdet2.message', percentage: 10.00 },
      { product: 'intdet3.message', percentage: 7.00 },
      { product: 'intdet4.message', percentage: 8.00 },
      { product: 'intdet5.message', percentage: 8.50 },
      { product: 'intdet6.message', percentage: 11.00 },
      { product: 'intdet7.message', percentage: 8.50 },
      { product: 'intdet8.message', percentage: 10.50 },
    ],
    intdet32: [
      { product: 'intdet9.message', percentage: 7.00 },
      { product: 'intdet10.message', percentage: 6.00 },
      { product: 'intdet11.message', percentage: 5.00 },
    ],
    intdet33: [
      { product: 'intdet12.message', percentage: 6.00 },
      { product: 'intdet13.message', percentage: 8.50 },
      { product: 'intdet14.message', percentage: 10.00 },
      { product: 'intdet15.message', percentage: 10.50 },
      { product: 'intdet15.message', percentage: 11.00 },
      
    ],
    intdet34: [
      { product: 'intdet16.message', percentage: 15.00 },
      { product: 'intdet17.message', percentage: 16.00 },
      { product: 'intdet18.message', percentage: 13.00 },
      { product: 'intdet19.message', percentage: 15.00 },
      { product: 'intdet20.message', percentage: 16.00 },
      { product: 'intdet22.message', percentage: 16.00 },
      { product: 'intdet23.message', percentage: 16.00 },
      { product: 'intdet24.message', percentage: 16.00 },
      { product: 'intdet25.message', percentage: 15.00 },
      { product: 'intdet26.message', percentage: 15.50 },
      { product: 'intdet27.message', percentage: 15.50 },
      { product: 'intdet28.message', percentage: 15.50 },
      { product: 'intdet21.message', percentage: 15.50 },
    ],
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderTable = () => {
    // Retrieve data based on the selected tab
    const data = tabData[selectedTab];

    return (
      <table className="w-full mt-8 bg-white select-none">
        <thead>
          <tr>
            <th className="py-2 "> {t("intdet29.message")}</th>
            <th className="py-2 ">{t("intdet30.message")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{t(item.product)}</td>
              <td className="px-4 py-2 border">{item.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container px-8 mx-auto mt-8 md:px-24 max-w-screen-2xl">
      <div className="flex items-center mb-4">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            className={` mr-1 md:mr-4 p-1 md:p-2 ${selectedTab === tab ? 'bg-green-800 text-white' : 'bg-gray-300'}`}
            onClick={() => handleTabChange(tab)}
          >
          
            {t(`${tab}.message`)}
          </button>
        ))}
      </div>

      <div className="mb-8">
      <h2 className="mb-4 text-xl font-bold">{t(`${selectedTab}.message`)} {t("intdet35.message")}</h2>
        {renderTable()}
      </div>
    </div>
  );
};

export default InterestRateComponent;
