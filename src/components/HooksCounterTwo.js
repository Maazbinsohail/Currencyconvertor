import React, { useState } from "react";

const HooksCounterTwo = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div className="mt-5 ">
      <form>
        <input className="border-4 border-green-900 border-solid
    bg-green-400 w-half h-12"
          type="text"
          value={name.firstName}
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value });
          }}
        />
        <input
        className="border-4 border-green-900 border-solid
    bg-green-400 w-half h-12"
          type="text"
          value={name.lastName}
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value });
          }}
        />
        <h2>Your first name is {name.firstName}</h2>
        <h2>Your last name is {name.lastName}</h2>
      </form>
    </div>
  );
};

export default HooksCounterTwo;
