import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserList from "../../../hooks/useUserList";
import useVendorList from "../../../hooks/useVendorList";

const UserSwal = withReactContent(Swal);

export const ViewUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, , userRefetch] = useUserList();
  const [selectedUser, setSelectedUser] = useState(null);
  const [vendor, , refetch] = useVendorList();

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(users.length / rowsPerPage);

  const renderTablePage = (page) => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return users.slice(start, end);
  };

  const openModal = (user) => {
    UserSwal.fire({
      title: "Assign A Role",
      html: (
        <div>
          <div className="form-control mb-2">
            <select
              id="roleSelect"
              className="select select-primary rounded-none"
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="form-control mb-2">
            <select
              id="vendorInput"
              className="select select-primary rounded-none"
              style={{ display: "none" }}
            >
              <option value="" disabled>
                Select a Vendor from the List
              </option>
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

  const handleSelectChange = (event) => {
    const vendorInput = document.getElementById("vendorInput");
    if (event.target.value === "vendor") {
      vendorInput.style.display = "block";
    } else {
      vendorInput.style.display = "none";
    }
  };

  return (
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
          {renderTablePage(currentPage).map((user) => (
            <tr key={user._id}>
              <td className="border border-accent px-4 text-center py-2">
                {user.name}
              </td>
              <td className="border border-accent px-4 text-center py-2">
                {user.email}
              </td>
              <td className="border border-accent px-4 text-center py-2">
                {user.role}
              </td>
              <td className="border border-accent px-4 text-center py-2">
                {user.vendorCompany?._id ? user.vendorCompany.name : "N/A"}
              </td>
              <td className="border border-accent px-4 py-2 text-center">
                <button
                  onClick={() => openModal(user)}
                  className="btn btn-secondary btn-xs rounded-none"
                >
                  Assign Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mx-auto mt-4">
        <div className="join border border-accent">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="join-item btn"
          >
            «
          </button>
          <button className="join-item btn">
            Page {currentPage} of {totalPages}
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="join-item btn"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};
