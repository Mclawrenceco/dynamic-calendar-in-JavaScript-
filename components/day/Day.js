import React from 'react';

const Day = ({ day, onClick }) => {
  return (
    <div className="border p-2" onClick={onClick}>
      {day.format('D')}
    </div>
  );
};

export default Day;
