import React, { useState } from "react";
import toast from "react-hot-toast";
import useUserList from "../../../hooks/useUserList";
import useVendorList from "../../../hooks/useVendorList";
import { AssignRoleModal } from "./AssignRoleModal";

export const ViewUsers = () => {
  const [users, userRefetch] = useUserList();
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
    setSelectedUser(user);
    document.getElementById("assignRoleModal").showModal();
  };

  const saveChanges = (role, vendorId) => {
    /* setUsers(
      users.map((user) =>
        user.id === selectedUser.id
          ? { ...user, role, vendorId: role === "vendor" ? vendorId : null }
          : user
      )
    ); */
    toast.success("User Role Management Done Successfully");
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
            <th className="px-4 py-2 border-b">Vendor ID</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {renderTablePage(currentPage).map((user) => (
            <tr key={user.id}>
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
                {user.vendorId ? user.vendorId : "N/A"}
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
      <div className="flex mx-auto mt-4">
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
      <AssignRoleModal
        user={selectedUser}
        onSave={saveChanges}
        vendorOptions={vendor}
      />
    </div>
  );
};
