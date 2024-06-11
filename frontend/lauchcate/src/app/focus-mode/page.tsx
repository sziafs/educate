import React from 'react';
import Sidebar from '../sidebar';

const FocusMode = () => {
  return (
    <div className="flex">
        <div className="w-64 min-h-screen border-r">
        <Sidebar />
        </div>

        <div className="p-4">
      <h1 className="text-4xl mb-4">Focus Mode</h1>
      <p className="mb-8">Description of the focus mode...</p>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <div className="p-4 bg-gray-400 rounded-lg">
            <h2 className="text-2xl mb-2">Day Streak: N</h2>
            <p>Days left: X</p>
            <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2">Restart</button>
          </div>

          <div className="p-4 bg-gray-400 rounded-lg mt-4">
            <h2 className="text-2xl mb-2">21 Day Calendar</h2>
            {/* Add calendar component here */}
          </div>
        </div>

        <div className="col-span-1 p-4 bg-gray-400 rounded-lg">
          <h2 className="text-2xl mb-2">Today`s Date</h2>
          <p>30 min of exercise</p>
          <p>10 minutes of meditation</p>
          <p>No alcohol or weed</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-1 p-4 bg-gray-400 rounded-lg">
          <h2 className="text-2xl mb-2">Challenges</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1 bg-gray-300 rounded p-2">Challenge Completed</div>
            <div className="col-span-1 bg-gray-300 rounded p-2">21 Days Completed</div>
            <div className="col-span-1 bg-gray-300 rounded p-2">30 Days Completed</div>
          </div>
        </div>

        <div className="col-span-1 p-4 bg-gray-400 rounded-lg">
          <h2 className="text-2xl mb-2">Milestones</h2>
          {/* Add milestones component here */}
        </div>
      </div>
    </div>

  </div>
    
  );
};

export default FocusMode;