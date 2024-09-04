import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImageUpload } from "../../../components/InputComponent/ImageUpload";
import { PageTitle } from "../../../components/Shared/PageTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { utilFunctions } from "../../../utils/utilFunctions";

export const AddImage = () => {
  const [image, setImage] = useState("https://via.placeholder.com/1500x500");
  const [isUploading, setIsUploading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const { createUniqueFileName, handleFileChange } = utilFunctions();

  const onSubmit = async (data) => {
    const imageInfo = {
      imageURL: image,
      description: data.imageDescription,
    };

    const imageRes = await axiosSecure.post("/galleries", imageInfo);

    if (imageRes.data.response._id) {
      reset();
      setImage("https://via.placeholder.com/1500x500");
      toast.success(`New Image Added`);
    }
  };

  return (
    <>
      <PageTitle title={"Add Image for Gallery Page"} />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl">
            Add Image for Gallery
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <ImageUpload
              isUploading={isUploading}
              image={image}
              handleFileChange={handleFileChange}
              folderName={"galleries"}
              setImage={setImage}
              setIsUploading={setIsUploading}
            />
            <div>
              <textarea
                id="vendorDescription"
                className="mt-2 p-4 resize-none w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                rows="4"
                placeholder="Enter Description of the Image Here..."
                {...register("imageDescription", { required: true })}
              ></textarea>
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
