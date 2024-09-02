import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { PackageInputComponent } from "../../../components/InputComponent/PackageInputComponent";
import { Loading } from "../../../components/Shared/Loading";
import { PageTitle } from "../../../components/Shared/PageTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";
import useVendor from "../../../hooks/useVendor";
import { AuthContext } from "../../../providers/AuthProvider";

export const UpdatePackage = () => {
  const { id } = useParams();
  const [_package, packageLoading, packageRefetch] =
    useVendor.packageDetails(id);
  const [discountChecked, setDiscountChecked] = useState(false);
  const [discountValue, setDiscountValue] = useState("");
  const [services, setServices] = useState([]);
  const [serviceValue, setServiceValue] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const { user } = useContext(AuthContext);
  const [userInfo, userLoading] = useUser.userDetails(user?.email);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    setServices(_package?.servicesOffered);
    setDiscountChecked(_package?.discountStatus);
  }, [_package]);

  const addService = () => {
    if (serviceValue.trim() !== "") {
      setServices([...services, serviceValue]);
      setServiceValue("");
    }
  };

  const handleDiscountChange = (e) => {
    setDiscountValue(e.target.value);
  };

  const onSubmit = async (data) => {
    const packageInfo = {
      name: data.packageName,
      price: data.basePrice,
      servicesOffered: services,
      discountStatus: discountChecked,
      discountPercentage: discountChecked ? data.discountPercentage : 0,
    };

    const packageRes = await axiosSecure.patch(
      `/packages/update/${id}`,
      packageInfo
    );

    if (packageRes.data.response.modifiedCount > 0) {
      toast.success(`Package ${data.packageName} Updated successfully`);
    }
  };

  if (packageLoading) return <Loading />;

  return (
    <>
      <PageTitle title={"Update Package"} />
      <div className="px-4 py-8 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white shadow-md mx-auto p-4">
            <div className="flex flex-col  lg:flex-row gap-5">
              <div className="container">
                <div className="border border-primary rounded-none p-6">
                  <h5 className="text-center font-bold my-2">
                    Package Basic Information
                  </h5>

                  <PackageInputComponent
                    labelTitle={"Package Name"}
                    name={"packageName"}
                    placeholder={"Enter Package name"}
                    register={register}
                    defaultValue={_package?.name}
                  />
                  <PackageInputComponent
                    labelTitle={"Base Price"}
                    name={"basePrice"}
                    type={"number"}
                    placeholder={"Enter Base Price"}
                    register={register}
                    defaultValue={_package?.price}
                  />
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
                          <RxCross2 data-unchecked-icon />

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
                    <PackageInputComponent
                      labelTitle={"Discount Percentage"}
                      name={"discountPercentage"}
                      type={"number"}
                      placeholder={"Enter Discount Percentage"}
                      register={register}
                      defaultValue={_package?.discountPercentage}
                      max={100}
                    />
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
                    {services?.length > 0 && (
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
