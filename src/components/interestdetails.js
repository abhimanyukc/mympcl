// InterestRateComponent.js
import React, { useState } from 'react';

const InterestRateComponent = () => {
  const [selectedTab, setSelectedTab] = useState('saving');

  // Static data for each tab
  const tabData = {
    saving: [
      { product: 'Saving Product 1', percentage: 5 },
      { product: 'Saving Product 2', percentage: 7 },
    ],
    current: [
      { product: 'Current Product 1', percentage: 3 },
      { product: 'Current Product 2', percentage: 6 },
    ],
    products: [
      { product: 'Product 1', percentage: 8 },
      { product: 'Product 2', percentage: 10 },
    ],
    loan: [
      { product: 'Loan Product 1', percentage: 12 },
      { product: 'Loan Product 2', percentage: 15 },
    ],
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderTable = () => {
    // Retrieve data based on the selected tab
    const data = tabData[selectedTab];

    return (
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Percentage</th>
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
    <div className="container mx-auto mt-8 max-w-screen-2xl">
      <div className="flex mb-4">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            className={`mr-4 p-2 ${selectedTab === tab ? 'bg-green-800 text-white' : 'bg-gray-300'}`}
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
