import React from 'react';
import Day from './Day/Day';

const Calendar = ({ currentMonth, days, onDayClick }) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day, index) => (
        <Day key={index} day={day} onClick={() => onDayClick(day)} />
      ))}
    </div>
  );
};

export default Calendar;
