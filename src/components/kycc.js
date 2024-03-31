import React from "react";

const Kycc = () => {
  return (
    <div className="mx-auto px-7 max-w-screen-2xl md:px-8">
      <div className="flex flex-col ">
        <form className="p-2 mt-4 border ">
          <div className="flex mt-4 ">
            <div className="flex flex-col mr-1">
              <div className="text-center text-white rounded-lg bg-secondary">
                1
              </div>
              <div className="w-12 mt-2 truncate ">Personal Details</div>
            </div>
            <div className="flex flex-col mr-1">
              <div className="text-center text-white rounded-lg bg-secondary">
                2
              </div>
              <div className="w-12 mt-2 truncate ">Address</div>
            </div>
            <div className="flex flex-col mr-1 ">
              <div className="text-center text-white rounded-lg bg-secondary">
                3
              </div>
              <div className="w-12 mt-2 truncate">Family Description</div>
            </div>
            <div className="flex flex-col mr-1">
              <div className="text-center text-white rounded-lg bg-secondary">
                4
              </div>
              <div className="w-12 mt-2 truncate">
                Yearly Income/expense Details
              </div>
            </div>
            <div className="flex flex-col mr-1">
              <div className="text-center text-white rounded-lg bg-secondary">
                5
              </div>
              <div className="w-12 mt-2 truncate ">House Details</div>
            </div>
            <div className="flex flex-col ">
              <div className="text-center text-white rounded-lg bg-secondary">
                6
              </div>
              <div className="w-12 mt-2 truncate">Done</div>
            </div>
          </div>

          <div className="mt-4">
            <div>First Name</div>
            <input
              type="text"
              id="name"
              className="w-full mt-1 border rounded-md "
              required
            />
          </div>

          <div className="mt-4">
            <div>Middle Name(optional)</div>
            <input
              type="text"
              id="name"
              className="w-full mt-1 border rounded-sm"
            />
          </div>

          <div className="mt-4 ">
            <div>Last Name</div>
            <input
              type="text"
              id="name"
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
                value="male"
                className="mt-2 mr-2"
              />
              <label for="html" className="mr-4 ">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mt-2 mr-2 "
              />
              <label for="css">Female</label>
            </div>
          </div>

          <div className="mt-4 ">Marital Status</div>
          <select className="w-full px-2 py-1 mt-2 border ">

            <option> Select </option>
            <option> Married </option>
            <option> Single </option>
            <option> Widow </option>
            <option> Divorced </option>
          </select>

          <div className="mt-4 ">Family Status</div>
          <select className="w-full px-2 py-1 mt-2 border">
            <option> Select </option>
            <option> High </option>
            <option> Medium </option>
            <option> Poor </option>
            <option> Rich </option>
          </select>

          <div className="mt-4 ">Education</div>
          <select className="w-full px-2 py-1 mt-2 border ">
            <option> Select </option>
          </select>

          <div className="mt-4 ">Cast</div>
          <select className="w-full px-2 py-1 mt-2 border ">
            <option> Select </option>
          </select>

          <div className="mt-4 ">Religion</div>
          <select className="w-full px-2 py-1 mt-2 border ">
            <option> Select </option>
          </select>

          <div className="mt-4 ">Occupation</div>
          <select className="w-full px-2 py-1 mt-2 border ">
            <option> select </option>
          </select>

          <div className="mt-4 ">House Type</div>
          <select className="w-full px-2 py-1 mt-2 border">
            <option> Select </option>
          </select>

          <div className="mt-4 ">Roof Type</div>
          <select className="w-full px-2 py-1 mt-2 border ">
            <option> Select </option>
          </select>

          <div className="mt-4 ">Family No</div>
          <input
            type="number"
            id="number"
            name="familyno"
            value="number"
            className="w-full mt-2 mr-1 border rounded-sm "
          />

          <div className="mt-4 ">Date of Birth</div>
          <input type="date" id="date" name="dob" value="date" className="w-full mt-1 border rounded-sm" />

          <div className="mt-4 ">Citizenship Number</div>
          <input
            type="number"
            id="number"
            name="citizenshipno"
            value="number"
            className="w-full mt-2 mr-1 border rounded-sm"
          />

          <div className="mt-4 ">Issued From</div>
          <select className="w-full px-2 py-1 mt-2 border ">
            <option> Select </option>
          </select>

          <div className="mt-4 ">Issued Date</div>
          <input
            type="date"
            id="date"
            name="dob"
            value="date"
            className="w-full mt-1 rounded-sm"
          />

          <div className="mt-4 ">Risk Category</div>
          <input
            type="text"
            id="Risk Category"
            name="risk category"
            className="w-full mt-2 mr-1 border rounded-sm"
          />

          <div className="mt-4 "> Yearly Txn. Number(Approx.)*</div>
          <input
            type="text"
            id="Yearly Txn. Number"
            name="Tax number"
            className="w-full mt-2 mr-1 border rounded-sm"
          />

          <div className="flex flex-col items-end">
            <button
              type="submit"
              className="px-2 mt-4 text-white border rounded-md bg-primary"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kycc;
