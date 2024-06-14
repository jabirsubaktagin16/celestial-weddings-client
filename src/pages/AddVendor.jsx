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
                <option disabled selected>
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
        <div className="card flex-1 rounded-none bg-base-100 shadow-xl">
          <div className="card-body flex flex-col">
            <h5 className="text-center">Offered Services</h5>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <input
                type="text"
                name="serviceName"
                id="serviceName"
                placeholder="Enter Name of the Service"
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
                placeholder="Enter Description of the Service"
                rows="15"
              ></textarea>
            </div>

            <div className="card-actions justify-end mt-auto">
              <button className="btn btn-primary rounded-none text-white">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
