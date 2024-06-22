import React, { useState } from "react";

export const AddNewPackage = () => {
  const [discountChecked, setDiscountChecked] = useState(false);
  const [discountValue, setDiscountValue] = useState("");
  const [services, setServices] = useState([]);
  const [serviceValue, setServiceValue] = useState("");

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

  return (
    <div className="px-4 py-8 ">
      <div className="bg-white shadow-md mx-auto p-4">
        <div className="flex flex-col  lg:flex-row gap-5">
          <div className="container">
            <form className="border border-primary rounded-none p-6">
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
                  />
                </div>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cover</span>
                </label>
                <input
                  type="file"
                  id="cover"
                  className="file-input file-input-sm file-input-bordered file-input-primary w-full rounded-none"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-primary rounded-none resize-none"
                  id="description"
                  placeholder="Enter Package description"
                  rows="10"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="container">
            <div>
              <form className="border border-primary rounded-none p-6">
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
              </form>
            </div>
            <div className="mt-2 border border-primary p-6">
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
          <button className="btn btn-block rounded-none btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
