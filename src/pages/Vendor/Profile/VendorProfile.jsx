import { getStorage } from "firebase/storage";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loading } from "../../../components/Shared/Loading";
import { PageTitle } from "../../../components/Shared/PageTitle";
import app from "../../../firebase/firebase.config";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useVendor from "../../../hooks/useVendor";

import { AuthContext } from "../../../providers/AuthProvider";
import { utilFunctions } from "../../../utils/utilFunctions";

export const VendorProfile = () => {
  const [cover, setCover] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { initialApp, fireBaseStorageURL } = app;
  const storage = getStorage(initialApp, fireBaseStorageURL);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const { user } = useContext(AuthContext);
  const [userInfo, loading, userRefetch] = useVendor.vendorUserDetails(
    user?.email
  );
  const [vendor, vendorLoading, refetch] = useVendor.vendorDetails(
    userInfo ? userInfo?.vendorCompany : ""
  );

  const { getCategoryFullForm, createUniqueFileName, handleFileChange } =
    utilFunctions();

  const onSubmit = async (data) => {
    const vendorInfo = {
      name: data.vendorName,
      email: data.contactEmail,
      phoneNumber: data.contactPhone,
      address: data.contactAddress,
      description: data.vendorDescription,
    };

    const vendorRes = await axiosSecure.patch(
      `/vendors/update/${vendor?._id}`,
      vendorInfo
    );
    console.log(vendorRes);
    if (vendorRes.data.response.modifiedCount > 0) {
      reset();
      toast.success(`Vendor Information for ${data.vendorName} Updated`);
    }
  };

  if (loading || vendorLoading) return <Loading />;

  const categoryFullForm = getCategoryFullForm(vendor?.category);

  return (
    <div>
      <PageTitle title={"Vendor Profile"} />
      <div className="px-10 py-5">
        <div className="card flex-1 rounded-none bg-white shadow-xl">
          <div className="card-body flex flex-col">
            <h5 className="text-center">Vendor Profile</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  defaultValue={vendor?.name}
                  type="text"
                  name="vendorName"
                  id="vendorName"
                  placeholder="Enter Vendor Name"
                  className="input input-sm input-bordered input-primary rounded-none bg-transparent"
                  {...register("vendorName", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="vendorCategory"
                  id="vendorCategory"
                  defaultValue={categoryFullForm}
                  disabled
                  className="input input-sm input-bordered input-primary rounded-none bg-transparent"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cover</span>
                </label>
                <input
                  type="file"
                  onChange={(e) =>
                    handleFileChange("vendorCover", e, setCover, setIsUploading)
                  }
                  className="file-input file-input-sm file-input-bordered file-input-primary w-full rounded-none bg-transparent"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact E-Mail</span>
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  id="contactEmail"
                  defaultValue={vendor?.email}
                  placeholder="Enter Contact E-Mail"
                  className="input input-sm input-bordered input-primary rounded-none bg-transparent"
                  {...register("contactEmail", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  type="text"
                  name="contactPhone"
                  id="contactPhone"
                  defaultValue={vendor?.phoneNumber}
                  placeholder="Enter Contact Phone Number"
                  className="input input-sm input-bordered input-primary rounded-none bg-transparent"
                  {...register("contactPhone", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="contactAddress"
                  id="contactAddress"
                  defaultValue={vendor?.address}
                  placeholder="Enter Vendor Address"
                  className="input input-sm input-bordered input-primary rounded-none bg-transparent"
                  {...register("contactAddress", { required: true })}
                />
              </div>
              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="vendorDescription"
                  className="textarea textarea-primary rounded-none resize-none bg-transparent"
                  placeholder="Enter Description of the Vendor"
                  rows="10"
                  defaultValue={vendor?.description}
                  {...register("vendorDescription", { required: true })}
                ></textarea>
              </div>
              <div className="card-actions justify-end mt-2">
                <button type="submit" className="btn btn-primary rounded-none">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
