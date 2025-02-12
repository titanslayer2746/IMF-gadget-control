import React from "react";

const gadgets = Array(6).fill({
  name: "The Nightingale",
  status: "Available",
  successProbability: 87,
  updated: "2 hours ago",
  id: "d5e01d5e-1234-5678-abcd"
});

const GadgetCard = ({ gadget }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-80">
      <h2 className="text-white text-lg font-semibold">{gadget.name}</h2>
      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">{gadget.status}</span>
      <div className="mt-3">
        <p className="text-gray-400 text-sm">Mission Success Probability</p>
        <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${gadget.successProbability}%` }}></div>
        </div>
        <p className="text-green-400 text-sm mt-1">{gadget.successProbability}%</p>
      </div>
      <p className="text-gray-400 text-sm mt-3">Status Updated: {gadget.updated}</p>
      <p className="text-gray-500 text-xs">Gadget ID: <span className="text-white">{gadget.id}</span></p>
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-white text-2xl font-bold">IMF Gadget Control</h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg">+ Add New Gadget</button>
      </header>
      <div className="flex gap-4 mb-6">
        {['All Gadgets', 'Available', 'Deployed', 'Destroyed', 'Decommissioned'].map(filter => (
          <button key={filter} className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
            {filter}
          </button>
        ))}
      </div>
      <input type="text" placeholder="Search gadgets..." className="w-full p-3 rounded-lg bg-gray-800 text-white mb-6" />
      <div className="grid grid-cols-3 gap-6">
        {gadgets.map((gadget, index) => (
          <GadgetCard key={index} gadget={gadget} />
        ))}
      </div>
    </div>
  );
};

export default App;
