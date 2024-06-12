import useService from "../hooks/useService";

export const AddVendor = () => {
    const [services, setServices] = useService();
  return (
    <div className="px-10 py-5">
      <div className="card rounded-none bg-base-100 shadow-xl">
        <div className="card-body">
          <h5 className="text-center">Basic Information</h5>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Vendor Name"
              className="input input-bordered input-primary rounded-none"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-primary w-full rounded-none">
              <option disabled selected>
                Select Category from the List
              </option>
              {services &&
          services.map((service) => (
            <option
              key={service.shortForm}>{service.title}</option>
          ))}
            </select>
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
              className="input input-bordered input-primary rounded-none"
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
              className="input input-bordered input-primary rounded-none"
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="label">
                <span className="label-text">Street</span>
              </label>
              <input
                type="text"
                name="street"
                id="street"
                placeholder="Enter Street Name"
                className="input input-bordered input-primary rounded-none"
              />
            </div>
            <div className="form-control w-full md:w-1/2 px-3">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter City Name"
                className="input input-bordered input-primary rounded-none"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="form-control w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="label">
                <span className="label-text">State</span>
              </label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter State Name"
                className="input input-bordered input-primary rounded-none"
              />
            </div>
            <div className="form-control w-full md:w-1/2 px-3">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Enter Country Name"
                className="input input-bordered input-primary rounded-none"
              />
            </div>
          </div>
          {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
        </div>
      </div>
      <div className="card rounded-none bg-base-100 shadow-xl mt-5">
        <div className="card-body">
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
              className="input input-bordered input-primary rounded-none"
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
              className="input input-bordered input-primary rounded-none"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea className="textarea textarea-primary rounded-none" placeholder="Enter Description of the Service" rows="10"></textarea>
          </div>
          
          <div className="card-actions justify-end">
      <button className="btn btn-primary rounded-none text-white">Add</button>
    </div>
        </div>
      </div>
    </div>
  );
};
