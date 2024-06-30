import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PageTitle } from "../../../components/Shared/PageTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserList from "../../../hooks/useUserList";
import { AuthContext } from "../../../providers/AuthProvider";

export const AddNewPackage = () => {
  const [discountChecked, setDiscountChecked] = useState(false);
  const [discountValue, setDiscountValue] = useState("");
  const [services, setServices] = useState([]);
  const [serviceValue, setServiceValue] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [users, loading, userRefetch] = useUserList();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const currentUser = users.find((u) => u?.email === user.email);

  const addService = () => {
    if (serviceValue.trim() !== "") {
      setServices([...services, serviceValue]);
      setServiceValue("");
    }
  };

  const handleDiscountCheck = () => {
    setDiscountChecked(!discountChecked);
    if (!discountChecked) {
      setDiscountValue("");
    }
  };

  const onSubmit = async (data) => {
    const packageInfo = {
      name: data.packageName,
      price: data.basePrice,
      servicesOffered: services,
      vendorId: currentUser?.vendorCompany?._id,
      discountStatus: discountChecked,
      discountPercentage: data.discountPercentage,
    };

    console.log(packageInfo);
    const packageRes = await axiosSecure.post("/packages", packageInfo);

    if (packageRes.data.response._id) {
      reset();
      setServices([]);
      toast.success(`New Package ${data.packageName} Added`);
    }
  };

  return (
    <>
      <PageTitle title={"Add New Package"} />
      <div className="px-4 py-8 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white shadow-md mx-auto p-4">
            <div className="flex flex-col  lg:flex-row gap-5">
              <div className="container">
                <div className="border border-primary rounded-none p-6">
                  <h5 className="text-center font-bold my-2">
                    Package Basic Information
                  </h5>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Package Name</span>
                    </label>
                    <input
                      className="input input-sm input-bordered input-primary rounded-none"
                      id="packageName"
                      type="text"
                      placeholder="Enter Package name"
                      {...register("packageName", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Base Price</span>
                    </label>
                    <input
                      className="input input-sm input-bordered input-primary rounded-none"
                      id="basePrice"
                      type="number"
                      placeholder="Enter Base Price"
                      {...register("basePrice", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">Discount</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={discountChecked}
                        onChange={handleDiscountCheck}
                      />
                    </label>
                  </div>
                  {discountChecked && (
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Discount Percentage</span>
                      </label>
                      <input
                        className="input input-sm input-bordered input-primary rounded-none"
                        id="discountPercentage"
                        type="number"
                        placeholder="Enter Discount Percentage"
                        value={discountValue}
                        onChange={(e) => setDiscountValue(e.target.value)}
                        max={100}
                        {...register("discountPercentage")}
                      />
                    </div>
                  )}
                </div>
                <div className="border border-primary rounded-none mt-2 p-6">
                  <h5 className="text-center font-bold my-2">
                    Enter Package Services
                  </h5>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Services</span>
                    </label>
                    <textarea
                      className="textarea textarea-primary rounded-none resize-none"
                      id="services"
                      value={serviceValue}
                      onChange={(e) => setServiceValue(e.target.value)}
                      placeholder="Enter Services Offered"
                      rows="1"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <button
                      className="btn btn-primary text-white px-4 py-2 rounded-none"
                      type="button"
                      onClick={addService}
                    >
                      Add Service
                    </button>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="border border-primary p-6">
                  <h5 className="text-center font-bold my-2">
                    Offered Services
                  </h5>
                  <div className="overflow-x-auto">
                    {services.length > 0 && (
                      <table className="table">
                        {/* head */}
                        <thead>
                          <tr>
                            <th>SI No.</th>
                            <th>Service</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {services.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item}</td>
                              <th>
                                <button
                                  className="btn btn-accent btn-xs"
                                  onClick={() =>
                                    setServices(
                                      services.filter((_, i) => i !== index)
                                    )
                                  }
                                >
                                  Delete
                                </button>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-2">
              <button
                className="btn btn-block rounded-none btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
