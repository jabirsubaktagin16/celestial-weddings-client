import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Loading } from "../../../components/Shared/Loading";
import { PageTitle } from "../../../components/Shared/PageTitle";
import { PaginationComponent } from "../../../components/Shared/PaginationComponent";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import useVendor from "../../../hooks/useVendor";
import { AuthContext } from "../../../providers/AuthProvider";
import { paginationFunction } from "../../../utils/paginationFunction";

const UserSwal = withReactContent(Swal);

export const ViewUsers = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [users, userLoading, userRefetch] = useUser.userList();
  const [selectedUser, setSelectedUser] = useState(null);
  const [vendor, vendorLoading, refetch] = useVendor.vendorList();

  const {
    currentPage,
    setCurrentPage,
    rowsPerPage,
    totalPages,
    renderTablePage,
  } = paginationFunction(users);

  if (userLoading || vendorLoading) return <Loading />;

  const openModal = (user) => {
    let selectedRole = user?.role || "user"; // Default to "user" if no role
    let selectedVendorCompany = user?.vendorCompany
      ? user.vendorCompany._id
      : ""; // Vendor selection based on user data

    // Track the role selection to show/hide the vendor select box
    let isVendorRole = selectedRole === "vendor";

    const handleRoleChange = (event) => {
      const role = event.target.value;
      isVendorRole = role === "vendor"; // Check if role is vendor
      document.getElementById("vendorInput").style.display = isVendorRole
        ? "block"
        : "none"; // Show/hide vendor input
    };

    UserSwal.fire({
      title: "Assign A Role",
      html: (
        <div>
          <div className="form-control mb-2">
            <select
              id="roleSelect"
              className="select select-primary rounded-none"
              onChange={handleRoleChange}
              defaultValue={selectedRole}
            >
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="form-control mb-2">
            <select
              id="vendorInput"
              className="select select-primary rounded-none"
              style={{ display: isVendorRole ? "block" : "none" }} // Conditionally display
              defaultValue={selectedVendorCompany} // Set default vendor
            >
              {vendor &&
                vendor.map((v) => (
                  <option key={v._id} value={v._id}>
                    {v.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      ),
      confirmButtonText: "Confirm",
      showCancelButton: true,
      allowOutsideClick: false,
      preConfirm: () => {
        const selectedOption = document.getElementById("roleSelect").value;
        const vendorInput = document.getElementById("vendorInput").value;

        if (selectedOption === "vendor" && !vendorInput) {
          Swal.showValidationMessage("Vendor name is required");
        } else {
          return {
            selectedOption,
            vendorInput: selectedOption === "vendor" ? vendorInput : null,
          };
        }
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        const userRoleInfo = {
          role: result.value.selectedOption,
          vendorCompany: result.value.vendorInput,
        };

        const userRes = await axiosSecure.patch(
          `/users/update-role/${user?._id}`,
          userRoleInfo
        );

        if (userRes?.data?.response.modifiedCount > 0) {
          userRefetch();
          toast.success(`User Role Updated for ${user.name}`);
        }
      }
    });
  };

  const handleRoleChange = (event) => {
    const vendorInput = document.getElementById("vendorInput");
    if (event.target.value === "vendor") {
      vendorInput.style.display = "block";
    } else {
      vendorInput.style.display = "none";
    }
  };

  return (
    <>
      <PageTitle title={"Assign User Roles"} />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">View Users</h1>
        <table className="min-w-full border border-accent">
          <thead className="bg-accent text-white">
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Email</th>
              <th className="px-4 py-2 border-b">Role</th>
              <th className="px-4 py-2 border-b">Vendor Company</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {renderTablePage(currentPage).map((singleUser) => (
              <tr key={singleUser._id}>
                <td className="border border-accent px-4 text-center py-2">
                  {singleUser.name}
                </td>
                <td className="border border-accent px-4 text-center py-2">
                  {singleUser.email}
                </td>
                <td className="border border-accent px-4 text-center py-2">
                  {singleUser.role}
                </td>
                <td className="border border-accent px-4 text-center py-2">
                  {singleUser.vendorCompany?._id
                    ? singleUser.vendorCompany.name
                    : "N/A"}
                </td>
                <td className="border border-accent px-4 py-2 text-center">
                  {user?.email !== singleUser.email && (
                    <button
                      onClick={() => openModal(singleUser)}
                      className="btn btn-secondary btn-xs rounded-none"
                    >
                      Assign Role
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};
