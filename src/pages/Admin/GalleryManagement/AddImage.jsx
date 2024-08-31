import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PageTitle } from "../../../components/Shared/PageTitle";
import app from "../../../firebase/firebase.config";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { createUniqueFileName } from "../../../utils/createUniqueFileName";

export const AddImage = () => {
  const [image, setImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const { initialApp, fireBaseStorageURL } = app;
  const storage = getStorage(initialApp, fireBaseStorageURL);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  async function helperForUploadingImageToFirebase(file) {
    const getFileName = createUniqueFileName(file);
    const storageReference = ref(storage, `gallery/${getFileName}`);
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
      setImage(extractImageUrl);
      setIsUploading(false);
      /* setFormData({
        ...formData,
        imageUrl: extractImageUrl,
      }); */
    }
  }

  const onSubmit = async (data) => {
    const imageInfo = {
      imageURL: image,

      description: data.imageDescription,
    };

    const imageRes = await axiosSecure.post("/galleries", imageInfo);

    if (imageRes.data.response._id) {
      reset();
      setImage("");
      toast.success(`New Image Added`);
    }
  };

  const handleModifyImage = () => {
    //   setFile(null);
    setImage("");
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
            <div>
              <textarea
                id="vendorDescription"
                className="mt-2 p-4 resize-none w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                rows="4"
                placeholder="Enter Description of the Image Here..."
                {...register("imageDescription", { required: true })}
              ></textarea>
            </div>

            {isUploading && <p>Loading Image</p>}
            {!isUploading && !image && (
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
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
            )}
            {!isUploading && image && (
              <div className="w-full text-center">
                <img
                  src={image}
                  alt="Uploaded"
                  className="h-64 w-full object-cover rounded-lg"
                />
                <button
                  onClick={handleModifyImage}
                  className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Modify Image
                </button>
              </div>
            )}
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
