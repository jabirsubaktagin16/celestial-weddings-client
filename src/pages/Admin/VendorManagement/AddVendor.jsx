export const AddVendor = () => {
  return (
    <div className="px-10 py-5">
      <div className="card flex-1 rounded-none bg-base-100 shadow-xl">
        <div className="card-body flex flex-col">
          <h5 className="text-center">Vendor Information</h5>
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
          <div className="card-actions justify-end mt-2">
            <button className="btn btn-primary rounded-none">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
