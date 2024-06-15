import React from "react";

export const ViewAllEvents = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-center font-bold mb-8">View All Events</h3>

      <table className="min-w-full bg-white shadow-md rounded-none">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-accent text-white">Event Name</th>
            <th className="py-2 px-4 bg-accent text-white">Date</th>
            <th className="py-2 px-4 bg-accent text-white">Venue</th>
            <th className="py-2 px-4 bg-accent text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b text-center">
              Jane & John's Wedding
            </td>
            <td className="py-2 px-4 border-b text-center">June 15, 2024</td>
            <td className="py-2 px-4 border-b text-center">Sunset Gardens</td>
            <td className="py-2 px-4 border-b text-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-none mr-2">
                View
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-none">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
