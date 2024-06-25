import React, { useEffect, useState } from "react";

export const AssignRoleModal = ({ user, onSave, vendorOptions }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedVendorId, setSelectedVendorId] = useState("");

  useEffect(() => {
    if (user) {
      setSelectedRole(user?.role);
      setSelectedVendorId(user.vendorId || '');
    }
  }, [user]);

  const handleSave = () => {
    onSave(selectedRole, selectedVendorId);
  };

  return (
    <dialog id="assignRoleModal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Assign Role</h3>
        {user && (
          <>
            <div className="mb-4">
              <label className="block mb-2">Role</label>
              <select
                className="border p-2 w-full"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>
            {selectedRole === "Vendor" && (
              <div className="mb-4">
                <label className="block mb-2">Vendor ID</label>
                <select
                  className="border p-2 w-full"
                  value={selectedVendorId}
                  onChange={(e) => setSelectedVendorId(e.target.value)}
                >
                  <option value="" disabled>
                    Select Vendor
                  </option>
                  {vendorOptions.map((vendor) => (
                    <option key={vendor.id} value={vendor.id}>
                      {vendor.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="flex justify-end">
              <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
};
