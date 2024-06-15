import services from "../../public/services.json";

export const AddVendor = () => {
  return (
    <div className="px-10 py-5">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="card flex-1 rounded-none bg-base-100 shadow-xl">
          <div className="card-body flex flex-col">
            <h5 className="text-center">Basic Information</h5>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="vendorName"
                id="vendorName"
                placeholder="Enter Vendor Name"
                className="input input-sm input-bordered input-primary rounded-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className="select select-sm select-primary w-full rounded-none">
                <option disabled defaultValue={""}>
                  Select Category from the List
                </option>
                {services &&
                  services.map((service) => (
                    <option key={service.shortForm}>{service.title}</option>
                  ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Cover</span>
              </label>
              <input
                type="file"
                className="file-input file-input-sm file-input-bordered file-input-primary w-full rounded-none"
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
                placeholder="Enter Contact E-Mail"
                className="input input-sm input-bordered input-primary rounded-none"
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
                placeholder="Enter Contact Phone Number"
                className="input input-sm input-bordered input-primary rounded-none"
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
                placeholder="Enter Vendor Address"
                className="input input-sm input-bordered input-primary rounded-none"
              />
            </div>
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="vendorDescription"
                className="textarea textarea-primary rounded-none resize-none"
                placeholder="Enter Description of the Vendor"
                rows="10"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="card rounded-none bg-base-100 shadow-xl">
            <div className="card-body flex flex-col">
              <h5 className="text-center">Offered Packages</h5>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Package Name</span>
                </label>
                <input
                  type="text"
                  name="packageName"
                  id="packageName"
                  placeholder="Enter Name of the Package"
                  className="input input-sm input-bordered input-primary rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Enter Price"
                  className="input input-sm input-bordered input-primary rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cover</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-sm file-input-bordered file-input-primary w-full rounded-none"
                />
              </div>
              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-primary rounded-none resize-none"
                  placeholder="Enter Description of the Package"
                  rows="5"
                ></textarea>
              </div>

              <div className="card-actions justify-end mt-auto">
                <button className="btn btn-primary rounded-none text-white">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-none bg-base-100 shadow-xl mt-5">
            <div className="card-body flex flex-col">
              <h5 className="text-center">Offered Packages</h5>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Package Name</th>

                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </td>

                      <th>
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
