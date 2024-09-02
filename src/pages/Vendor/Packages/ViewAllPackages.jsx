import React, { useContext } from "react";
import { Loading } from "../../../components/Shared/Loading";
import { PageTitle } from "../../../components/Shared/PageTitle";

import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import useVendor from "../../../hooks/useVendor";
import { AuthContext } from "../../../providers/AuthProvider";

export const ViewAllPackages = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, userLoading, userRefetch] = useUser.userDetails(user?.email);
  const [packageList, loading, refetch] = useVendor.packages(
    userInfo?.vendorCompany
  );

  if (userLoading || loading) return <Loading />;

  return (
    <>
      <PageTitle title={"View All Packages"} />
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-center font-bold mb-8">View All Packages</h3>
        <table className="min-w-full rounded-none">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-accent text-white">Package Name</th>

              <th className="py-2 px-4 bg-accent text-white">Base Price</th>
              <th className="py-2 px-4 bg-accent text-white">
                Discount Status
              </th>
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
                    <Link
                      to={`/dashboard/package/update/${singlePackage?._id}`}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-none mr-2"
                    >
                      Edit
                    </Link>
                    <button className="bg-red-700 text-white px-4 py-2 rounded-none">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
