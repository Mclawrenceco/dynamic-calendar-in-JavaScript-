import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSave }) => {
  const [event, setEvent] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <h2>Add Event</h2>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Event name"
          className="border p-2 w-full"
        />
        <button onClick={() => onSave(event)} className="bg-blue-500 text-white p-2 mt-2">Save</button>
        <button onClick={onClose} className="bg-red-500 text-white p-2 mt-2">Close</button>
      </div>
    </div>
  );
};

export default Modal;
