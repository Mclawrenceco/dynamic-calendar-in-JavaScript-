import React from 'react';

const Header = ({ currentMonth, onNextMonth, onPrevMonth }) => {
  return (
    <div className="flex justify-between items-center">
      <button onClick={onPrevMonth}>Previous</button>
      <h2>{currentMonth.format('MMMM YYYY')}</h2>
      <button onClick={onNextMonth}>Next</button>
    </div>
  );
};

export default Header;
