import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    setFahrenheit((celsiusValue * 9/5) + 32);
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius((fahrenheitValue - 32) * 5/9);
  };

  return (
    <div>
      <TextField label="Celsius" value={celsius} onChange={handleCelsiusChange} />
      <TextField label="Fahrenheit" value={fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
};

export default TemperatureConverter;