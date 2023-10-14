import React, { useState } from 'react';
import "./styles.css";


const AgeCounter = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageDiff = currentDate - birthDate;
    const calculatedAge = Math.floor(ageDiff / 31557600000); // Approximately 31.556 million seconds in a year
    setAge(calculatedAge);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="dob">Date of Birth: </label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
};

export default AgeCounter;