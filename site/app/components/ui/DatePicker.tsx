'use client'

import { useState } from 'react';
import Popover from './Popover'; // Import the Popover component

const DatePicker: React.FC = () => {
  const [date, setDate] = useState('');

  const calendarContent = (
    <div>
      {/* Custom calendar logic goes here */}
      <p>Calendar placeholder</p>
      <button onClick={() => setDate(new Date().toISOString().split('T')[0])}>Select Today</button>
    </div>
  );

  const inputField = (
    <input 
      type="text" 
      value={date}
      onChange={(e) => setDate(e.target.value)}
      placeholder="Select a date"
      className="border p-2 rounded-md text-neutral-900 cursor-pointer max-w-xs"
    />
  );

  return (
    <Popover trigger={inputField} popoverContent={calendarContent} intent="primary" />
  );
};

export default DatePicker;
