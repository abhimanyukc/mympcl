import React, { useState } from "react";
import classNames from "classnames";
const Kycc = () => {


   

  const [currentTab, setCurrentTab] = useState(1);
   // Define tab names dynamically
   const tabNames = [
    { tab: 1, name: "Personal Details" },
    { tab: 2, name: "Address Details" },
    { tab: 3, name: "Family Descriptions" },
    { tab: 4, name: "Yearly Income/Expense Details" },
    { tab: 5, name: "House Details" },
    { tab: 6, name: "Done" }
  ];

  //state variable to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    familyStatus: "",
    education: "",
    cast: "",
    religion: "",
    occupation: "",
    houseType: "",
    roofType: "",
    familyNo: "",
    dob: "",
    citizenshipNo: "",
    issuedFrom: "",
    issuedDate: "",
    yearlyTxnNumber: "",
    permanentAddress: "",
    oldAddress: "",
    ruralMunicipality: "",
    district: "",
    province: "",
    wardNo: "",
    tole: "",
    noOfRoom: "",
    familyMember: "",
    relationship: "",
    mobileNo: "",
    incomeHead: "",
    yearlyIncomeAmount: "",
    expenseHead: "",
    roomCost:"",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // console.log("Input changed:", id, value); // Add logging
    setFormData({
      ...formData,
      [id]: value
    });
    // console.log("Updated formData:", formData); // Add logging
  };
  



  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Check if all required fields in current tab are filled
    switch (currentTab) {
        case 1:
            if (!formData.firstName || !formData.lastName   || !formData.education   || !formData.occupation    || !formData.dob || !formData.citizenshipNo  ) {
                alert("Please fill in all required fields in Personal Details tab.");
                return   setCurrentTab(1);
            }
            break;
        case 2:
            if ( !formData.ruralMunicipality || !formData.district || !formData.province || !formData.wardNo || !formData.tole) {
                alert("Please fill in all required fields in Address Details tab.");
                return  setCurrentTab(2);
            }
            break;
        case 3:
            if (!formData.familyMember || !formData.relationship || !formData.dob || !formData.citizenshipNo || !formData.issuedFrom || !formData.issuedDate || !formData.mobileNo) {
                alert("Please fill in all required fields in Family Descriptions tab.");
                return setCurrentTab(3);
            }
            break;
        case 4:
            if (!formData.incomeHead || !formData.yearlyIncomeAmount || !formData.expenseHead || !formData.expenseAmount) {
                alert("Please fill in all required fields in Yearly Income/Expense Details tab.");
                return setCurrentTab(4);
            }
            break;
        case 5:
            if (!formData.houseType || !formData.noOfHouse || !formData.roofType || !formData.noOfRoom || !formData.roomCost) {
                alert("Please fill in all required fields in House Details tab.");
                return setCurrentTab(5);
            }
            break;
        default:
            break;
    }
  
    // Move to the next tab or submit the form if it's the last tab
    setCurrentTab(currentTab + 1);
    if (currentTab === 6) {
        setIsSubmitted(true);
    }
  };



  // Function to handle form reset
  const handleFormReset = () => {
    setFormData({
      // Reset all form fields to empty strings
      firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    maritalStatus: "",
    familyStatus: "",
    education: "",
    cast: "",
    religion: "",
    occupation: "",
    houseType: "",
    roofType: "",
    familyNo: "",
    dob: "",
    citizenshipNo: "",
    issuedFrom: "",
    issuedDate: "",
    yearlyTxnNumber: "",
    permanentAddress: "",
    oldAddress: "",
    ruralMunicipality: "",
    district: "",
    province: "",
    wardNo: "",
    tole: "",
    noOfRoom: "",
    familyMember: "",
    relationship: "",
    mobileNo: "",
    incomeHead: "",
    yearlyIncomeAmount: "",
    expenseHead: "",
    roomCost:"",
      
    });
  };

  const handleFormBack = (e) => {
    e.preventDefault();
    setCurrentTab(currentTab - 1);
  };

  const setActiveTab = (tabNumber) => {
    setCurrentTab(tabNumber);
  };
  return (
    <div className="px-1 mx-auto max-w-screen-2xl md:px-8">
      <div className="flex flex-col ">
        <form className="p-2 mt-4 border" onSubmit={handleFormSubmit}   >
        <div className="flex mt-4">
            {tabNames.map((tabItem) => (
              <div
                key={tabItem.tab}
                className={`flex flex-col mr-1 ${
                  currentTab === tabItem.tab ? " bg-gray-100  text-green-500" : ""
                }`}
                onClick={() => setActiveTab(tabItem.tab)}
              >
                <div className="flex items-start text-center rounded-lg md:ml-4">{tabItem.tab}</div>
                <div className="w-12 mt-2 truncate md:w-40 md:mr-4">{tabItem.name}</div>
              </div>
            ))}
          </div>
 
               {/* Render tab content based on currentTab */}
          {currentTab === 1 && (
            <Tab1 formData={formData} handleInputChange={handleInputChange} />
          )}
          {currentTab === 2 && (
            <Tab2 formData={formData} handleInputChange={handleInputChange} />
          )}
           {currentTab === 3 && (
            <Tab3 formData={formData} handleInputChange={handleInputChange} />
          )}
          {currentTab === 4 && (
            <Tab4 formData={formData} handleInputChange={handleInputChange} />
          )}
           {currentTab === 5 && (
            <Tab5 formData={formData} handleInputChange={handleInputChange} />
          )}
          {currentTab === 6 && (
            <Tab6 formData={formData} handleInputChange={handleInputChange} />
          )}

                
        </form>
         {/* Back button */}

         {/* Condition for Tab 1 */}
      {currentTab === 1 && (
        <div className="flex items-end justify-end">
          <button
            type="submit"
            className="px-2 mt-4 text-white border rounded-md bg-primary"
            onClick={handleFormSubmit}
          >
            Next
          </button>
        </div>
      )}

      {/* Condition for Tab 2, 3, 4, 5 */}
      {currentTab > 1 && currentTab < 6 && (
        <div className="flex items-end justify-end">
          <button onClick={handleFormBack} className="mr-4">
            Back
          </button>
          <button
            type="submit"
            className="px-2 mt-4 text-white border rounded-md bg-primary"
            onClick={handleFormSubmit}
          >
            Next
          </button>
        </div>
      )}

      {/* Condition for Tab 6 */}
      {currentTab === 6 && (
        <div className="flex items-end justify-end">
          <button onClick={handleFormBack} className="mr-4">
            Back
          </button>
          <button
            type="submit"
            className="px-2 mt-4 text-white border rounded-md bg-primary"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
          <button
            type="reset"
            className="px-2 mt-4 ml-4 text-white bg-red-600 border rounded-md"
           onClick={handleFormReset}
        >
            Reset
          </button>
        </div>
      )}
      </div>
      {/* Conditionally render popup message */}
      {isSubmitted && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-700 bg-opacity-50">
          <div className="p-4 bg-white rounded shadow-lg">
            <p className="text-lg font-semibold">KYC Form Submitted!</p>
            <p>Your KYC form has been successfully submitted.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 mt-4 text-white rounded bg-primary hover:bg-primary-dark"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

          // Tab 1 Component
      const Tab1 = ({ formData, handleInputChange }) => {
    return (
            <>
              <div>
                <div className="mt-4">
                  <div>First Name</div>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full mt-1 border rounded-md"
                    required
                  />
                </div>

                <div className="mt-4">
                  <div>Middle Name(optional)</div>
                  <input
                    type="text"
                    id="middleName"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    className="w-full mt-1 border rounded-sm"
                  />
                </div>

                <div className="mt-4 ">
                  <div>Last Name</div>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full mt-1 border rounded-sm"
                    required
                  />
                </div>

                <div className="mt-4 ">
                  <div>Gender</div>
                  <div className="">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="mt-2 mr-2"
                    />
                    <label for="html" className="mr-4 ">
                      Male
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="mt-2 mr-2 "
                    />
                    <label for="css">Female</label>
                  </div>
                </div>

                <div className="mt-4 ">Marital Status</div>
                <select
                  className="w-full px-2 py-1 mt-2 border "
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                >
                  <option> Select </option>
                  <option> Single </option>
                  <option> Widow </option>
                  <option>Married</option>
                  <option> Divorced </option>
                </select>

                <div className="mt-4 ">Family Status</div>
                <select
                  className="w-full px-2 py-1 mt-2 border"
                  id="familyStatus"
                  name="familyStatus"
                  value={formData.familyStatus}
                  onChange={handleInputChange}
                >
                  <option> Select </option>
                  <option> Rich </option>
                  <option> Medium </option>
                  <option> Poor </option>
                </select>

                <div className="mt-4 ">Education</div>
                <select
                  className="w-full px-2 py-1 mt-2 border "
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                >
                  <option> Select </option>
                  <option>secondary level</option>
                  <option>Intermediate level/diploma</option>
                  <option>Pre Graduate degree</option>
                  <option>Post Graduate degree</option>
                </select>

                <div className="mt-4 ">Cast</div>
                <select className="w-full px-2 py-1 mt-2 border "
                 id="cast"
                 name="cast"
                 value={formData.cast}
                 onChange={handleInputChange}
                 >
                  <option> Select </option>
                  <option>Chettri</option>
                  <option>Magar</option>
                  <option>Gurung</option>
                  <option>Limbu</option>
                  <option>Bown</option>
                  <option>Gurung</option>
                  <option>Shah</option>
                  <option>Rai</option>
                </select>

                <div className="mt-4 ">Religion</div>
                <select className="w-full px-2 py-1 mt-2 border " 
                id="religion"
                name="religion"
                   value={formData.religion}
                   onChange={handleInputChange}
                >
                  <option> Select </option>
                  <option>Hindu</option>
                  <option>Christian</option>
                  <option>Muslim</option>
                </select>

                <div className="mt-4 ">Occupation</div>
                <select
                  className="w-full px-2 py-1 mt-2 border "
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                >
                  <option> Select </option>
                  <option>Sotware Engineer</option>
                  <option>Enterpreneur </option>
                  <option>Cyber Security</option>
                  <option>Data analyst</option>
                  <option>Devops Engineer</option>
                </select>

                <div className="mt-4 ">House Type</div>
                <select className="w-full px-2 py-1 mt-2 border" 
                id="houseType"  
                name="houseType"
                 value={formData.houseType}
                 onChange={handleInputChange}
                 >
                  <option> Select </option>
                  <option>Bungalows</option>
                  <option>Appartment</option>
                  <option>Villa</option>
                  <option>FarmHouses</option>
                  <option>Duplex House</option>
                </select>

                <div className="mt-4 ">Roof Type</div>
                <select className="w-full px-2 py-1 mt-2 border "
                 id="roofType"
                name="roofType"
                 value={formData.roofType}
                 onChange={handleInputChange}
                >
                  <option> Select </option>
                  <option>Flat roof</option>
                  <option>Mansard roof</option>'<option>Metal roof</option>
                  <option>Gable</option>
                  <option>Pyramit roof</option>
                  <option>Wood roofing</option>
                  <option>Gable</option>
                </select>

                <div className="mt-4 ">Family No</div>

                <input
                  type="number"
                  id="familyNo"
                  value={formData.familyNo}
                  onChange={handleInputChange}
                  name="familyNo"
                  pattern="[0-9]+"
                  title="Please enter a valid number"
                  className="w-full mt-2 mr-1 text-black border rounded-sm"
                />

                <div className="mt-4 ">Date of Birth</div>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full mt-1 border rounded-sm"
                />

                <div className="mt-4">Citizenship Number</div>
                <input
                  type="number"
                  id="citizenshipNo"
                  name="citizenshipNo"
                  value={formData.citizenshipNo}
                  onChange={handleInputChange}
                  pattern="[0-9]+"
                  className="w-full mt-2 mr-1 text-black border rounded-sm"
                />

                <div className="mt-4 ">Issued From</div>
                <select
                  className="w-full px-2 py-1 mt-2 border "
                  id="issuedFrom"
                  name="issuedFrom"
                  value={formData.issuedFrom}
                  onChange={handleInputChange}
                >
                  <option> Select </option>
                  <option>Pokhara </option>
                  <option>Kathmandu</option>
                  <option>Chitwan</option>
                  <option>Butwal</option>
                  <option>Dharan</option>
                </select>

                <div className="mt-4 ">Issued Date</div>
                <input
                  type="date"
                  id="issuedDate"
                  name="issuedDate"
                  value={formData.issuedDate}
                  onChange={handleInputChange}
                  className="w-full mt-1 rounded-sm"
                />

                <div className="mt-4 "> Yearly Txn. Number(Approx.)*</div>
                <input
                  type="number"
                  id="yearlyTxnNumber"
                  name="yearlyTxnNumber"
                  value={formData.yearlyTxnNumber}
                  onChange={handleInputChange}
                  className="w-full mt-2 mr-1 text-black border rounded-sm"
                />

              </div>
            </>
          );
        };

        // Tab 2 Component
        const Tab2 = ({ formData, handleInputChange }) => {
         const [isSelected, setIsSelected] = useState(true);
         
            return (
            <>
              <div>
                 {/* Render input fields using formData */}
                <div className="flex mt-4 ">
                  <div>Permanent Address</div>
                  <div>Old Address</div>
                  <div className="flex ml-2 ">
                    <div
                      onClick={() => setIsSelected(!isSelected)}
                      className={classNames(
                        "flex w-16 h-6 bg-gray-600  mt-1  rounded-full transition-all duration-500",
                        {
                          "bg-secondary": isSelected,
                        }
                      )}
                    >
                      <span
                        className={classNames(
                          "w-5 h-6 transition-all duration-500 bg-white rounded-full shadow-lg",
                          {
                            "ml-10": isSelected,
                          }
                        )}
                      />
                    </div>
                    <div className="ml-2 ">New Address</div>
                  </div>
                </div>

                <div className="mt-4">Rural/Municipality</div>
                <select className="w-full px-2 py-1 mt-2 border"
                 id="ruralMunicipality" 
                 name="ruralMunicipality"
                  value={formData.ruralMunicipality}
                  onChange={handleInputChange} >
                  <option> Select </option>
                  <option>Pokhara</option>
                  <option>Kathmandu</option>
                </select>

                <div className="mt-4 ">District</div>
                <select className="w-full px-2 py-1 mt-2 border"
                 id="district" 
                 name="district"
                  value={formData.district}
                  onChange={handleInputChange}>
                  <option> Select </option>
                  <option>Kaski</option>
                  <option>jumla</option>
                  <option>humla</option>
                </select>

                <div className="mt-4 ">Province</div>
                <select className="w-full px-2 py-1 mt-2 border"  
                value={formData.province} 
                id="province"
                name="province"
                  onChange={handleInputChange}>
                  <option> Select </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </select>

                <div className="mt-4 ">Ward No</div>

                <input
                  type="text"
                  id="wardNo"
                  name="wardNo"
                  className="w-full mt-1 border rounded-md "
                  value={formData.wardNo}
                  onChange={handleInputChange}
                  required
                />

                <div className="mt-4 ">Tole</div>
                <input
                  type="text"
                  id="tole"
                  name="tole"
                  className="w-full mt-1 border rounded-md "
                  value={formData.tole}
                  onChange={handleInputChange}
                  required
                />

              
              </div>
            </>
          );
        };

       // Tab 3 Component
const Tab3 = ({ formData, handleInputChange }) => {
    return (
            <>
              <div>
                <div className="mt-4 ">
                  <div>Family Member Name</div>
                  <input
                    type="text"
                    id="familyMember"
                    value={formData.familyMember}
                    onChange={handleInputChange}
                    className="w-full mt-1 border rounded-md"
                    required
                  />
                </div>

                <div className="mt-4">
                  <div> Relationship</div>
                  <select className="w-full px-2 py-1 mt-2 border"  
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}>
                    <option>Select</option>
                    <option> Single </option>
                    <option> Married </option>
                    <option> Widow </option>
                    <option> Divorced </option>
                  </select>
                </div>

                <div>
                  <div>Date of Birth</div>
                  <input
                    type="date"
                    id="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    name="dob"
                    className="w-full mt-1 border rounded-sm"
                  />
                </div>

                <div className="mt-4">
                  <div>Citizenship No</div>
                  <input
                  type="number"
                  id="citizenshipNo"
                  value={formData.citizenshipNo}
                  onChange={handleInputChange}
                  name="citizenshipNo"
                  pattern="[0-9]+"
                  className="w-full mt-2 mr-1 text-black border rounded-sm"
                />
                </div>

                <div className="mt-4 ">
                  <div>Issued From</div>
                  <select className="w-full px-2 py-1 mt-2 border "  name="issuedFrom" id="issuedFrom" value={formData.issuedFrom}
                  onChange={handleInputChange}>
                    <option> Select </option>
                    <option> Kathmandu </option>
                    <option> Pokhara </option>
                    <option> Chitwan </option>
                    <option>Butwal </option>
                  </select>
                </div>

                <div>
                  <div>Issued Date</div>
                  <input
                    type="date"
                    id="issuedDate"
                    name="issuedDate"
                    className="w-full mt-1 border rounded-sm"
                    value={formData.issuedDate}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <div>Mobile No</div>
                  <input
                    type="number"
                    id="mobileNo"
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleInputChange}
                    className="w-full mt-2 mr-1 border rounded-sm"
                  />
                </div>

                <div className="flex flex-col items-end">
                  <button
                    type="submit"
                    className="p-1 px-2 mt-4 bg-white border border-green-800 rounded-md text-primary "
                  >
                    Add New
                  </button>
                </div>

              </div>
            </>
          )}

          // Tab 4 Component
const Tab4 = ({ formData, handleInputChange }) => {
   
    return (
            <>
              <div className="mt-4 ">
                <div>
                  <div>Income Head</div>
                  <input
                    type="text"
                    name="incomeHead"
                    id="incomeHead"
                    className="w-full mt-2 border rounded-md "
                    value={formData.incomeHead}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <div> Yearly Income Amount</div>
                  <input
                    type="number"
                    id="yearlyIncomeAmount"
                    name="yearlyIncomeAmount"
                    value={formData.yearlyIncomeAmount}
                    onChange={handleInputChange}
                    className="w-full mt-2 border rounded-md "
                    required
                  />
                </div>

                <div>
                  <div>Expense Head</div>
                  <input
                    type="text"
                    id="expenseHead"
                    name="expenseHead"
                    value={formData.expenseHead}
                    onChange={handleInputChange}
                    className="w-full mt-2 border rounded-md"
                    required
                  />
                </div>

                <div>
                  <div>Expense Amount</div>
                  <input
                    type="number"
                    id="expenseAmount"
                    name="expenseAmount"
                    value={formData.expenseAmount}
                    onChange={handleInputChange}
                    className="w-full mt-2 border rounded-md"
                    required
                  />
              
                </div>

              </div>
            </>
          )}

         // Tab 5 Component
const Tab5 = ({ formData, handleInputChange }) => {
   
    return (
            <>
              <div className="mt-4">
                <div>
                  <div>House Type</div>
                  <select className="w-full px-2 py-1 mt-2 border " 
                  id="houseType"
                  name="houseType"
                   value={formData.houseType}
                   onChange={handleInputChange}
                  >
                  <option> Select </option>
                  <option>Bungalows</option>
                  <option>Appartment</option>
                  <option>Villa</option>
                  <option>FarmHouses</option>
                  <option>Duplex House</option>
                  </select>
                </div>

                <div>
                  <div>No of House</div>
                  <input
                    type="number"
                    id="noOfHouse"
                    name="noOfHouse"
                    value={formData.noOfHouse}
                    onChange={handleInputChange}
                    className="w-full mt-1 border rounded-md "
                    required
                  />
                </div>

                <div>
                  <div> Roof of House</div>
                  <select className="w-full px-2 py-1 mt-2 border " 
                  id="roofType"
                  name="roofType"
                   value={formData.roofType}
                   onChange={handleInputChange}
                  >
                    <option> Select</option>
                  <option>Flat roof</option>
                  <option>Mansard roof</option>'<option>Metal roof</option>
                  <option>Gable</option>
                  <option>Pyramid roof</option>
                  <option>Wood roofing</option>
                  <option>Gable</option>
                  </select>
                </div>

                <div>
                  <div> No of Room</div>
                  <input
                    type="number"
                    id="noOfRoom"
                    name="noOfRoom"
                    value={formData.noOfRoom}
                    onChange={handleInputChange}
                    className="w-full mt-1 border rounded-md "
                    required
                  />
                </div>

                <div>
                  <div>Cost</div>
                  <input
                    type="number"
                    id="roomCost"
                    name="roomCost"
                    value={formData.roomCost}
                    onChange={handleInputChange}
                    className="w-full mt-2 border rounded-md"
                    required
                  />
                </div>
             
              </div>
            </>
          )}

         // Tab 6 Component
     const Tab6 = () => {
      
     return (
            <>
              <div className="mt-4 ">
                <div>You are now done</div>

            
              </div>
            </>
          )}


    
export default Kycc;
