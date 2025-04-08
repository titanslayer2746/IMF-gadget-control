import React, { useState } from "react";

const GadgetCard = ({ gadget }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-80">
      <h2 className="text-white text-lg font-semibold">{gadget.name}</h2>
      <span
  className={`px-3 py-1 rounded-full text-sm text-white ${
    gadget.status === "Available"
      ? "bg-green-600"
      : gadget.status === "Deployed"
      ? "bg-yellow-500"
      : gadget.status === "Decommissioned"
      ? "bg-gray-500"
      : gadget.status === "Destroyed"
      ? "bg-red-600"
      : "bg-gray-300"
  }`}
>
  {gadget.status}
</span>

      <div className="mt-3">
        <p className="text-gray-400 text-sm">Mission Success Probability</p>
        <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${gadget.successProbability}%` }}
          ></div>
        </div>
        <p className="text-green-400 text-sm mt-1">{gadget.successProbability}%</p>
      </div>
      <p className="text-gray-400 text-sm mt-3">Status Updated: {new Date(gadget.updatedAt).toLocaleString()}</p>
      <p className="text-gray-500 text-xs">Gadget ID: <span className="text-white">{gadget.id}</span></p>
    </div>
  );
};

const App = () => {
  const [gadgets, setGadgets] = useState([
    {
      id: 1,
      name: "Grappling Hook",
      status: "Available",
      successProbability: 87,
      updatedAt: "2025-04-01T10:00:00Z"
    },
    {
      id: 2,
      name: "Laser Watch",
      status: "Deployed",
      successProbability: 73,
      updatedAt: "2025-04-03T14:30:00Z"
    },
    {
      id: 3,
      name: "Invisibility Cloak",
      status: "Destroyed",
      successProbability: 45,
      updatedAt: "2025-03-27T09:15:00Z"
    },
    {
      id: 4,
      name: "Micro Drone",
      status: "Available",
      successProbability: 91,
      updatedAt: "2025-04-05T18:45:00Z"
    },
    {
      id: 5,
      name: "EMP Grenade",
      status: "Deployed",
      successProbability: 66,
      updatedAt: "2025-04-02T12:20:00Z"
    },
    {
      id: 6,
      name: "X-Ray Glasses",
      status: "Available",
      successProbability: 78,
      updatedAt: "2025-04-04T11:10:00Z"
    },
    {
      id: 7,
      name: "Hologram Projector",
      status: "Decommissioned",
      successProbability: 58,
      updatedAt: "2025-03-29T07:00:00Z"
    },
    {
      id: 8,
      name: "Bug Detector",
      status: "Available",
      successProbability: 84,
      updatedAt: "2025-04-06T20:25:00Z"
    },
    {
      id: 9,
      name: "Voice Modulator",
      status: "Deployed",
      successProbability: 69,
      updatedAt: "2025-03-30T16:40:00Z"
    },
    {
      id: 10,
      name: "Exploding Pen",
      status: "Destroyed",
      successProbability: 52,
      updatedAt: "2025-04-01T09:55:00Z"
    },
    {
      id: 11,
      name: "Jet Boots",
      status: "Available",
      successProbability: 88,
      updatedAt: "2025-04-07T08:15:00Z"
    },
    {
      id: 12,
      name: "Night Vision Goggles",
      status: "Decommissioned",
      successProbability: 61,
      updatedAt: "2025-03-28T13:05:00Z"
    }
  ]);
  

  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [newGadget, setNewGadget] = useState({
    name: "",
    status: "Available",
    successProbability: 0
  });

  const filteredGadgets =
    filter === "All"
      ? gadgets
      : gadgets.filter((gadget) => gadget.status === filter);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Nexus</h1>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "+ Add New Gadget"}
        </button>
      </header>

      {showForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const gadgetToAdd = {
              ...newGadget,
              id: Date.now(),
              updatedAt: new Date().toISOString()
            };
            setGadgets([gadgetToAdd, ...gadgets]);
            setNewGadget({
              name: "",
              status: "Available",
              successProbability: 0
            });
            setShowForm(false);
          }}
          className="bg-gray-800 p-4 rounded-lg mb-6 w-full max-w-md"
        >
          <h2 className="text-white text-lg font-semibold mb-4">Add New Gadget</h2>
          <input
            type="text"
            placeholder="Gadget Name"
            value={newGadget.name}
            onChange={(e) =>
              setNewGadget({ ...newGadget, name: e.target.value })
            }
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
            required
          />
          <select
            value={newGadget.status}
            onChange={(e) =>
              setNewGadget({ ...newGadget, status: e.target.value })
            }
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          >
            <option>Available</option>
            <option>Deployed</option>
            <option>Destroyed</option>
            <option>Decommissioned</option>
          </select>
          <input
            type="number"
            placeholder="Success Probability (%)"
            value={newGadget.successProbability}
            onChange={(e) =>
              setNewGadget({
                ...newGadget,
                successProbability: parseInt(e.target.value)
              })
            }
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Add Gadget
          </button>
        </form>
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {["All", "Available", "Deployed", "Destroyed", "Decommissioned"].map(
          (status) => (
            <button
              key={status}
              className={`px-3 py-1 rounded-full transition ${
                filter === status
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 gap-y-5">
        {filteredGadgets.map((gadget) => (
          <GadgetCard key={gadget.id} gadget={gadget} />
        ))}
</div>
    </div>
  );
};

export default App;
