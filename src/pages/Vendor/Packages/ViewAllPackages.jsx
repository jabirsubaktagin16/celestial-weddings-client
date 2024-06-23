import React from "react";

export const ViewAllPackages = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-center font-bold mb-8">View All Packages</h3>
      <table className="min-w-full rounded-none">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-accent text-white">Package Name</th>
            <th className="py-2 px-4 bg-accent text-white">Tags</th>
            <th className="py-2 px-4 bg-accent text-white">Base Price</th>
            <th className="py-2 px-4 bg-accent text-white">Discount Status</th>
            <th className="py-2 px-4 bg-accent text-white">
              Discount Percentage
            </th>
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
            <td className="py-2 px-4 border-b text-center">Sunset Gardens</td>
            <td className="py-2 px-4 border-b text-center">Sunset Gardens</td>

            <td className="py-2 px-4 border-b text-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-none mr-2">
                View
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-none mr-2">
                Edit
              </button>
              <button className="bg-red-700 text-white px-4 py-2 rounded-none">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
