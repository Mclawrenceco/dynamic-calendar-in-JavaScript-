import React, { useState } from 'react';
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import dayjs from 'dayjs';

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const daysInMonth = currentMonth.daysInMonth();
  const days = Array.from({ length: daysInMonth }, (v, i) => currentMonth.date(i + 1));

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
  };

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (event) => {
    setEvents([...events, { date: selectedDay, event }]);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Header currentMonth={currentMonth} onNextMonth={handleNextMonth} onPrevMonth={handlePrevMonth} />
      <Calendar currentMonth={currentMonth} days={days} onDayClick={handleDayClick} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSaveEvent} />
    </div>
  );
};

export default App;
