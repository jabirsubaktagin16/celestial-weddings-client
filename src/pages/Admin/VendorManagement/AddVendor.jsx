import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import services from "../../../../public/services.json";
import { VendorInputComponent } from "../../../components/InputComponent/VendorInputComponent";
import { PageTitle } from "../../../components/Shared/PageTitle";
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
      category: data.vendorCategory,
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
    <>
      <PageTitle title={"Add New Vendor"} />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Vendor Information
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            To add a new vendor, provide essential details such as name, email,
            contact information, and a small description. Ensure accuracy for
            smooth processing.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <VendorInputComponent
              labelTitle={"Vendor Name"}
              name={"vendorName"}
              placeholder={"Enter Vendor Name"}
              register={register}
            />
            <div>
              <label
                htmlFor="HeadlineAct"
                className="block text-sm font-medium text-gray-900"
              ></label>

              <select
                name="vendorCategory"
                id="vendorCategory"
                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm p-4 pe-12"
                {...register("vendorCategory", { required: true })}
              >
                <option disabled selected defaultValue="">
                  Select Category from the List
                </option>
                {services.map((service) => (
                  <option value={service.shortForm}>{service.title}</option>
                ))}
              </select>
            </div>
            <VendorInputComponent
              labelTitle={"Contact E-Mail"}
              name={"contactEmail"}
              placeholder={"Enter Contact E-Mail"}
              register={register}
            />
            <VendorInputComponent
              labelTitle={"Contact Number"}
              name={"contactPhone"}
              placeholder={"Enter Contact Number"}
              register={register}
            />
            <VendorInputComponent
              labelTitle={"Contact Address"}
              name={"contactAddress"}
              placeholder={"Enter Contact Address"}
              register={register}
            />
            <div>
              <textarea
                id="vendorDescription"
                className="mt-2 p-4 resize-none w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                rows="4"
                placeholder="Enter Description of the Vendor Here..."
                {...register("vendorDescription", { required: true })}
              ></textarea>
            </div>

            <div className="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 ">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 ">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  onChange={handleFileChange}
                  type="file"
                  className="hidden"
                />
              </label>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
