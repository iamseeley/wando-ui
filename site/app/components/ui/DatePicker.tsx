'use client';

import { useState } from 'react';
import Popover from './Popover';
import clsx from 'clsx';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();

const DatePicker: React.FC = () => {
  const [date, setDate] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isOpen, setIsOpen] = useState(false);

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    setDate(newDate.toISOString().split('T')[0]);
    setIsOpen(false);
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const calendarContent = (
    <div className="">
      <div className="font-medium text-center">
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {daysOfWeek.map((day) => (
          <div key={day} className="font-medium">{day}</div>
        ))}
        {Array.from({ length: daysInMonth(currentMonth, currentYear) }, (_, i) => (
          <div
            key={i + 1}
            onClick={() => handleDateClick(i + 1)}
            className={clsx('p-2 rounded cursor-pointer', {
              'bg-blue-200': selectedDate?.getDate() === i + 1 && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear,
              'hover:bg-blue-100': true,
            })}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={handlePreviousMonth} className="px-2 py-1 bg-gray-200 rounded">Previous</button>
        
        <button onClick={handleNextMonth} className="px-2 py-1 bg-gray-200 rounded">Next</button>
      </div>
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
    <Popover trigger={inputField} popoverContent={calendarContent} isOpen={isOpen} setIsOpen={setIsOpen} intent="primary" />
  );
};

export default DatePicker;
