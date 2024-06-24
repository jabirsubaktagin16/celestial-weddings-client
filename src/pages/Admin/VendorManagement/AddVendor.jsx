import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import app from "../../../firebase/firebase.config";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { createUniqueFileName } from "../../../utils/createUniqueFileName";

export const AddVendor = () => {
  const [cover, setCover] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { initialApp, fireBaseStorageURL } = app;
  const storage = getStorage(initialApp, fireBaseStorageURL);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  async function helperForUploadingImageToFirebase(file) {
    const getFileName = createUniqueFileName(file);
    const storageReference = ref(storage, `vendorCover/${getFileName}`);
    const uploadImage = uploadBytesResumable(storageReference, file);

    return new Promise((resolve, reject) => {
      uploadImage.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref)
            .then((downloadUrl) => resolve(downloadUrl))
            .catch((error) => reject(error));
        }
      );
    });
  }

  async function handleFileChange(event) {
    setIsUploading(true);
    const extractImageUrl = await helperForUploadingImageToFirebase(
      event.target.files[0]
    );

    if (extractImageUrl !== "") {
      setCover(extractImageUrl);
      setIsUploading(false);
      /* setFormData({
        ...formData,
        imageUrl: extractImageUrl,
      }); */
    }
  }

  const onSubmit = async (data) => {
    const vendorInfo = {
      name: data.vendorName,
      email: data.contactEmail,
      cover: cover,
      phoneNumber: data.contactPhone,
      address: data.contactAddress,
      description: data.vendorDescription,
    };

    const vendorRes = await axiosSecure.post("/vendors", vendorInfo);

    if (vendorRes.data.response._id) {
      reset();
      toast.success(`New Vendor ${data.vendorName} Added`);
    }
  };

  return (
    <div className="px-10 py-5">
      <div className="card flex-1 rounded-none bg-base-100 shadow-xl">
        <div className="card-body flex flex-col">
          <h5 className="text-center">Vendor Information</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("vendorName", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Cover</span>
              </label>
              <input
                type="file"
                className="file-input file-input-sm file-input-bordered file-input-primary w-full rounded-none"
                onChange={handleFileChange}
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
                placeholder="Enter Contact Phone Number"
                className="input input-sm input-bordered input-primary rounded-none"
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
                placeholder="Enter Vendor Address"
                className="input input-sm input-bordered input-primary rounded-none"
                {...register("contactAddress", { required: true })}
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
                {...register("vendorDescription", { required: true })}
              ></textarea>
            </div>
            <div className="card-actions justify-end mt-2">
              <button type="submit" className="btn btn-primary rounded-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
