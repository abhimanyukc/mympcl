handleInputChange}
                    className="w-full mt-2 border rounded-md "
                    required
                  />
                </div>

                <div>
                  <div> Yearly Expense Amount</div>
                  <input
                    type="number"
                    id="expenseAmount"
                    name="expenseAmount"
                    value={formData.expenseAmount}
                    onChange={handleInputChange}
                    className="w-full mt-2 border rounded-md "
                    required
                  />
                </div>
              </div>
            </>
          );
        };

        // Tab 5 Component
const Tab5 = ({ formData, handleInputChange }) => {
    return (
            <>
              <div>
                <div className="mt-4">
                  <div>House Type</div>
                  <select
                    className="w-full px-2 py-1 mt-2 border"
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

                <div className="mt-4">
                  <div>Number of Houses</div>
                  <input
                    type="number"
                    id="noOfHouse"
                    name="noOfHouse"
                    value={formData.noOfHouse}
                    onChange={handleInputChange}
                    className="w-full mt-1 border rounded-md"
                    required
                  />
                </div>

                <div className="mt-4">
                  <div>Roof Type</div>
                  <select
                    className="w-full px-2 py-1 mt-2 border"
                    id="roofType"
                    name="roofType"
                    value={formData.roofType}
                    onChange={handleInputChange}
                  >
                    <option> Select </option>
                    <option>Flat roof</option>
                    <option>Mansard roof</option>
                    <option>Metal roof</option>
                    <option>Gable</option>
                    <option>Pyramid roof</option>
                    <option>Wood roofing</option>
                  </select>
                </div>

                <div className="mt-4">
                  <div>Number of Rooms</div>
                  <input
                    type="number"
                    id="noOfRoom"
                    name="noOfRoom"
                    value={formData.noOfRoom}
                    onChange={handleInputChange}
                    className="w-full mt-1 border rounded-md"
                    required
                  />
                </div>

                <div className="mt-4">
                  <div>Room Cost</div>
                  <input
                    type="number"
                    id="roomCost"
                    name="roomCost"
                    value={formData.roomCost}
                    onChange={handleInputChange}
                    className="w-full mt-1 border rounded-md"
                    required
                  />
                </div>
              </div>
            </>
          );
        };

        // Tab 6 Component
const Tab6 = ({ formData }) => {
    return (
            <>
              <div className="mt-4">
                <p>Review your details before submitting.</p>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
              </div>
            </>
          );
        };

        export default Kycc;
