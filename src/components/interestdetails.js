// InterestRateComponent.js
import React, { useState } from 'react';

const InterestRateComponent = () => {
  const [selectedTab, setSelectedTab] = useState('saving');

  // Static data for each tab
  const tabData = {
    saving: [
      { product: 'PERIODIC MONTHLY SAVING', percentage: 9.00 },
      { product: 'NARIBACHAT SAVING', percentage: 10.00 },
      { product: 'PERIODIC SAVING-3 MONTH', percentage: 7.00 },
      { product: 'PERIODIC SAVING-6 MONTH', percentage: 8.00 },
      { product: 'PERIODIC SAVING-1 YRS', percentage: 8.50 },
      { product: 'NAWA KOPILA SAVING 16 YRS', percentage: 11.00 },
      { product: 'SENIOR CITIZEN SAVING', percentage: 8.50 },
      { product: 'REMITANCE SAVING 1YRS', percentage: 10.50 },
    ],
    current: [
      { product: 'GAUSAHAR  BUSINESS PLUS BACHAT', percentage: 7.00 },
      { product: 'GAUSAHAR SUPER SAVING', percentage: 6.00 },
      { product: 'ATM SAVING', percentage: 5.00 },
    ],
    products: [
      { product: 'SPECIAL PERIODIC SAVING 3 MONTH', percentage: 6.00 },
      { product: 'SPECIAL PERIODIC SAVING 6 MONTH', percentage: 8.50 },
      { product: 'SPECIAL PERIODIC SAVING 1yrs', percentage: 10.00 },
      { product: 'SPECIAL PERIODIC SAVING 2YRS', percentage: 10.50 },
      { product: 'SPECIAL PERIODIC SAVING 3YRS', percentage: 11.00 },
      
    ],
    loan: [
      { product: 'Agriculture Loan', percentage: 15.00 },
      { product: 'Business Loan', percentage: 16.00 },
      { product: 'Emergency Loan', percentage: 13.00 },
      { product: 'Educational Loan', percentage: 15.00 },
      { product: 'Foriegn Employment Loan', percentage: 16.00 },
      { product: 'Hire Purchase Loan', percentage: 16.00 },
      { product: 'Home Loan', percentage: 16.00 },
      { product: 'Land Purchase Loan', percentage: 16.00 },
      { product: 'Livestock Loan', percentage: 15.00 },
      { product: 'Miscellaneous Loan', percentage: 15.50 },
      { product: 'Poultry Farm Loan', percentage: 15.50 },
      { product: 'Tailoring Loan', percentage: 15.50 },
      { product: 'Professional Loan', percentage: 15.50 },
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
            <th className="py-2 ">Product</th>
            <th className="py-2 ">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{item.product}</td>
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
            {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize the first letter */}
          </button>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">{selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Details</h2>
        {renderTable()}
      </div>
    </div>
  );
};

export default InterestRateComponent;
