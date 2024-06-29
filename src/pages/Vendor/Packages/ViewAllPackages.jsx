import React, { useContext } from "react";
import { Loading } from "../../../components/Shared/Loading";
import usePackages from "../../../hooks/usePackages";
import useUserList from "../../../hooks/useUserList";
import { AuthContext } from "../../../providers/AuthProvider";

export const ViewAllPackages = () => {
  const { user } = useContext(AuthContext);
  const [users, , userRefetch] = useUserList();
  const currentUser = users.find((u) => u?.email === user.email);
  const [packageList, loading, refetch] = usePackages(
    currentUser?.vendorCompany?._id
  );

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-center font-bold mb-8">View All Packages</h3>
      <table className="min-w-full rounded-none">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-accent text-white">Package Name</th>

            <th className="py-2 px-4 bg-accent text-white">Base Price</th>
            <th className="py-2 px-4 bg-accent text-white">Discount Status</th>
            <th className="py-2 px-4 bg-accent text-white">
              Discount Percentage
            </th>
            <th className="py-2 px-4 bg-accent text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {packageList &&
            packageList.map((singlePackage) => (
              <tr key={singlePackage?._id}>
                <td className="py-2 px-4 border-b text-center">
                  {singlePackage?.name}
                </td>

                <td className="py-2 px-4 border-b text-center">
                  ${singlePackage?.price}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {singlePackage?.discountStatus
                    ? "Available"
                    : "Not Available"}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {singlePackage?.discountPercentage
                    ? singlePackage?.discountPercentage
                    : "0"}
                </td>

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
            ))}
        </tbody>
      </table>
    </div>
  );
};
