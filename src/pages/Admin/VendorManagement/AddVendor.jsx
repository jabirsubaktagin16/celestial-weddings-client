import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import services from "../../../../public/services.json";
import { ImageUpload } from "../../../components/InputComponent/ImageUpload";
import { VendorInputComponent } from "../../../components/InputComponent/VendorInputComponent";
import { PageTitle } from "../../../components/Shared/PageTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { utilFunctions } from "../../../utils/utilFunctions";

export const AddVendor = () => {
  const [cover, setCover] = useState("https://via.placeholder.com/1500x500");
  const [isUploading, setIsUploading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const { handleFileChange } = utilFunctions();

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
      setCover("https://via.placeholder.com/1500x500");
      toast.success(`New Vendor ${data.vendorName} Added`);
    }
  };

  return (
    <>
      <PageTitle title={"Add New Vendor"} />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
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
            <ImageUpload
              isUploading={isUploading}
              image={cover}
              handleFileChange={handleFileChange}
              folderName={"vendorCover"}
              setImage={setCover}
              setIsUploading={setIsUploading}
            />
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
