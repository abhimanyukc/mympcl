import React, { useState } from "react";

const Kycc = () => {
//   const [dob, setDob] = useState("");

//   const handleDateChange = (e) => {
//     setDob(e.target.value);
//   };


  return (
    <div className="mx-auto px-7 max-w-screen-2xl md:px-8">
      <div className="flex flex-col ">
        <form className="p-2 mt-4 border">
          <div className="mt-4">Date of Birth</div>
          <input
            type="date"
            id="dob"
            name="dob"
            // value={dob}
            // onChange={handleDateChange}
            className="w-full mt-1 border rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default Kycc;
