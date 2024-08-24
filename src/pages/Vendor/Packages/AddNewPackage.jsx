import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PageTitle } from "../../../components/Shared/PageTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import useUser from "../../../hooks/useUser";
import { AuthContext } from "../../../providers/AuthProvider";

export const AddNewPackage = () => {
  const [discountChecked, setDiscountChecked] = useState(false);
  const [discountValue, setDiscountValue] = useState("");
  const [services, setServices] = useState([]);
  const [serviceValue, setServiceValue] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [users, loading, userRefetch] = useUser.userList();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const currentUser = users.find((u) => u?.email === user.email);

  const addService = () => {
    if (serviceValue.trim() !== "") {
      setServices([...services, serviceValue]);
      setServiceValue("");
    }
  };

  /* const handleDiscountCheck = () => {
    setDiscountChecked(!discountChecked);
    if (!discountChecked) {
      setDiscountValue("");
    }
  }; */

  const handleDiscountChange = (e) => {
    setDiscountValue(e.target.value);
  };

  const onSubmit = async (data) => {
    const packageInfo = {
      name: data.packageName,
      price: data.basePrice,
      servicesOffered: services,
      vendorId: currentUser?.vendorCompany?._id,
      discountStatus: discountChecked,
      discountPercentage: discountChecked ? data.discountPercentage : 0,
    };

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
                      className="input input-sm input-bordered input-primary rounded-none bg-transparent"
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
                      className="input input-sm input-bordered input-primary rounded-none bg-transparent"
                      id="basePrice"
                      type="number"
                      placeholder="Enter Base Price"
                      {...register("basePrice", { required: true })}
                    />
                  </div>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">Discount</span>

                      <label
                        htmlFor="AcceptConditions"
                        className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary"
                      >
                        <input
                          type="checkbox"
                          id="AcceptConditions"
                          className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                          checked={discountChecked}
                          onChange={() => setDiscountChecked(!discountChecked)}
                        />

                        <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-accent">
                          <svg
                            data-unchecked-icon
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <svg
                            data-checked-icon
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </label>
                    </label>
                  </div>
                  {discountChecked && (
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Discount Percentage</span>
                      </label>
                      <input
                        className="input input-sm input-bordered input-primary rounded-none bg-transparent"
                        id="discountPercentage"
                        type="number"
                        max={100}
                        placeholder="Enter Discount Percentage"
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
                      className="textarea textarea-primary rounded-none resize-none bg-transparent"
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
